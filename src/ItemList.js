import React from 'react';

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="search" />
        <p className="search-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ItemList;
