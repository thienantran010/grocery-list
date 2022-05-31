import React from 'react'
import Item from './Item'

function ItemList(props) {
  let itemList = props.itemList.map(item => (
    <Item key={item.name} name={item.name} src={item.src} />
  ));
  
  return (<ul>{itemList}</ul>);
}

export default ItemList;