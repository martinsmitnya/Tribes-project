import React from 'react';
import './Header.css';
import HeaderKingdomName from './HeaderKingdomName';
import HeaderButton from './HeaderButton';

function Header(props) {
    const token= localStorage.getItem('token');
    let userKingdom =''
    if(token){
        userKingdom = JSON.parse(atob(token.split('.')[1])).kindomName;
    } else{
        userKingdom = 'Tribes of Gymnocercus'
    }

    return (
        <div className="header-container">
            <HeaderKingdomName text={userKingdom} />
            <div className="RightButtonsContainer">
                <HeaderButton text={props.button1} />
                <HeaderButton text={props.button2} />
            </div>
        </div>
    )
}

export default Header;
