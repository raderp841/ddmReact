import React from 'react';
import {SET_CART_ITEMS, REMOVE_ITEM, ADD_ITEM} from '../Actions/cartActions'


let defaultState = {
    cartItems: []
};

const CartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let addedItems = [...state.cartItems, action.item];
            localStorage.setItem('cartItems', JSON.stringify(addedItems));
            return {cartItems: addedItems};
        case REMOVE_ITEM:
            let removed = false;
            let filteredItems = [...state.cartItems.filter(item => {
                if(!removed && (item.id == action.itemId)){
                    removed = true;
                    return;
                }
                return item;
            })];
            localStorage.setItem('cartItems', JSON.stringify(filteredItems));
            return {cartItems: filteredItems};

        case SET_CART_ITEMS:
            console.log(action);
            return {cartItems: action.payload};
        default:
            return defaultState;
    }
};

export default CartReducer;