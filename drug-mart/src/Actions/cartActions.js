export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const setCartItems = items => ({
    type: SET_CART_ITEMS,
    payload: items
});

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
});

export const addItem = item => ({
    type: ADD_ITEM,
    item
});