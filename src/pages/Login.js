import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from "../services/Auth";

const Login = () => {

    let name = '';
    let password = '';

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading"></h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => name = event.target.value}/></div>
                <div><input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => password = event.target.value}/></div>
                <button onClick={() => {
                    auth.login(() => {
                        this.props.history.push("/main");
                    });
                }}>Login</button>
            </div>
        </div>
    )
}

export default Login;