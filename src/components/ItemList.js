import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';
import ProductCard from './ProductCard';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      value: '',
      categoria: '',
      result: [],
      cart: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  async componentDidMount() {
    this.searchGetCategories();
  }

  button(id, name) {
    return <button type="button" value={id} onClick={this.handleClickCategory}>{name}</button>;
  }

  async searchGetCategories() {
    this.setState(
      { search: await api.getCategories().then((categories) => categories) },
    );
  }

  handleChange(e) {
    this.setState(
      { value: e.target.value },
    );
  }

  handleClickCategory(e) {
    this.setState(
      { categoria: e.target.value },
    );
  }

  addToCart(e) {
    const id = e.target.value;
    const result = this.state.result;
    const product = result.find((prod) => prod.id === id);
    this.setState({ cart: [...this.state.cart, product] });
  }

  async handleSearch() {
    const resultado = await
      api.getProductsFromCategoryAndQuery(this.state.categoria, this.state.value)
      .then((products) => products);
    this.setState(
      { result: resultado.results },
    );
  }

  render() {
    const { search, result, cart } = this.state;
    const cartPath = '/cart';
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={this.handleSearch}>Buscar</button>
        <Link
          data-testid="shopping-cart-button"
          to={{ pathname: `${cartPath}`, query: { cart } }}
        >
          <img src="./icons/carrinho.png" alt="carrinho" />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {search.map((category) => (
            <div key={category.title}>{this.button(category.id, category.name)}</div>
          ))
          }
        </div>
        <div>
          {result.map((product) => <ProductCard product={product} function={this.addToCart} />)}
        </div>
      </div>
    );
  }
}

export default ItemList;
