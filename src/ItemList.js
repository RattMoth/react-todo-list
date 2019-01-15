import React from 'react';
import Item from './Item';

const ItemList = ({ list, removeItem, toggleDone }) => {
  return (
    list
      .filter((val, index) => index < 10)
      // Filter limits the number of Items didsplayed on the page. If an Item is deleted it is replaced with the next array item
      .map(list => (
        <Item
          removeItem={removeItem}
          toggleDone={toggleDone}
          key={list.id}
          list={list}
        />
      ))
  );
};

export default ItemList;
