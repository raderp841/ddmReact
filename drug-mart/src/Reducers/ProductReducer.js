import React from 'react';
import {FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE} from '../Actions/productActions';

let defaultState = {
    items: [],
    loading: false,
    error: null
};

const ProductReducer = (state = defaultState, action) => {
    console.log(action);
    switch(action.type){
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
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
        default:
            return state;
    }
};

const fetchItems = () => {
    fetch('https://discountdm.herokuapp.com/getItems', {
         
    })
      .then((response) => {
          var res = response.json();
        })
      .then((items) => {
        return {storeItems: [items]};
      });
      console.log('fetch items');
}

export default ProductReducer;