import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const kingdomName = useSelector(state => state.userReducer.kingdomName);

  const tokenCheck = () => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
      return dispatch({
        type: 'SET_NEW_KINGDOMNAME',
        kingdomName: localStorage.getItem('kingdomName'),
      });
    } else {
      setIsLoggedIn(false);
      return dispatch({
        type: 'SET_NEW_KINGDOMNAME',
        kingdomName: 'Tribes of Gymnocercus',
      });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const user = (
    <div className="header-container">
      <Link to={'/kingdom'} className="kingdomNameLink">
        <h1 className="header-title">{kingdomName}</h1>
      </Link>
      <div className="RightButtonsContainer">
        <NavLink
          to={'/settings'}
          className="buttonLink"
          activeClassName="selected"
        >
          <div className="header-button-container">
            <p className="header-button-text">{'Settings'}</p>
          </div>
        </NavLink>
        <Link
          to={'/login'}
          className="buttonLink"
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('kingdomName');
            dispatch({ type: 'CLEAR_ALL' });
          }}
        >
          <div className="header-button-container">
            <p className="header-button-text">{'Logout'}</p>
          </div>
        </Link>
      </div>
    </div>
  );

  const guest = (
    <div className="header-container">
      <div className="kingdomNameLink">
        <h1 className="header-title">{kingdomName}</h1>
      </div>
      <div className="RightButtonsContainer">
        <Link to={'/register'} className="buttonLink">
          <div className="header-button-container">
            <p className="header-button-text">{'Register'}</p>
          </div>
        </Link>
        <Link to={'/login'} className="buttonLink">
          <div className="header-button-container">
            <p className="header-button-text">{'Login'}</p>
          </div>
        </Link>
      </div>
    </div>
  );

  return isLoggedIn ? user : guest;
}

export default Header;
