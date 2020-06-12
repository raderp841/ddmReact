import React from 'react';
import { connect } from 'react-redux';

const CartCounter = (props) => (
    <span className="cart-counter">
        {props.items !== undefined && props.items.length > 0 ? <span className="span-counter"> {props.items.length} </span> : <span></span>}
    </span>
);

const mapStateToProps = state => ({
    items: state.CartReducer.cartItems
});

const ConnectedCounter = connect(mapStateToProps)(CartCounter);

export default ConnectedCounter;