import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const startApp = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();

}

if(window.cordova)
{
    document.addEventListener('deviceready', () => {
        console.log('Running cordova-' + window.cordova.platformId + '@' + window.cordova.version);
        startApp();
    }, false);
}
else
    startApp();