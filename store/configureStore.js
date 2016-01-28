import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';

const logger = function() {
    return next => action => {
        console.group(action.type);
        if (action.payload) {
            console.info(action.payload);
        }
        console.groupEnd();
        next(action);
    }
};

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    logger
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
