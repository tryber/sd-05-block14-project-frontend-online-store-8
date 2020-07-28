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
        <span data-testid="shopping-cart-product-name">Nome:{product.title}</span>
        <span>Preço:{product.price}</span>
        <span data-testid="shopping-cart-product-quantity">Qtde Disponível: {product.available_quantity}</span>
      </li>
    );
  }
}

export default ProductInfo;
