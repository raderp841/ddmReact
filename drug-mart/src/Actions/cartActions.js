export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const FETCH_ITEMS_BEGIN = 'FETCH_ITEMS_BEGIN';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';

export const removeItem = userItemId => ({
    type: REMOVE_ITEM,
    userItemId
});

export const addItem = item => ({
    type: ADD_ITEM,
    item
});

export const fetchItemsBegin = () => ({
    type: FETCH_ITEMS_BEGIN
});

export const fetchItemsFailure = (error) => ({
    type: FETCH_ITEMS_FAILURE,
    payload: {error}
});

export const fetchItemsSuccess = (items) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: {items}
});

export function fetchCartItems(userId) {
    return dispatch => {
      dispatch(fetchItemsBegin());

     return fetch("https://discountdm.herokuapp.com/getItemsForUser",{
         headers: {
             "USERID": userId
         }
     })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchItemsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchItemsFailure(error)));
    };
  }

  export function postAddItem(userId, item){
      return dispatch => {
          
     return fetch("https://discountdm.herokuapp.com/addItem",{
         headers: {
             "USERID": userId,
             "ITEMID": item.id
         }
     })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            if(json){
                dispatch(addItem(item));
            }else{
            }
        })
        .catch(error => console.log(error));
      };
  }

  export function putRemoveItem(userItemId){
    return dispatch => {

        return fetch("https://discountdm.herokuapp.com/removeItem",{
       headers: {
           "ITEMID": userItemId
       }
   })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
          if(json){
              dispatch(removeItem(userItemId));
          }else{
          }
      })
      .catch(error => console.log(error));
    };
}

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }