import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => { //este va retornar un observable //si no esta autenticado el (user) va regresar un Null
            //**el obserable va estar pendiente de los cambios de la auth y se va ejecutar de nuevo el callback */
            if ( user?.uid ) { //si el user? tiene algo entonces pregunta si tiene el uid
                dispatch( login( user.uid, user.displayName ) );

                setIsLoggedIn( true );

            }else {
                setIsLoggedIn( false );
            }

            setChecking( false );

        } )   

    }, [ dispatch, setChecking, setIsLoggedIn ])

    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={ IsLoggedIn } 
                    />
                    <PrivateRoute 
                        exact 
                        isAuthenticated={ IsLoggedIn }
                        path="/" 
                        component={ JournalScreen } 
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
