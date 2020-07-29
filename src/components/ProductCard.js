import React from 'react';
import { Link } from 'react-router-dom';
import FreeShipping from './FreeShipping';

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div data-testid="product" key={this.props.altkey}>
        <span>{product.title}</span>
        <img src={product.thumbnail} alt={product.title} />
        <span>R$ {product.price}</span>
        <FreeShipping free={product.shipping.free_shipping} />
        <button
          data-testid="product-add-to-cart"
          onClick={this.props.function} value={product.id}
        >
        Adicionar ao carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={{ pathname: `/${product.id}`, query: { product } }}
        >
          Ver detalhes
        </Link>
      </div>
    );
  }
}

export default ProductCard;
