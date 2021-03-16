import React, { useEffect, useState } from 'react';
import './Header.css';
import HeaderKingdomName from './HeaderKingdomName';
import HeaderButton from './HeaderButton';
import Fetch from '../fetch/Fetch';


async function Header(button1, button2, token) {

    let userId = '';
    let kingdomName = 'SEMMI';
    try {
        userId = (JSON.parse(atob(token.split('.')[1])).userid);
    } catch (e) {
        return null;
    }
    await Fetch('GET', `/kingdom/name?id=${69}`).then(res => kingdomName = res).catch(err => console.log(err))
    return (
        <div className="header-container">
            <HeaderKingdomName text={kingdomName} />
            <div className="RightButtonsContainer">
                <HeaderButton text={button1} />
                <HeaderButton text={button2} />
            </div>
        </div>
    )
}


export default Header;
