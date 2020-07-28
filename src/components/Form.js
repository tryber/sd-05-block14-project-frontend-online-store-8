import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="form">Escreva uma avaliação sobre o produto:</label>
        <textarea name="form" datatestid="product-detail-evaluation" />
      </div>
    );
  }
}

export default Form;
