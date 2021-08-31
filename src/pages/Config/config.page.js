import React from 'react';
import {UserContext} from "../../context";

const ConfigPage = () => {

    const {setUser} = React.useContext(UserContext);

    return (
        <div>
            <ul>
                <li>
                    <button onClick={() => setUser(false)}>Выйти из аккаунта</button>
                </li>
            </ul>
        </div>
    );
};

export default ConfigPage;