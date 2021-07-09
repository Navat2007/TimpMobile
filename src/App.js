import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => (
    <Router>
        <Route path="/" exact component={Index}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/main" exact component={Main}/>
    </Router>
);

export default App;