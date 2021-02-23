import React from 'react';
import './Header.css';
function Header() {
  function handleSubmit(event) {
    event.preventDefault();
    //Fetch comes here
  }

  return (
    <div className="Header">
      <div class="navbarWrapper">
        <h2>Tribes of Gymnocercus</h2>
        <div class="headerButtonsWraper">
          <ul class="headerButtons">
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Register</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
