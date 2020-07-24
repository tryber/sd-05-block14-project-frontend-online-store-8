import { Switch, Route } from 'react-router';
import React from 'react';
import './App.css';
// import ShoppingCart from './components/ShoppingCart';
// import * as api from './services/api';
import ItemList from './components/ItemList';
// import { getCategories } from './services/api';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ItemList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
