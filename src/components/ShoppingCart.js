import React from 'react';
import { Link } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import EmptyCart from './EmptyCart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: this.props.location.query.cart,
    };
    this.changeStateSimple = this.changeStateSimple.bind(this);
    this.changeAnotherState = this.changeAnotherState.bind(this);
  }

  // async componentDidMount() {
  //   let productsList = JSON.parse(localStorage.getItem('cart'));
  //   if (productsList) {
  //     productsList = productsList.filter((item) => item != null);
  //     await this.changeStateSimple(productsList);
  //   }
  //   if (this.props.location.query) {
  //     const product = this.props.location.query.cartItem;
  //     await this.changeStateSpread(product);
  //   }
  //   localStorage.setItem('cart', JSON.stringify(this.state.productsList));
  // }

  changeStateSpread(product) {
    this.setState({ productsList: [...this.state.productsList, product] });
  }

  async changeAnotherState() {
    let productsList = JSON.parse(localStorage.getItem('cart'));
    if (productsList) {
      productsList = productsList.filter((item) => item != null);
      await this.changeStateSimple(productsList);
    }
    return productsList;
  }

  changeStateSimple(productsList) {
    this.setState({ productsList });
  }

  render() {
    if (!this.state.productsList) return <EmptyCart />;
    // Carrinho recebe como props um array com a lista de produtos que deve renderizar
    const { productsList } = this.state;
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        <div className="productsList">
          <ul>
            {productsList.map((product) => <ProductInfo key={product.id} product={product} />)} 
          </ul>
        </div>
        <Link to="/checkout" data-testid="checkout-products">Checkout</Link>
      </div>
    );
  }
}

export default ShoppingCart;
