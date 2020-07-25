import React from 'react';
// import * as productsAPI from '../services/api';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, price, title, imageSource } = this.props.product;
    return (
      <div>
        <img src={imageSource} alt={title} />
        {id}, {price}, {title}
      </div>
    );
  }
}

export default ProductCard;
