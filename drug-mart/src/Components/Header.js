import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CartCounter from './CartCounter';

const Header = (props) => (
    (
        <div>
            <nav className="navbar navbar-expand navbar-light">
                <div className="d-none d-sm-none d-md-block ">
                     <Link className="navbar-brand" to="/">Discount Drug Mart</Link>
                </div>
                <div className="d-sm-block d-md-none header-brand">
                     <Link className="navbar-brand" to="/">DDM</Link>
                </div>
                <div className="navbar" id="navbarText">
                    <ul className="navbar-nav">
                        <li className="nav-item header-link">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item header-link">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item header-link">
                            <Link className="nav-link" to="/cart">Cart <CartCounter counter={props.cartItems != undefined ? props.cartItems.length : 0}/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
);

const mapStateToProps = state => ({
    cartItems: state.CartReducer.cartItems
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;