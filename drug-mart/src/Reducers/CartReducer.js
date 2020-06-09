import React from 'react';


let defaultState = {
    cartItems: []
};

const CartReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return {cartItems: [...state.cartItems, action.item]};
        case "REMOVE_ITEM":
            let removed = false;
            return {cartItems: [...state.cartItems.filter(item => {
                if(!removed && (item.id == action.itemId)){
                    removed = true;
                    return;
                }
                return item;
            })]};
        default:
            return defaultState;
    }
};

export default CartReducer;