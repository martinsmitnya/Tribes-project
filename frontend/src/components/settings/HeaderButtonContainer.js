import React from 'react';
import './HeaderButtonContainer.css';
import HeaderButton from './HeaderButton';

const HeaderButtonContainer = () => {
    return(
        <div className="header-button-container-container">
            <HeaderButton headerButtonText='Settings' />
            <HeaderButton headerButtonText='Logout' />
        </div>
    )
}

export default HeaderButtonContainer;