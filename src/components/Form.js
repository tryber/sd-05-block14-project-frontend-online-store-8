import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label>
          Escreva uma avaliação sobre o produto:
          <textarea datatestid="product-detail-evaluation"></textarea>
        </label>
      </div>
    );
  }
}

export default Form;