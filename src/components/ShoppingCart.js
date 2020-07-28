import React from 'react';
import ProductInfo from './ProductInfo';
import EmptyCart from './EmptyCart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      emptyCart: true,
    };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    let productsList = [];
    if (this.props.location.query) {
      productsList = this.props.location.query.cart;
    }
    const saved = localStorage.getItem('save-item');
    if (saved && productsList) {
      productsList = [...saved, productsList];
    }
    if (saved && !productsList) {
      productsList = [...saved];
    }
    if (productsList.length > 0) {
      this.changeState(productsList);
    }
  }

  changeState(productsList) {
    this.setState({
      productsList,
      emptyCart: false,
    });
  }

  render() {
    if (this.state.emptyCart) return <EmptyCart />;
    // Carrinho recebe como props um array com a lista de produtos que deve renderizar
    const arrayProducts = this.state.productsList;
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
