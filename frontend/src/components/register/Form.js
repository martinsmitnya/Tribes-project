import React, { useState, useEffect } from 'react';
import './Form.css';
import InputField from './InputField';
import Fetch from '../fetch/Fetch';

const Form = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [kingdomName, setKingdomName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleUsernameChange(event) {
    setUserName(event.target.value.trim());
  }

  function handlePasswordChange(event) {
    setPasswordHash(event.target.value);
  }

  function handleKingdomNameChange(event) {
    setKingdomName(event.target.value.trim());
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (passwordHash === '' || userName === '') {
      setErrorMessage('Username and Password are required!');
      setUserName(userName);
      setPasswordHash(passwordHash);
      return;
    } else if (passwordHash.length < 8) {
      setErrorMessage('Password must be at least 8 characters!');
      setUserName(userName);
      setPasswordHash(passwordHash);
      return;
    }

    setSubmitted(true);
  }

  useEffect(() => {
    if (submitted) {
      let body = {
        username: userName,
        password: passwordHash,
        kingdom_name: kingdomName,
      };
      Fetch('POST', '/register', body)
        .then(response => {
          let inputs = document.querySelectorAll('input');
          setErrorMessage('');
          Array.from(inputs).forEach(input => (input.value = ''));
        })
        .catch(error => {
          setErrorMessage(error.toString());
          setUserName(userName);
          setPasswordHash(passwordHash);
          setKingdomName(kingdomName);
          return;
        });
      setKingdomName('');
      setUserName('');
      setPasswordHash('');
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
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
