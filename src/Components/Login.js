import React from 'react';
import "../Stylesheets/Login.css"
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://logodownload.org/wp-content/uploads/2019/08/slack-logo-1.png"
                    alt=""
                />
                <h1>Sign in to XChange</h1>
                <p>programmer.xchange.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;