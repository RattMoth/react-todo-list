import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { addToList, onInputChange } = this.props;
    return (
      <form
        style={{
          display: 'flex',
          maxWidth: '80%',
          margin: 'auto'
        }}
        onSubmit={addToList}
      >
        <input
          style={{ flex: '10' }}
          onChange={onInputChange}
          type="text"
          placeholder="Enter New Item"
          value={this.props.todoName}
        />
        <button
          style={{
            flex: '1',
            height: '3rem',
            paddingRight: '1rem',
            paddingLeft: '1rem'
          }}
        >
          Enter
        </button>
      </form>
    );
  }
}
export default Input;
