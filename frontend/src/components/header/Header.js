import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userKingdomName, setUserKingdomName] = useState('Tribes of Gymnocercus');

    const tokenCheck = () => {
        if (localStorage.getItem('token')) {
            setIsLoggedIn(true);
            setUserKingdomName(JSON.parse(atob(localStorage.getItem('token').split('.')[1])).kindomName);
        } else {
            setIsLoggedIn(false);
            setUserKingdomName('Tribes of Gymnocercus');
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [])

    const user = ((
        <div className="header-container">
            <Link to={'/buildings'} className='kingdomNameLink'>
                <h1 className="header-title" >{userKingdomName}</h1>
            </Link>
            <p>USER USER</p>
            <div className="RightButtonsContainer">
                <NavLink to={'/settings'} className="buttonLink" activeClassName='selected'>
                    <div className="header-button-container" >
                        <p className="header-button-text">{'Settings'}</p>
                    </div>
                </NavLink>
                <Link to={'/login'} className="buttonLink" onClick={()=> {localStorage.removeItem('token')}}>
                    <div className="header-button-container" >
                        <p className="header-button-text">{'Logout'}</p>
                    </div>
                </Link>
            </div>
        </div>
    ))

    const guest = ((
        <div className="header-container">
            <div class='kingdomNameLink'>
                <h1 className="header-title" >{userKingdomName}</h1>
            </div>
            <p>Guest Guest</p>
            <div className="RightButtonsContainer">
                <Link to={'/register'} className="buttonLink">
                    <div className="header-button-container" >
                        <p className="header-button-text">{'Register'}</p>
                    </div>
                </Link>
                <Link to={'/login'} className="buttonLink">
                    <div className="header-button-container" >
                        <p className="header-button-text">{'Login'}</p>
                    </div>
                </Link>
            </div>
        </div>
    ))

    return isLoggedIn ? user : guest;
}

export default Header;