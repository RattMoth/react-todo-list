import React from 'react';
import './Item.css';

const Item = ({ list, toggleDone, removeItem }) => {
  const setDone = () => {
    return {
      textDecoration: list.complete ? 'line-through' : 'none'
    };
  };

  return (
    <div className="item-line">
      <input type="checkbox" onChange={toggleDone.bind(this, list.id)} />
      <p style={setDone()}>{list.title}</p>
      <button onClick={removeItem.bind(this, list.id)} className="ma3">
        Delete
      </button>
    </div>
  );
};

export default Item;
