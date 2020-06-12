import {
    LOGIN_USER_BEGIN,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS, 
    REGISTER_USER_BEGIN, 
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS,
    LOGOUT_USER
} from '../Actions/userActions';

let defaultState = {
    user: {
        id: -1,
        userName: "default"
    },
    regSuccess: false
};

const UserReducer = (state = defaultState, action) => {

    switch(action.type){
        case LOGIN_USER_BEGIN:
            return {state};

        case LOGIN_USER_SUCCESS:
            return {user: action.payload.user};

        case LOGIN_USER_FAILURE:
            return {state};

        case REGISTER_USER_BEGIN:
            return {state};

        case REGISTER_USER_SUCCESS:
            
            return {regSuccess: true};
        
        case REGISTER_USER_FAILURE:
            return {state};
        
        case LOGOUT_USER:
            localStorage.removeItem('userId');
            return {defaultState};

        default:
            return state;
    }

};

export default UserReducer;