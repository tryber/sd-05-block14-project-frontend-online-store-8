import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icons/carrinho.png';
// import * as productsAPI from '../services/api';
import Form from './Form';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json())
    .then((data) => {
      this.changeState(data);
    });
  }

  changeState(data) {
    this.setState({ product: data });
  }

  render() {
    const product = this.state.product;
    const cartPath = '/cart';
    return (
      <div>
        <h2>Detalhes do produto</h2>
        <Link data-testid="shopping-cart-button" to={{ pathname: `${cartPath}`, query: { cart: [this.state.product] } }} >
          <img src={Icon} width="30px" alt="carrinho" />
        </Link>
        <div>
          <div data-testid="product-detail-name">
            {product.title}
          </div>
        </div>
        <Link
          data-testid="product-detail-add-to-cart"
          to={{ pathname: `${cartPath}`, query: { cart: [product] } }}
        >
        Adicione ao carrinho
        </Link>
        <Form />
      </div>
    );
  }
}

export default ProductDetails;
