import React from 'react';
import './Header.css';
import HeaderKingdomName from './HeaderKingdomName';
import HeaderButton from './HeaderButton';

function Header(props) {
    return (
        <div className="header-container">
            <HeaderKingdomName text="Tribes of Gymnocercus" />
            <div className="RightButtonsContainer">
                <HeaderButton text={props.button1} />
                <HeaderButton text={props.button2} />
            </div>
        </div>
    )
}

export default Header;
