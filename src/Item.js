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
      <input
        className="alignCenter checkBox"
        type="checkbox"
        onChange={toggleDone.bind(this, list.id)}
      />
      <p className="alignCenter" style={setDone()}>
        {list.title}
      </p>
      <button
        onClick={removeItem.bind(this, list.id)}
        className="delBtn alignCenter"
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
