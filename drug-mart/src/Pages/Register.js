import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../Actions/userActions';
import RegisterSuccess from '../Components/RegisterSuccess';

var userNameElement;
var passwordElement;
var passwordConfirmElement;
let areMatchingPasses = true;

class Register extends React.Component{
    

    componentDidMount(){
        userNameElement = document.getElementById('username');
        passwordElement = document.getElementById('password');
        passwordConfirmElement = document.getElementById('passwordCheck');
        alert("For demo use only. Please use a dummy password for safety (e.g. 'Test123!'");
    }


    render(){
        if(this.props.regSuccess === undefined || this.props.regSuccess === false){
            return (
                <div>
                        <form className="container text-center">
                            <h3>Register</h3>
                            <hr />
                            <div className="form-group row">
                                <label className="offset-sm-3 col-sm-6">Username</label>
                                <input id="username" type="text" className="form-control offset-sm-3 col-sm-6" placeholder="enter username"></input>
                            </div>
                            <div className="form-group row">
                                <label className="offset-sm-3 col-sm-6">Password</label>
                                <input id="password" type="password" className="form-control offset-sm-3 col-sm-6" placeholder="enter password"></input>
                            </div>
                            <div className="form-group row">
                                <label className="offset-sm-3 col-sm-6">Confirm Password</label>
                                <input id="passwordCheck" type="password" className="form-control offset-sm-3 col-sm-6" placeholder="retype password"></input>
                            </div>
                            <br />
                        </form>
                        <div className="form-group row">
                            <button 
                                className="btn btn-primary btn-block offset-sm-3 col-sm-6"
                                onClick={() => {
                                    if(checkMatch(passwordElement.value, passwordConfirmElement.value)){
                                        areMatchingPasses = true;
                                        this.props.handleRegisterUser(userNameElement.value, passwordElement.value);
                                    }else{
                                        areMatchingPasses = false;
                                    }
                                }}
                            >
                            Sign up
                            </button>
                        </div>
                    </div>
            );
        }else {
            return (
                <RegisterSuccess />
            );
        }
    }
}

const mapStateToProps = state => ({
    regSuccess: state.UserReducer.regSuccess
});

const mapDispatchToProps = dispatch => ({
    handleRegisterUser: (username, password) => dispatch(registerUser(username, password))
});


const ConnectedRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

export default ConnectedRegister;

const checkMatch = (a,b) => (
    a === b
);