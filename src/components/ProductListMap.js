import React from 'react';
import ProductInfo from './ProductInfo';

class ProductListMap extends React.Component {

  render() {
    const productsList = this.props.productsList;
    return (
      <div className="productsList">
        <ul>
          {productsList.map((product) => <ProductInfo key={product.id} product={product} />)}
        </ul>
      </div>
    );
  }
}

export default ProductListMap;
