import React from 'react';
// import * as productsAPI from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const product = this.props.location.query.product;
    console.log(product)
    return (
      <div>
        <div data-testid="product-detail-name">
          {product.title}
        </div>
      </div>
    );
  }
}

export default ProductDetails;
