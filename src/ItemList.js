import React from 'react';
import Item from './Item';

const ItemList = ({ list }) => {
  return (
    <div>
      {list.map((value, i) => {
        return <Item key={value} item={list[i]} />;
      })}
    </div>
  );
};

export default ItemList;
