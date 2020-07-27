import React from 'react';
import * as API from '../services/api';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      value: '',
      categoria: '',
      result: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    this.searchGetCategories();
  }

  async searchGetCategories() {
    this.setState(
      {search: await API.getCategories(),}
    );
  }

  handleChange(e) {
    this.setState(
      {value: e.target.value,}
    );
  }

  handleClickCategory(e) {
    this.setState(
      {categoria: e.target.value,}
    );
  }

  async handleSearch() {
    const resultado = await
      API.getProductsFromCategoryAndQuery(this.state.categoria, this.state.value);
      this.setState({
        result: resultado.results,
      });
  }

  render() {
    const { search, result } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={this.handleSearch}>Buscar</button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          {search.map((category, index) =>
            <li key={index}>
              <button
                type="button"
                value={category.id}
                onClick={this.handleClickCategory}>
                {category.name}
              </button>
            </li>)
          }
        </ul>
        <div>
          {result.map((category, index) =>
            <div key={index}>
            <span >{category.title}</span>
            <img src= {category.thumbnail} />
            <span >R$ {category.price}</span>
            </div>     
          )}
        </div>
      </div>
    )
  }

  

}

export default ListItem;