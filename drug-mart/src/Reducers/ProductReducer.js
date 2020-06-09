import React from 'react';
import {FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, SET_PRODUCTS, setProducts} from '../Actions/productActions';

let defaultState = {
    items: [],
    loading: false,
    error: null
};

const ProductReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            localStorage.setItem('shopItems', JSON.stringify(action.payload.products));
            return {
                ...state,
                loading: false,
                items: action.payload.products
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
              };
        case SET_PRODUCTS:
            return {
                ...state,
                loading: false,
                items: action.payload.products
            }
        default:
            return state;
    }
};

export default ProductReducer;