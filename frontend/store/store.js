import {
    createStore,
    applyMiddleware,
    // compose
} from 'redux';
import thunk from 'redux-thunk';
// import { logger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default (preloadedState = {}) => (
//     createStore(
//         rootReducer,
//         preloadedState,
//         composeEnhancers(applyMiddleware(thunk, logger))
//     )
// );

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    // must use 'require' (import only allowed at top of file)
    const {
        logger
    } = require('redux-logger');
    middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;