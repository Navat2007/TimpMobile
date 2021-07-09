import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ProtectedRoute} from "./services/Protected.route";
import IndexPage from './pages/index.page';
import LoginPage from './pages/login.page';
import Main from './pages/main.page';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/android_asset/www/index.html" exact component={IndexPage}/>
            <Route path="/" exact component={IndexPage}/>
            <Route path="/login" exact component={LoginPage}/>
            <ProtectedRoute path="/main" component={Main}/>
            <Route path="*" component={(route) => {
                console.log(route);
                return "404 NOT FOUND";
            }}/>
        </Switch>
    </BrowserRouter>
);

export default App;