import React from 'react';
import './login.css';
import {Redirect} from 'react-router-dom';


const LoginPage = ({isLoggedIn, onLogin})=>{
    if(isLoggedIn){
        return <Redirect to="/movies/list"/>
    }
    return(
        <div className="login_group">
            <p>Login to see secret page!</p>
            <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </div>
    )
}

export default LoginPage