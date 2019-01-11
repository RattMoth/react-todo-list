import React from 'react';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className="tc item-line">
      <p>{item}</p>
      <Button />
    </div>
  );
};

const Button = ({ remove }) => {
  return (
    <button onClick={remove} className="ma3">
      Delete
    </button>
  );
};

export default Item;
