import React from 'react';
import { connect } from 'react-redux';

import {loginUser} from '../Actions/userActions';
import LoginSuccess from '../Components/LoginSuccess';

class Login extends React.Component{

    componentDidUpdate(){
        clearInputs();
    }


    render(){
        if(this.props.user == undefined || this.props.user.id == -1){
       return (
                <div>
                    <form className="container text-center">
                        <h3>Sign in</h3>
                        <hr />
                        {this.props.user == undefined ? <div className="alert-danger offset-sm-3 col-sm-6">Username or Password is invalid</div>: <span></span>}
                        <div className="form-group row">
                            <label className="offset-sm-3 col-sm-6">Username</label>
                            <input id="username" type="text" className="form-control offset-sm-3 col-sm-6" placeholder="enter username"></input>
                        </div>
                        <div className="form-group row">
                            <label className="offset-sm-3 col-sm-6">Password</label>
                            <input id="password" type="password" className="form-control offset-sm-3 col-sm-6" placeholder="enter password"></input>
                        </div>
                        <br />
                    </form>
                    <div className="form-group row">
                        <button 
                            className="btn btn-primary btn-block offset-sm-3 col-sm-6"
                            onClick={
                                () => this.props.handleOnLogin(document.getElementById('username').value, document.getElementById('password').value)
                            }
                        >
                        Login
                        </button>
                    </div>
                </div>
            );
        }else{
            localStorage.setItem('userId', this.props.user.id);
            return(
            <LoginSuccess userName={this.props.user.userName} />
            );
        }
    }
}


const mapStateToProps = state => ({
    user: state.UserReducer.user
});

const mapDispatchToProps = dispatch => ({
    handleOnLogin: (username, password) => {
        dispatch(loginUser(username, password));
    }
});

const clearInputs = () => {
    if(document.getElementById('username') !== null && document.getElementById('password') !== null){
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
};

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectedLogin;