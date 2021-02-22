import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.notes);
    const [ formValues, HandleInputChange, reset ] = useForm( note ); 
    const { body, title } = formValues;

    const activeId = useRef( note.id )

    useEffect(() => {
        if ( note.id !== activeId.current ) {
            reset( note )
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch( activeNote( formValues.id, { ...formValues } ) )
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">

            <NotesAppBar  />
            
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name={"title"}
                    value={ title }
                    onChange={ HandleInputChange }
                />

                <textarea 
                    placeholder="what happened today"
                    className="notes__textarea"
                    name={"body"}
                    value={ body }
                    onChange={ HandleInputChange }
                ></textarea>

                {
                    (note.img) &&
                    <div className="notes__image">
                        <img src="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?resize=940,530" alt="imagen"/>
                    </div>
                }
            </div>

        </div>
    )
}
