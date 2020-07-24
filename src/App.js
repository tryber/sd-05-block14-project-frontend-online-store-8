import React from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends React.Component {
  componentDidMount() {
    return getCategories();
  }
  render() {
    return (
      <div className="App">
        teste
      </div>
    );
  }
}

export default App;
