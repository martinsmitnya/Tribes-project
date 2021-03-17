import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HeaderKingdomName from './HeaderKingdomName';
import HeaderButton from './HeaderButton';

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
            <Link to={'/buildings'} class='kingdomNameLink'>
                <h1 className="header-title" >{userKingdomName}</h1>
            </Link>
            <div className="RightButtonsContainer">
                <HeaderButton text={'Settings'} />
                <HeaderButton text={'Logout'} />
            </div>
        </div>
    ))

    const guest = ((
        <div className="header-container">
             <div class='kingdomNameLink'>
                <h1 className="header-title" >{userKingdomName}</h1>
            </div>
            <div className="RightButtonsContainer">
                <HeaderButton text={'Register'} />
                <HeaderButton text={'Login'} />
            </div>
        </div>
    ))

    return isLoggedIn ? user : guest;
}

export default Header;