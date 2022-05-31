import React from 'react';

export default function Item(props) {

  return (
    <div className="item-container">
      <h3 className="item">{props.name}</h3>
      <img className="item-img" src={props.src} />
    </div>
  );
}