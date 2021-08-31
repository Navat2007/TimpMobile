import React from 'react';

import AuthService from "../../services/auth.service";
import {useHistory} from "react-router";

const Main = () => {

    const router = useHistory();
    const user = AuthService.getCurrentUser();

    React.useEffect(() => {



    }, []);

    if (user == null) {
        if(window.global.debug)
            console.log("No user. Load login");

        router.push('/login');
    }
    else
    {
        if(window.global.debug)
            console.log("User: ", user);

        router.push('/projects');
    }

    return (
        <div>
            Main
        </div>
    );

}

export default Main;