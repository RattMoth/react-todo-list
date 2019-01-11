import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: ['test']
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  remove = event => {
    // const currentList = [...this.state.list];
    // const index = currentList.indexOf;
    console.log('succ');
  };

  addToList = () => {
    const newList = [...this.state.list];
    newList.push(this.state.input);
    this.setState({ list: newList, input: '' });
  };

  render() {
    return (
      <div>
        <Input add={this.addToList} inputChange={this.onInputChange} />
        <ItemList remove={this.remove} list={this.state.list} />
      </div>
    );
  }
}

export default App;

//Can now update this.state.list by calling addToList on Input.js's enter button
//  This creates newList from the already existing this.state.list values using spread
//  operator. Since state cannot be mutatated outside of setState, the new input value
//  is pushed to newList which is then set as state using setState.
//ItemList.js iterates through this.state.list and returns an item component for each
//ToDo: Add delete button functionality
//      Center text and style page
//      Check React lifecycle page for help removing Item components via delete button

//TODO Discover why remove function does not console log on delete btton click
