import { Switch, Route } from 'react-router';
import React from 'react';
import './App.css';
// import { getCategories } from './services/api';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <ListItem /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
