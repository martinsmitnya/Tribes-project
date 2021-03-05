import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderButton.css';

function HeaderButton(props) {
    const [text, setText] = useState(props.text);

    function handleClick() {
        let isToken = localStorage.getItem('token') ? true : false;

        if (isToken && text.toLowerCase() === 'settings') {
            // Then I'm navigated to the settings page.
            return `/settings`;


        } else if (isToken && text.toLowerCase() === 'logout') {
            // Then I'm navigated to the Login page.
            localStorage.removeItem('token');
            return `/login`;

        } else if (!isToken && text.toLowerCase() === 'login') {
            // Scenarios without token:
            // Then I'm navigated to the Login page.
            return `/login`;


        } else if (!isToken && text.toLowerCase() === 'register') {
            // Scenarios without token:
            // Then I'm navigated to the register page.
            return `/register`


        }
    }


    return (
        <Link to={handleClick} class="buttonLink">
            <div className="header-button-container" >
                <p className="header-button-text">{text}</p>
            </div>
        </Link>
    )
}

export default HeaderButton;