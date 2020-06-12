import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CartCounter from './CartCounter';
import { logoutUser } from '../Actions/userActions';

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
                <div className=" navbar-collapse justify-content-between" id="navbarText">
                    <ul className="navbar-nav mr-auto">
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
                    

                        {
                            props.user !== undefined && props.user.id !== -1
                             ? 
                              (
                                <ul className="navbar-nav">
                                    <li className="nav-item header-link">
                                        <Link onClick={() => props.handleLogout()} className="nav-link" to="/login">Logout</Link>
                                    </li>
                               </ul>
                              )
                             :
                             (
                                <ul className="navbar-nav">
                                    <li className="nav-item header-link">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item header-link">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </ul>
                             )
                        }
                </div>
            </nav>
        </div>
    )
);

const mapStateToProps = state => ({
    cartItems: state.CartReducer.cartItems,
    user: state.UserReducer.user
});

const mapDispatchToProps = dispatch => ({
    handleLogout: () => dispatch(logoutUser())
});

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;