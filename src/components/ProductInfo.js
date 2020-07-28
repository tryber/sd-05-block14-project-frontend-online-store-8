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
        Nome:{product.title}, Preço:{product.price}, Qtde Disponível: {product.available_quantity}
      </li>
    );
  }
}

export default ProductInfo;
