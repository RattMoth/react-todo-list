import React from 'react';
import Item from './Item';

const ItemList = ({ list, remove }) => {
  return (
    <div>
      {list.map((value, i) => {
        return <Item remove={remove} key={i} item={list[i]} />;
      })}
    </div>
  );
};

export default ItemList;
