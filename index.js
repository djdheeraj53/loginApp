/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/store/reducers';
import {name as appName} from './app.json';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);

const reduxApp = () => (
    <Provider store={createStoreWithMiddleware}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => reduxApp);
