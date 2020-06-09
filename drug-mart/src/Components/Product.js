import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../Actions/cartActions';
import {removeItem} from '../Actions/cartActions';


class Product extends React.Component{

        
    render(){
        return (
            <div>
                <div className="d-none success-added" id={"added-item-" + this.props.product.id}></div>
                <img 
                    src={this.props.product.imgPath} 
                    className="card-img-bottom d-none d-sm-block lrg-product-img" 
                    >
                </img>
                <img
                    src={this.props.product.imgPath}
                    className="d-block d-sm-none small-product-img"
                    >
                </img>
                <h4 className="card-header bg-white">{this.props.product.name}</h4>
                <h5 className="card-body text-muted">${this.props.product.price}</h5>
                {(this.props.isCart 
                    ? 
                    <button 
                        style={{margin: 10}}
                        className=" float-right mb3 btn btn-danger"
                        onClick={() => this.props.handleRemoveItem(this.props.product.id)}
                    >
                    Remove
                    </button>
                    : 
                    <button
                        style={{margin: 10}}
                        id="product-add" 
                        className=" float-right mb3 btn btn-success" 
                        onClick={() => {
                            this.props.handleAddItem(this.props.product);
                            addedItemMessage(this.props.product.name, this.props.product.id);
                        }}
                    >
                    Add to cart
                    </button>
                )}
        </div>
        );
    }
}

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

const addedItemMessage = (itemName, itemId) => {
    let addMessage = document.getElementById('added-item-' + itemId);
    addMessage.innerHTML = itemName + " added to cart";
    addMessage.classList.remove(['d-none']);
    setTimeout(() => 
    (addMessage.classList.add(['d-none'])), 1000);
};
