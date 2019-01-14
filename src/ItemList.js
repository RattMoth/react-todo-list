import React from 'react';
import Item from './Item';

const ItemList = ({ list, removeItem, toggleDone }) => {
  return list.map(list => (
    <Item
      removeItem={removeItem}
      toggleDone={toggleDone}
      key={list.id}
      list={list}
    />
  ));
};

export default ItemList;
