import React from 'react';

const Input = ({ inputChange, add }) => {
  return (
    <div>
      <input onChange={inputChange} type="text" placeholder="Enter New Item" />
      <button onClick={add} className="ma3">
        Enter
      </button>
    </div>
  );
};
export default Input;
