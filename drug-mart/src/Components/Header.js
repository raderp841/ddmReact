import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{


    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Discount Drug Mart</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                        Saving you the run around since 1969
                        </span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;