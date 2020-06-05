import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {About} from '../Pages/About';
import ConnectedCart from '../Pages/Cart';
import {Contact} from '../Pages/Contact';
import ConnectedShop from '../Pages/Shop';
import Header from './Header';


export const AppRouter = () => (
    <div>
        <Router>
            <Header />
            <Switch>
                <div className="container">
                    <Route exact path="/" component={ConnectedShop} />
                    <Route exact path="/cart" component={ConnectedCart} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/shop" component={ConnectedShop} />
                </div>
            </Switch>
        </Router>
    </div>
);