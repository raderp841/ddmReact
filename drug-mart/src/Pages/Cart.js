import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../Actions/cartActions';
import Product from '../Components/Product';
import {setCartItems} from '../Actions/cartActions';

let total = 0.0;
class Cart extends React.Component{

    componentDidMount(){
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if(cartItems === undefined || cartItems.length == 0){
        }else{
            this.props.handleSetCartItems(cartItems);
        }
    }
    
    render(){
        return (
            <div>
                <p>Here is your cart</p>
                <div className="row text-center">
                {(this.props.CartReducer.cartItems != undefined && this.props.CartReducer.cartItems.count != 0) 
                    ?
                     this.props.CartReducer.cartItems.map((item) => (
                    <div key={item.id + Math.random()} className="col-md-6 col-lg-4 align-content-center">
                            <Product product={item} isCart={true}></Product>            
                    </div>))
                    :
                     <p>You have no items in your cart</p>}
                </div>
                <hr />
                <h4>Total: ${getTotal(this.props.CartReducer.cartItems)}</h4>
            </div>
        );
    }
}


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
        handleRemoveItem: itemId => dispatch(removeItem(itemId)),
        handleSetCartItems: items => dispatch(setCartItems(items))
      };
};

const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default ConnectedCart;