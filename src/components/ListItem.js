import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="search" />
        <p className="search-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/carrinho">Carrinho</Link>
      </div>
    );
  }
}

export default ListItem;
