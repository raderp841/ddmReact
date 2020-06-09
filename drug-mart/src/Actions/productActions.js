export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: {products}
});


export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());

 //    return fetch("http://localhost:8080/getItems")
     return fetch("https://discountdm.herokuapp.com/getItems")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }