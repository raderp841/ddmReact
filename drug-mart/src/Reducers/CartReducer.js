import React from 'react';

let defaultState = {
    cartItems: []
};

const CartReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return {cartItems: [...state.cartItems, action.item]};
        case "REMOVE_ITEM":
            return {cartItems: [...state.cartItems.filter(item => item.id != action.itemId)]}
        default:
            return {cartItems: [...state.cartItems]}
    }
};

export default CartReducer;