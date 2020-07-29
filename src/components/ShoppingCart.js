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
    if (localStorage.saveItem) {
      productsList = localStorage.saveItem.split(',');
    }
    if (this.props.location.query) {
      productsList.push(this.props.location.query.cart);
      localStorage.setItem('saveItem', [productsList]);
    }
    productsList = productsList.filter((item) => item !== '');
    if (productsList.length > 0) {
      this.loadProducts(productsList);
      this.changeState();
    }
  }

  async loadProducts(arrayId) {
    let productsList = [];
    for (let key in arrayId) {
      await fetch(`https://api.mercadolibre.com/items/${arrayId[key]}`)
        .then((response) => response.json())
        .then(async (data) => productsList.push(data));
    }
    this.setState({ productsList })
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
