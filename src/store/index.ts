import { applyMiddleware, createStore } from 'redux';
import { compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';
export const composeEnhancers =
    (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [thunk];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

export const store = createStore(rootReducer, initialState, enhancer);
