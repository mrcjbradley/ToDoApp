import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const {
        logger
    } = require('redux-logger');
    middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares)))
);

export default configureStore;