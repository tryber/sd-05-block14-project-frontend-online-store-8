import { Switch, Route } from 'react-router';
import React from 'react';
import './App.css';
import ListItem from './components/ListItem'
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
// import { getCategories } from './services/api';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListItem} />
        <Route path="/carrinho" component={ShoppingCart} />
        <Route path="/:item" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
