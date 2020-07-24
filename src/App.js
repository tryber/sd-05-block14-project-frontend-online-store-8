import { Switch, Route } from 'react-router';
import React from 'react';
import ListItem from './ItemList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ListItem />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
