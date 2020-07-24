import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    //Deve desestruturar as informações do produto para montar a informação
    const { title, value} = this.props.product;
    return(
      <li>

      </li>
    )
  }
}

export default ProductInfo;
