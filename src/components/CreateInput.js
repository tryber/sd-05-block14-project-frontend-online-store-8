import React from 'react';

class CreateInput extends React.Component {
  render() {
    const { id, title } = this.props;
    return (
      <div>
        <label htmlFor={id}>
          {title}
          <input type="text" data-testid={id} name={id} />
        </label>
      </div>
    );
  }
}

export default CreateInput;
