import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import App from './App';

const baseConfig = () => {

    window.global = {
        debug: true,
        debugArea: {
          login: true,
          register: true,
        },
        baseUrl: "62.113.118.96:9988",
        timpApiUrl: 'https://mytimp.com',
        colors: {
            error: 'F24E38',
            success: '50B25F',
            alert: 'F2C438',
            info: '4363D4'
        }
    }

    axios.defaults.baseURL = 'http://' + window.global.baseUrl + '/';

    if(window.global.debug)
        console.log("App in debug mode!");

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

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

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