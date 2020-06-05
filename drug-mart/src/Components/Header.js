import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{


    render(){
        return (
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
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;