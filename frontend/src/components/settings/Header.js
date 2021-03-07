import React from 'react';
import './Header.css';
import HeaderButtonContainer from './HeaderButtonContainer';

const Header = () => {
    return(
        <div className="header-container">
            <h1 className="header-title">My Kingdom</h1>
            <HeaderButtonContainer />
        </div>
    )
}

export default Header;
