import React from 'react';
import './MenuButton.css';

const MenuButton = (props) => {

  const img = props.img;
  const text = props.text;

  return (
    <div className="menu-button-container">
      <img className="img" src={img} alt="icon"/>
      <p>{text}</p>
    </div>
  )
}

export default MenuButton;
