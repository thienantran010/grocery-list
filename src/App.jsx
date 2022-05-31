import React, { useState } from 'react';
import './App.css';
import ItemInput from './ItemInput';
import ItemList from './ItemList';

function App() {
  let [itemList, setItemList] = useState([]);

  function addItem(itemName) {
    //search google for itemName pictures
    setItemList([...itemList, {name: itemName, src: "https://m.media-amazon.com/images/I/61NpumXMghL._AC_SX679_.jpg"}]);
  }

  return (
    <div>
      <ItemInput addItem={addItem} />
      <ItemList itemList={itemList} />
    </div>
  );
}

export default App;