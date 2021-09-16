import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import CartPage from './components/CartPage';
import ShopGrid from './components/ShopGrid';
import Checkout from './components/Checkout';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/shop-grid" component={ShopGrid} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/product" component={Product} />
          <Route>404!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
