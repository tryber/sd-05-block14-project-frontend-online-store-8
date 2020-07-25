import React from 'react';
// import * as productsAPI from '../services/api';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, price, title } = this.props.product;
    return (
      <div>
        {id}, {price}, {title}
      </div>
    );
  }
}

export default ProductCard;
