import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  // // constructor(props) {
  // //   super(props);
  // }

  render() {
    const product = this.props.product;
    return (
      <div key={product.title}>
        <span >{product.title}</span>
        <img src={product.thumbnail} alt={product.title} />
        <span >R$ {product.price}</span>
        <button>Adicionar ao carrinho</button>
        <Link data-testid="product-detail-link" to={{ pathname: `/${product.id}`, query: {product} }}>Ver detalhes</Link>
      </div>
    );
  }
}

export default ProductCard;
