import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Login from "../pages/Login/login.page";
import Register from "../pages/Register/register.page";
import Error404 from "../pages/404/404.page";
import ProjectsPage from "../pages/Projects/projects.page";
import TasksPage from "../pages/Tasks/tasks.page";
import ChatsPage from "../pages/Chats/chats.page";
import ConfigPage from "../pages/Config/config.page";
import ForgotPage from "../pages/Forgot/forgot.page";
import {UserContext} from "../context";

const RouterComponent = () => {

    const {user} = React.useContext(UserContext);

    if(window.global.debug){
        console.log(user);
    }

    const privateRoutes = [
        {path: '/', component: ProjectsPage, exact: true},
        {path: '/error', component: Error404, exact: true},
        {path: '/projects', component: ProjectsPage, exact: true},
        {path: '/tasks', component: TasksPage, exact: true},
        {path: '/chats', component: ChatsPage, exact: true},
        {path: '/config', component: ConfigPage, exact: true},
    ];

    const publicRoutes = [
        {path: '/login', component: Login, exact: true},
        {path: '/register', component: Register, exact: true},
        {path: '/forgot', component: ForgotPage, exact: true},
    ];

    return (

        user
            ?
            <Switch>
                {
                    privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                            key={route.path}
                        />
                    )
                }
                <Redirect to="/projects"/>
            </Switch>
            :
            <Switch>
                {
                    publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                            key={route.path}
                        />
                    )
                }
                <Redirect to="/login"/>
            </Switch>

    );
};

export default RouterComponent;