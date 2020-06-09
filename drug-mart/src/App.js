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


const Container = connect()(AppRouter);


export default App;
