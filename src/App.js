import React from 'react';
import {HashRouter} from "react-router-dom";
import RouterComponent from "./components/router.component";
import AuthService from "./services/auth.service";

import './css/styles.min.css';
import {UserContext} from "./context";
import SocketioComponent from "./components/socketio.component";

const App = () => {

    const [user, setUser] = React.useState(!!AuthService.getCurrentUser());

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <SocketioComponent>
                <HashRouter>
                    <RouterComponent/>
                </HashRouter>
            </SocketioComponent>
        </UserContext.Provider>
    );

}

export default App;