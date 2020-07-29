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

  async componentDidMount() {
    let productsList = JSON.parse(localStorage.getItem('cart'));
    if (productsList) {
      productsList = productsList.filter(item => item != null);
      await this.setState({ productsList });
    }
    if (this.props.location.query) {
      const product = this.props.location.query.cartItem;
      await this.setState({ productsList: [...this.state.productsList, product] });
    }
    if (this.state.productsList && this.state.productsList.length > 0) {
      this.changeState();
    }
    localStorage.setItem('cart', JSON.stringify(this.state.productsList));
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
