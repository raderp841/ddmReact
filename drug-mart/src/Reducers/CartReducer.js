import React from 'react';
import {
    SET_CART_ITEMS, 
    REMOVE_ITEM, 
    ADD_ITEM, 
    FETCH_ITEMS_BEGIN, 
    FETCH_ITEMS_FAILURE, 
    FETCH_ITEMS_SUCCESS,
} from '../Actions/cartActions'


let defaultState = {
    cartItems: [],
    loading: false,
    error: null
};

const CartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let addedItems = [...state.cartItems, action.item];
            localStorage.setItem('cartItems', JSON.stringify(addedItems));
            return {cartItems: addedItems};

        case REMOVE_ITEM:
            let filteredItems = [...state.cartItems.filter(item => item.userItemId !== action.userItemId)];
            localStorage.setItem('cartItems', JSON.stringify(filteredItems));
            return {cartItems: filteredItems};

        case SET_CART_ITEMS:
            return {cartItems: action.payload};

        case FETCH_ITEMS_BEGIN:
            return{
                ...state,
                loading: true,
                error: null
            };
        
        case FETCH_ITEMS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            };

        case FETCH_ITEMS_SUCCESS:
            return{
                ...state,
                loading: false,
                cartItems: action.payload.items
            };

        default:
            return defaultState;
    }
};

export default CartReducer;