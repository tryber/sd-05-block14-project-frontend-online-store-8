import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 }
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handlePlus() {
    this.setState({ quantity: this.state.quantity +1 });
  }

  handleMinus() {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity -1 });
    }
  }

  render() {
    // Deve desestruturar as informações do produto para montar a informação
    const product = this.props.product;
    return (
      <li>
        <p data-testid="shopping-cart-product-name">{product.title}</p>--
        <span>Preço:{product.price}</span>--
        <button
          type="button" data-testid="product-increase-quantity" onClick={this.handlePlus}
        >
          +
        </button>
        <span data-testid="shopping-cart-product-quantity">
          {this.state.quantity}
        </span>
        <button 
          type="button" data-testid="product-decreate-quantity" onClick={this.handleMinus}
        >
          -
        </button>
      </li>
    );
  }
}

export default ProductInfo;
