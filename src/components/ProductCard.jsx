import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    //Deve desestruturar as informações do produto para montar o card
    const { title, value} = this.props.product;
    return(
      <div>
        
      </div>
    )
  }
}

export default ProductCard;
