import React from 'react';
import { Link } from "react-router-dom";


const RegisterSuccess = () => (
    <div className="row">
        <h3 className="col-xs-12 offset-sm-3 col-sm-6 text-center">Registered Successfully</h3>
        <Link to='/login' className="btn btn-primary col-xs-12 offset-sm-3 col-sm-6">Login Now</Link>
    </div>
);

export default RegisterSuccess;