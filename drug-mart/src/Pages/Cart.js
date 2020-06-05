import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../Actions/REMOVE_ITEM'
import Product from '../Components/Product'

let total = 0.0;

const Cart = (state) => (
    <div>
        <p>Here is your cart</p>
        <div className="row text-center">
        {(state.CartReducer.cartItems != undefined && state.CartReducer.cartItems.count != 0) 
            ?
             state.CartReducer.cartItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 align-content-center">
                    <Product product={item} isCart={true}></Product>            
            </div>
            )
            )
            :
             <p>You have no items in your cart</p>}
        </div>
        <hr />
        <h4>Total: ${getTotal(state.CartReducer.cartItems)}</h4>
    </div>
);

const getTotal = (items) => {
    let total = 0;
    for(let i = 0; i < items.length; i++){
        total += items[i].price;
    }
    return round(total, 2);
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => {
    return {
        handleRemoveItem: itemId => dispatch(removeItem(itemId))
      };
};

const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default ConnectedCart;