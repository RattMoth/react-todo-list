import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todos</h1>
      <Link style={linkStyle} to="/react-todo-list">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/react-todo-list/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

export default Header;
