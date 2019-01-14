import React, { Component } from 'react';

class Input extends Component {
  // state = {
  //   todoName: ''
  // };

  // onInputChange = e => {
  //   e.preventDefault();
  //   this.setState({ todoName: e.target.value });
  // };

  render() {
    const { addToList, onInputChange } = this.props;
    return (
      <form onSubmit={addToList}>
        <input
          onChange={onInputChange}
          type="text"
          placeholder="Enter New Item"
          value={this.props.todoName}
        />
        <button className="ma3">Enter</button>
      </form>
    );
  }
}
export default Input;
