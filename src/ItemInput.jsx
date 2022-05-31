import React, { useState } from 'react';

function ItemInput(props) {
  let [itemName, setItemName] = useState("");

  function handleChange(e) {
    setItemName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addItem(itemName);
    setItemName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item-input" className="label">
        Item: 
      </label>
      <input id="item-input" type="text" value={itemName} onChange={handleChange} />
    <button type="submit" className="button">Add Item </button>
    </form>
  )
}

export default ItemInput;