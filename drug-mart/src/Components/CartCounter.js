import React from 'react';

const CartCounter = (props) => (
    <span className="cart-counter">
        {props.counter > 0 ? <span className="span-counter"> {props.counter} </span> : <span></span>}
    </span>
);

export default CartCounter;