import React from 'react';
import './App.css';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {AppRouter} from './Components/App-Router';
import store from './Store/Store'
import { Provider, connect } from 'react-redux';



const App = () => (
    <Provider store={store}>
      <Container/>
    </Provider>
);


// const countReducer = (state = [], action) => {
//   switch(action.type){
//     case "ADDITEM":
//       return state + 1;
//     case "REMOVEITEM":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(countReducer);



// const mapStateToProps = state => {
//   return {
//     count: state
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return{
//     handleIncrementClick: () => dispatch({type: 'INCREMENT'}),
//     handleDecrementClick: () => dispatch({type: 'DECREMENT'})
//   }
// };

const Container = connect()(AppRouter);


export default App;
