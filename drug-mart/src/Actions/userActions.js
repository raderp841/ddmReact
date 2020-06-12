
export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const REGISTER_USER_BEGIN = 'REGISTER_USER_BEGIN';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const loginUserBegin = () => ({
    type: LOGIN_USER_BEGIN
});

export const loginUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: {error}
});

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: {user}
});

export const registerUserBegin = () => ({
    type: REGISTER_USER_BEGIN
});

export const registerUserFailure = (error) => ({
    type: REGISTER_USER_FAILURE,
    payload: {error}
});

export const registerUserSuccess = () => ({
    type: REGISTER_USER_SUCCESS
}); 

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const loginUser = (username, password) => {
    return dispatch => {
        dispatch(loginUserBegin());
  
   
      // return fetch("https://discountdm.herokuapp.com/loginUser")
       return fetch("https://discountdm.herokuapp.com/loginUser", {
           headers: {
               'USERNAME': username,
               'PASSWORD': password
           }
       })
          .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(loginUserSuccess(json));
            return json;
          })
          .catch(error => dispatch(loginUserFailure(error)));
      };
    };

export const registerUser = (username, password) => {
    return dispatch => {
        dispatch(registerUserBegin());

        // return fetch("https://discountdm.herokuapp.com/registerUser")
        return fetch("https://discountdm.herokuapp.com/registerUser", {
            headers: {
                'USERNAME': username,
                'PASSWORD': password
            }
        })
           .then(handleErrors)
           .then(res => res.json())
           .then(json => {
             dispatch(registerUserSuccess(json));
             return json;
           })
           .catch(error => dispatch(registerUserFailure(error)));
    };
};

  
    // Handle HTTP errors since fetch won't.
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
