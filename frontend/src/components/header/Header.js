import React, { useState } from 'react';
import './Header.css';
import HeaderKingdomName from './HeaderKingdomName';
import HeaderButton from './HeaderButton';

function Header() {
    const token = localStorage.getItem('token');
    let userKingdom = ''

    if (token) {
        userKingdom = JSON.parse(atob(token.split('.')[1])).kindomName;
        return (
            <div className="header-container">
                <HeaderKingdomName text={userKingdom} />
                <div className="RightButtonsContainer">
                    <HeaderButton text={'Settings'} />
                    <HeaderButton text={'Logout'} />
                </div>
            </div>
        )
    } else {
        userKingdom = 'Tribes of Gymnocercus'
        return (
            <div className="header-container">
                <HeaderKingdomName text={userKingdom} />
                <div className="RightButtonsContainer">
                    <HeaderButton text={'Register'} />
                    <HeaderButton text={'Login'} />
                </div>
            </div>
        )
    }

}

export default Header;