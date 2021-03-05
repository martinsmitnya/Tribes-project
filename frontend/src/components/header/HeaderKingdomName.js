import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderKingdomName.css'

function HeaderKingdomName(props) {
  const [text, setText] = useState(props.text);

  function handleClick() {
    let isToken = localStorage.getItem('token') ? true : false;
    
    if (isToken){
      return `/buildings`;
    }
  }


  return (
    <Link to={handleClick} class='kingdomNameLink'>
      <h1 className="header-title" >{text}</h1>
    </Link>
  )
}

export default HeaderKingdomName;