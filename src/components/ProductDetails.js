import React from 'react';
import * from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    );
  }
}

export default ProductDetails;