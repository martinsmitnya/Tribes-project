import React from 'react';
import MenuButton from './MenuButton';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import buildings from '../../icons/buildings.jpg'
import troops from '../../icons/troops.jpg'
import battle from '../../icons/map.jpg'
import leaderboard from '../../icons/leaderboard.jpg'

const Menu = () => {
  return(
    <div className="menu-container">
      <NavLink className='navlink' to="/kingdom/buildings" activeClassName="selected"><MenuButton text='Buildings' img={buildings} /></NavLink>
      <NavLink className='navlink' to="/kingdom/troops" activeClassName="selected"><MenuButton text='Troops' img={troops} /></NavLink>
      <NavLink className='navlink' to="/kingdom/battle" activeClassName="selected"><MenuButton text='Battle' img={battle} /></NavLink>
      <NavLink className='navlink' to="/kingdom/leaderboard" activeClassName="selected"><MenuButton text='Leaderboard' img={leaderboard} /></NavLink>
    </div>
  )
}

export default Menu;
