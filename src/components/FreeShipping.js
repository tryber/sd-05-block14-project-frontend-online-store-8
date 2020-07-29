import React from 'react';

class FreeShipping extends React.Component {
  render() {
    if (this.props.free === true) return <span data-testid="free-shipping">Frete Grátis</span>
    return (
      <span />
    );
  }
}

export default FreeShipping;
