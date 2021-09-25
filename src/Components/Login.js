import React from 'react';
import { FaFacebook,FaGoogle } from "react-icons/fa";
import firebase from 'firebase/app'
import {auth} from '../firebase'
const Login = () => {
    return ( 
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to BenChat!</h2>
        
                <div
                    className='login-button google'
                >
                    <FaGoogle /> Sign In with Google
                </div>
                <div
                    className='login-button facebook'
                >
                    <FaFacebook /> Sign In with Facebook
                </div>
            </div>
        </div>
     );
}
 
export default Login;