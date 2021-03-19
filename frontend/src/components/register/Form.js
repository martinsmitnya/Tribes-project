import React, { useState, useEffect } from 'react';
import './Form.css';
import InputField from './InputField';
import Fetch from '../fetch/Fetch';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Form = () => {

  const dispatch = useDispatch();
  const errormessage = useSelector(state => state.userReducer.errormessage);
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
      setUserName(userName);
      setPasswordHash(passwordHash);
      return dispatch({type: 'MISSING_USERNAME_OR_PASSWORD'});
    } else if (passwordHash.length < 8) {
      setUserName(userName);
      setPasswordHash(passwordHash);
      return dispatch({type: 'PASSWORD_UNDER_8_CHARACTERS'});
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
          Array.from(inputs).forEach(input => (input.value = ''));
          return dispatch({type: 'CLEAR_FIELDS'});
        })
        .catch(error => {
          setUserName(userName);
          setPasswordHash(passwordHash);
          setKingdomName(kingdomName);
          return dispatch({type: 'BACKEND_ERROR', errormessage: error.toString()});
        });
      setKingdomName('');
      setUserName('');
      setPasswordHash('');
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <div className="register-form-container">
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
        {errormessage && <span className="errormessage">{errormessage}</span>}
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Form;
