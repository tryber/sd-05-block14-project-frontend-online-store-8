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
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    if (localStorage.cart) {
      this.setState({ cart: JSON.parse(localStorage.getItem('cart')) });
    }
    this.searchGetCategories();
    this.changeState();
  }

  changeState() {
    this.setState({ cart: [localStorage.saveItem] });
  }

  button(id, name) {
    return (
      <button
        data-testid="category"
        type="button"
        value={id}
        onClick={this.handleClickCategory}
      >
        {name}
      </button>
    );
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

  async handleClickCategory(e) {
    await this.setState(
      { categoria: e.target.value },
    );
    api.getProductsFromCategoryAndQuery(this.state.categoria, this.state.value)
    .then((products) => products)
    .then((data) =>
      this.setState(
        { result: data.results },
      ),
    );
  }

  async addToCart(e) {
    const id = e.target.value;
    const result = this.state.result;
    const product = result.find((prod) => prod.id === id);
    await this.setState({ cart: [...this.state.cart, product] });	
    localStorage.setItem('cart', JSON.stringify(this.state.cart));	
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
    const { search, result } = this.state;
    const cartPath = '/cart';
    return (
      <div>
        <input data-testid="query-input" type="text" onChange={this.handleChange} />
        <button data-testid="query-button" type="button" onClick={this.handleSearch}>Buscar</button>
        <Link
          data-testid="shopping-cart-button"
          to={{ pathname: `${cartPath}` }}
        >
          <img src="../icons/carrinho.png" alt="carrinho" />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {search.map((category) => (
            <div key={category.id}>
              {this.button(category.id, category.name, category.title)}
            </div>
          ))
          }
        </div>
        <div>
          {result.map((product) => (
            <ProductCard key={product.id} product={product} function={this.addToCart} />))}
        </div>
      </div>
    );
  }
}

export default ItemList;
