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
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#33363b',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  maxWidth: '80%',
  margin: 'auto'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

export default Header;
