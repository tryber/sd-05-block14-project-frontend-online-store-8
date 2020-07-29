import React from 'react';
import CreateInput from './CreateInput';
import ProductListMap from './ProductListMap';

class Checkout extends React.Component {

  render() {
    const productsList = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        <ProductListMap productsList={productsList} />
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
