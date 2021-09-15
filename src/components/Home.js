import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import CartPage from './CartPage';
import Categories from './Categories';
import Checkout from './Checkout';
import ContactUs from './ContactUs';
import Header from './Header';
import Product from './Product';
import ShopGrid from './ShopGrid';

const Home = () => {
    return (
        <Route>
            <Switch>
                <Header />
                <Route exact path="/" component={Categories} />
                <Route path="/contactUs" component={ContactUs} />
                <Route path="/shop-grid" component={ShopGrid} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/product" component={Product} />
            </Switch>
        </Route>
    );
};

export default Home;