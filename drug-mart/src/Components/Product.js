import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../Actions/ADD_ITEM';
import {removeItem} from '../Actions/REMOVE_ITEM';


const Product = (props) => (
    <div>
        <img src={props.product.imgPath} className="img-fluid card-img-overlay" height="100" width="100"></img>
        <h4 className="card-header bg-white">{props.product.name}</h4>
        <h5 className="card-body text-muted">${props.product.price}</h5>
        {(props.isCart 
            ? 
            <button style={{margin: 10}} className=" float-right mb3 btn btn-danger" onClick={() => props.handleRemoveItem(props.product.id)}>Remove</button>
            : 
            <button style={{margin: 10}} className=" float-right mb3 btn btn-success" onClick={() => props.handleAddItem(props.product)}>Add to cart</button>)}
    </div>
);


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => {
    return {
        handleAddItem: item => dispatch(addItem(item)),
        handleRemoveItem: itemId => dispatch(removeItem(itemId))
      };
};

const ConnectedProduct = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ConnectedProduct;
