import React from 'react';

const Header = ({ changeRoute }) => {
  return (
    <header style={headerStyle}>
      <h1>Todos</h1>
      <div style={center}>
        <p style={linkStyle} onClick={() => changeRoute('home')}>
          Home
        </p>{' '}
        |{' '}
        <p style={linkStyle} onClick={() => changeRoute('about')}>
          About
        </p>
      </div>
    </header>
  );
};

const headerStyle = {
  background: '#33363b',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  width: '80%',
  margin: 'auto'
};

const linkStyle = {
  cursor: 'pointer',
  color: '#fff',
  textDecoration: 'none'
};

const center = {
  display: 'flex',
  justifyContent: 'center'
};

export default Header;
