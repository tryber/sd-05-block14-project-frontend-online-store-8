import React from 'react';
import { Link } from 'react-router-dom';
import * as productsAPI from '../services/api';
import ProductCard from './ProductCard';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itensCarrinho: [],
      query: '',
      categoryId: '',
      productsList: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ query: value });
    this.loadProductsList();
  }

  loadProductsList() {
    const { query, categoryId } = this.state;
    const promiseAPI = productsAPI.getProductsFromCategoryAndQuery(categoryId, query);
    if (promiseAPI) {
      promiseAPI.then((data) => {
        const productsList = data.results.map((product) => {
          const productInformation = {
            id: product.id,
            title: product.title,
            price: product.price,
            imageSource: product.thumbnail,
          };
          return productInformation;
        });
        this.setState({ productsList });
      });
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="search" onChange={this.handleChange} />
        <p className="search-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/carrinho" arrayProducts={this.state.itensCarrinho}>Carrinho</Link>
        <div className="productsList">
          {this.state.productsList.map((item) => <ProductCard product={item} />)}
        </div>
      </div>
    );
  }
}

export default ListItem;
