import React from 'react';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className="tc item-line">
      <p>{item}</p>
      <button className="ma3">Delete</button>
    </div>
  );
};

export default Item;
