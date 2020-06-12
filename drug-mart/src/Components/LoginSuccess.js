import React from 'react';
import {Link} from 'react-router-dom';

export const LoginSuccess = (props) => (
    <div>
        <div className="row">
            <h3 className="offset-sm-3 col-sm-6">Welcome {props.userName}</h3>
            <Link to="/shop" className="btn btn-primary offset-sm-3 col-sm-6">Shop</Link>
        </div>
        <hr />
        <div className="row">
            <Link to="/cart" className="btn btn-primary offset-sm-3 col-sm-6">My Cart</Link>
        </div>
    </div>
);

export default LoginSuccess;