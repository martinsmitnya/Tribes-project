import React from 'react';

function Header() {
  function handleSubmit(event) {
    event.preventDefault();
    //Fetch comes here
  }

  return (
    <div className="Header">
      <div className="navbarWrapper">
        <h2>Tribes of Gymnocercus</h2>
        <div className="headerButtonsWraper">
          <ul className="headerButtons">
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
