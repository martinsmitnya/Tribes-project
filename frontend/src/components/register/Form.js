import React, { useState } from 'react';
import './Form.css';
import InputField from './InputField';

const Form = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [kingdomName, setKingdomName] = useState('');

    function handleUsernameChange(event) {
        setUserName(event.target.value.trim());
    }

    function handlePasswordChange(event) {
        setPasswordHash(event.target.value);
    }
 
    function handleKingdomNameChange(event) { //Ez kell?
        setKingdomName(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (passwordHash === '' || userName === '') {
            setErrorMessage('Username and Password are required!');
            setUserName(userName);
            setPasswordHash(passwordHash);
            return;
        }
        if (passwordHash.length < 8) {
            setErrorMessage('Password must be at least 8 characters!');
            setUserName(userName);
            setPasswordHash(passwordHash); //miért kell mindent setelni?
            return;
        }
        if (kingdomName === '') { //If '' => username's kingom
            setKingdomName(`${userName}'s kingdom`);
            return;
        }

        let myRequestObject = {
            username: userName,
            passwordhash: passwordHash,
            kingdom_name: kingdomName,
        };
        fetch(`${process.env.REACT_APP_PORT}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(myRequestObject),
        })
        .then(response => response.json())
        .then(response => {
            if (response.status === 400) {
                setErrorMessage(response.error);
                setUserName(userName);
                setPasswordHash(passwordHash);
                setKingdomName(kingdomName);
                return;
            }
            let inputs = document.querySelectorAll("input");
            Array.from(inputs).forEach(input => input.value = '');
        })
        .catch(error => console.log(error));
        setErrorMessage('');
    }

    return (
        <div className="form-container">
          <form autocomplete="off" onSubmit={handleSubmit}>
            <InputField
              onChange={handleUsernameChange}
              placeholder="Username"
              name="username"
              id="username"
              type="text"
            />
            <br />
            <InputField
              onChange={handlePasswordChange}
              placeholder="Password"
              name="passwordhash"
              id="passwordhash"
              type="password"
            />
            <br />
            <InputField
              onChange={handleKingdomNameChange}
              placeholder="Kingdom"
              name="kingdom"
              id="kingdom"
              type="text"
            />
            <br />
            {errorMessage && <span className="errormessage">{errorMessage}</span>}
            <button type="submit">SIGN UP</button>
          </form>
        </div>
    );
};

export default Form;