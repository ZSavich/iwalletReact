import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import IWalletsService from './services/iwallet-service';
import { IWalletsServiceProvider } from "./components/iwallets-service-context";

import store from './store';

const iWalletsService = new IWalletsService();

ReactDOM.render(
<Provider store={store}>
    <ErrorBoundry>
        <IWalletsServiceProvider value={iWalletsService}>
            <Router>
                <App />
            </Router>
        </IWalletsServiceProvider>
    </ErrorBoundry>
</Provider>
, document.getElementById('root'));