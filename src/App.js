import { Switch, Route } from 'react-router';
import React from 'react';
import './App.css';
// import * as api from './services/api';
import ItemList from './components/ItemList';
// import { getCategories } from './services/api';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ItemList />
        </Route>
        <Route exact path="/cart" render={(props) => <ShoppingCart {...props} />} />
        <Route exact path="/:id" render={(props) => <ProductDetails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
