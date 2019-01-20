import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <h1 style={{ maxWidth: '80%', margin: 'auto', color: 'white' }}>About</h1>
      <p style={backgroundStyle}>
        This is a simple Todo app created with ReactJS. Each todo item is
        imported from{' '}
        <a href="https://jsonplaceholder.typicode.com/todos">
          https://jsonplaceholder.typicode.com/todos
        </a>
        . Because this file contains 200 todo items, the number of displayed
        items was limited to 10 at a time, in order to avoid clutter. As each
        item is removed a new item from farther down the list is called to take
        its place.
        <br />
        <br />
        All source code can be found at{' '}
        <a href="https://github.com/RattMoth/react-todo-list">
          here at my GitHub page.
        </a>
      </p>
    </React.Fragment>
  );
};

const backgroundStyle = {
  backgroundColor: 'white',
  padding: '1em',
  maxWidth: '80%',
  margin: 'auto'
};

export default About;
