import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label>Escreva uma avaliação sobre o produto:</label>
        <textarea datatestid="product-detail-evaluation" />
      </div>
    );
  }
}

export default Form;
