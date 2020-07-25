import React from 'react';
import ProductInfo from './ProductInfo';
import EmptyCart from './EmptyCart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      emptyCart: true,
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    if(this.props.productsList.length > 1) {
      this.changeState('emptyCart', false);
    }
  }

  changeState(param, value) {
    this.setState({[param]: value});
  }

  render() {
    if (this.state.emptyCart) return <EmptyCart />;
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
