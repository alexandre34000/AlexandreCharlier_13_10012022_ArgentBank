import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import allReducers from '../_reducer';

export const store = createStore(
    allReducers,
    applyMiddleware(
        thunkMiddleware
    )
);