import React from 'react';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    //Carrinho recebe como props um array com a lista de produtos que deve renderizar
    const arrayProdutos = this.props.productsList;
    return(
      <div>
        <h2>Carrinho de Compras</h2>
        <div className="productsList">
          
        </div>
      </div>
    )
  }
}

export default Carrinho;