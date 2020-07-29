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
    this.changeStateSimple = this.changeStateSimple.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  async componentDidMount() {
    let productsList = JSON.parse(localStorage.getItem('cart'));
    if (productsList) {
      productsList = productsList.filter((item) => item != null);
      await this.changeStateSimple(productsList);
    }
    if (this.props.location.query) {
      const product = this.props.location.query.cartItem;
      await this.changeStateSpread(product);
    }
    if (this.state.productsList && this.state.productsList.length > 0) {
      this.changeState();
    }
    localStorage.setItem('cart', JSON.stringify(this.state.productsList));
  }

  changeStateSpread(product) {
    this.setState({ productsList: [...this.state.productsList, product] });
  }

  changeStateSimple(productsList) {
    this.setState({ productsList });
  }

  changeState() {
    this.setState({ emptyCart: false });
  }

  render() {
    if (this.state.emptyCart) return <EmptyCart />;
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
      </div>
    );
  }
}

export default ShoppingCart;
