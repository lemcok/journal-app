/*
    {
        notes: [],
        active: { //va a ser un objeto o puede estar null
            id: 'asdasdaasdasda',
            title: '',
            body: '',
            imageUrl: '',
            date: 21312321

        }
        
    }
*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = ( state = initialState, action ) => {
   
    switch ( action.type ) {

        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        default:
            return state;
    }
}
