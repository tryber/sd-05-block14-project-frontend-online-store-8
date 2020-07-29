import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Deve desestruturar as informações do produto para montar a informação
    const product = this.props.product;
    return (
      <li>
        <p data-testid="shopping-cart-product-name">{product.title}</p>--
        <span>Preço:{product.price}</span>--
        <span data-testid="shopping-cart-product-quantity">
          {product.available_quantity}
        </span>
      </li>
    );
  }
}

export default ProductInfo;
