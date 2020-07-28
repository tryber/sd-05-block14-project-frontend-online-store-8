import React from 'react';
import { Link } from 'react-router-dom';
// import * as productsAPI from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const product = this.props.location.query.product;
    const cartPath = '/cart';
    return (
      <div>
        <h2>Detalhes do produto</h2>
        <div>
          <div data-testid="product-detail-name">
            {product.title}
          </div>
        </div>
        <Link to={{ pathname: `${cartPath}`, query: { cart: product } }}>Adicione ao carrinho</Link>
      </div>
    );
  }
}

export default ProductDetails;
