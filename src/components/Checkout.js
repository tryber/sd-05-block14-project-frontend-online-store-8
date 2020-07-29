import React from 'react';
import ProductInfo from './ProductInfo';
import CreateInput from './CreateInput';

class Checkout extends React.Component {

  render() {
    const productsList = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        <div className="productsList">
          <ul>
            {productsList.map((product) => <ProductInfo key={product.id} product={product} />)}
          </ul>
        </div>
        <form action="">
          <CreateInput id="checkout-fullname" title="Nome Completo" />
          <CreateInput id="checkout-email" title="E-mail" />
          <CreateInput id="checkout-cpf" title="CPF" />
          <CreateInput id="checkout-phone" title="Telefone" />
          <CreateInput id="checkout-cep" title="CEP" />
          <CreateInput id="checkout-address" title="Endereço" />
        </form>
      </div>
    );
  }
}

export default Checkout;
