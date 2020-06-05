import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import CartReducer from '../Reducers/CartReducer';
import ProductReducer from '../Reducers/ProductReducer';

let store = createStore(combineReducers({CartReducer, ProductReducer}), applyMiddleware(thunk));

export default store;






