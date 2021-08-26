import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import App from './App';

const baseConfig = () => {

    window.global = {
        baseUrl: "62.113.118.96:9988",
    }

    axios.defaults.baseURL = 'http://' + window.global.baseUrl + '/';

}

const startApp = () => {

    baseConfig();

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

const startMobileApp = () => {

    baseConfig();

}

if(window.cordova)
{
    document.addEventListener('deviceready', () => {
        console.log('Running cordova-' + window.cordova.platformId + '@' + window.cordova.version);
        startMobileApp();
    }, false);
}
else
    startApp();