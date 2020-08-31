import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

// @ts-ignore
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, componseEnhancers(applyMiddleware(thunk)));
