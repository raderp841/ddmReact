import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCartItems} from '../Actions/cartActions';

export const LoginSuccess = (props) => (
    <div>
        <div className="row">
            <h3 className="offset-sm-3 col-sm-6">Welcome {props.userName}</h3>
            <Link to="/shop" onClick={() => props.handleGetItemsForUser(props.userId)} className="btn btn-primary offset-sm-3 col-sm-6">Shop</Link>
        </div>
        <hr />
        <div className="row">
            <Link to="/cart" onClick={() => props.handleGetItemsForUser(props.userId)} className="btn btn-primary offset-sm-3 col-sm-6">My Cart</Link>
        </div>
    </div>
);

const mapStateToProps = state => ({
    userId: state.UserReducer.user.id
});

const mapDispatchToProps = dispatch => ({
    handleGetItemsForUser: userId => dispatch(fetchCartItems(userId))
});

const ConnectedLoginSuccess = connect(mapStateToProps, mapDispatchToProps)(LoginSuccess);

export default ConnectedLoginSuccess;