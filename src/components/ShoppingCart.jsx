import React from 'react';
import ProductInfo from './ProductInfo';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Carrinho recebe como props um array com a lista de produtos que deve renderizar
    const arrayProducts = this.props.productsList;
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        <div className="productsList">
          <ul>
            {arrayProducts.map((product) => <ProductInfo product={product} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
