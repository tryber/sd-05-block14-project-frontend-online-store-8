import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    //Carrinho recebe como props um array com a lista de produtos que deve renderizar
    const arrayProducts = this.props.productsList;
    return(
      <div>
        <h2>Carrinho de Compras</h2>
        <div className="productsList">
          {arrayProducts.map((product) => <ProductCard product={product} />)}
        </div>
      </div>
    )
  }
}

export default ShoppingCart;
