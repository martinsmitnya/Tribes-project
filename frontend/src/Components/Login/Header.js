import React from 'react';
import './Header.css';
function Header() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log('hello I was clicked')

  }

  

  return (
    <div className="Header">

      <div className='navbarWrapper'>
        <h2>Tribes of Gymnocercus</h2>
        <div className='headerButtonsWraper'>
          <ul className='headerButtons'>
            <li><button onClick={handleSubmit}>Login</button></li>
            <li><button onClick={handleSubmit}>Register</button></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Header;
