import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RouterComponent from "./components/router.component";
import AuthService from "./services/auth.service";

import './css/styles.min.css';
import {UserContext} from "./context";

const App = () => {

    const [user, setUser] = React.useState(false);

    React.useEffect(() => {

        const authUser = AuthService.getCurrentUser();

        if(authUser)
        {
            setUser(authUser);
        }

    }, []);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <BrowserRouter>
                <RouterComponent/>
            </BrowserRouter>
        </UserContext.Provider>
    );

}

export default App;