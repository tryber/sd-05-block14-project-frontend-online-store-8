import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
// import * as api from './services/api';
import ItemList from './components/ItemList';
// import { getCategories } from './services/api';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ItemList />
          </Route>
          <Route exact path="/cart" render={(props) => <ShoppingCart {...props} />} />
          <Route exact path="/product/:id" render={(props) => <ProductDetails {...props} />} />
          <Route exact path="/checkout" render={(props) => <Checkout {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
