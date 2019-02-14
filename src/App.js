import React, { Component } from 'react';
import './App.css';
import ItemList from './itemList/ItemList';
import Input from './Header/Input/Input';
import About from './About';
import Header from './Header/Header';
import Welcome from './itemList/Welcome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoName: '',
      list: [1],
      route: 'welcome'
    };

    this.addToList = this.addToList.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  // Called on checkbox change. id bound in Item.js to always refer to the associated item's id
  toggleDone = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      })
    });
  };

  // Delete list item. Called on delete button click in Item.js.
  // Filters list array and returns everything but the item with a matching id
  removeItem = id => {
    this.setState({
      list: [...this.state.list.filter(item => item.id !== id)]
    });
  };

  // Called on form submit. Input.js
  addToList = e => {
    e.preventDefault();
    if (this.state.todoName.length === 0) {
      alert('Please enter some text');
    } else {
      const newItem = {
        id: Math.random(),
        title: this.state.todoName,
        complete: false
      };
      this.setState({ todoName: '', list: [newItem, ...this.state.list] });
    }
  };

  onInputChange = e => {
    e.preventDefault();
    this.setState({ todoName: e.target.value });
  };

  changeRoute = location => {
    this.setState({ route: location });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(items => this.setState({ list: items }));
  }

  render() {
    if (this.state.list.length === 1) {
      return <h1>Loading Todos...</h1>;
    }
    return (
      <div className="App">
        {this.state.route === 'welcome' ? (
          <Welcome changeRoute={this.changeRoute} />
        ) : this.state.route === 'home' ? (
          <div>
            <Header changeRoute={this.changeRoute} />
            <Input
              onInputChange={this.onInputChange}
              todoName={this.state.todoName}
              addToList={this.addToList}
            />
            <ItemList
              toggleDone={this.toggleDone}
              removeItem={this.removeItem}
              list={this.state.list}
            />
          </div>
        ) : (
          <div>
            <Header changeRoute={this.changeRoute} />
            <About />
          </div>
        )}
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

//TODO Discover why remove function does not console log on delete btton click.
//  ANSWER: Prop was not passed within removeItem function
