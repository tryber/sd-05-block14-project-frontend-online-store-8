import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div key={product.title}>
        <span>{product.title}</span>
        <img src={product.thumbnail} alt={product.title} />
        <span>R$ {product.price}</span>
        <button onClick={this.props.function} value={product.id}>Adicionar ao carrinho</button>
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
