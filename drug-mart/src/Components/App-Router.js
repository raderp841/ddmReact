import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {About} from '../Pages/About';
import ConnectedCart from '../Pages/Cart';
import {Contact} from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ConnectedShop from '../Pages/Shop';
import ConnectedHeader from './Header';


export const AppRouter = () => (
    <div>
        <Router>
            <ConnectedHeader />
            <Switch>
                <div className="container">
                    <Route exact path="/ddmReact" component={ConnectedShop} />
                    <Route exact path="/cart" component={ConnectedCart} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/shop" component={ConnectedShop} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </div>
            </Switch>
        </Router>
    </div>
);