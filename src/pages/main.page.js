import React from 'react';
import Auth from "../services/Auth";

const Main = (props) => {
    return (
        <div>
            <h1>Main</h1>
            <button onClick={() => {
                Auth.logout(() => {
                    props.history.push("/");
                });
            }}>Logout</button>
        </div>
    )
}

export default Main;