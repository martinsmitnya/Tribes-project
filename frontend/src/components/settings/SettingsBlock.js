import React, { useState, useEffect } from 'react';
import './SettingsBlock.css';
import InputField from './InputField'
import Fetch from '../fetch/Fetch'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';

const SettingsBlock = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const kingdomName = useSelector(state => state.userReducer.kingdomName);

  useEffect(() => {
    setErrorMessage(() => ``);
  }, [kingdomName]);

  function handleKingdomNameChange(event) {
    if (kingdomName === '') {
      setErrorMessage(`Kingdom name is required`);
    } else {
      localStorage.setItem('kingdomName', event.target.value.trim());
    }
    return dispatch({type: 'SET_NEW_KINGDOMNAME', kingdomName: event.target.value.trim()})
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (kingdomName === '') {
      setErrorMessage(`Kingdom name is required`);
    } else {
      let body = {
        kingdom_name: kingdomName,
      };

    Fetch('PUT', '/kingdom', body, JSON.parse(atob(localStorage.getItem('token').split('.')[1])))
    .then(response => {
      setErrorMessage('');
      let input = document.querySelector('input');
      input.value = '';
      setErrorMessage('');
     })
    .catch (error => {
      console.log(error)
      setErrorMessage(error.message)
    })
    }
  }
  
  return ( 
    <div>
      <Header />
    <div className="settingsBlock">
    <h1>Kingdom Settings</h1>
    <form autoComplete="off" onSubmit={handleSubmit}>
    <InputField
              onChange={handleKingdomNameChange}
              placeholder="Kingdom's name"
              name="kingdom"
              id="kingdom's name"
              type="text"
              required
            />
    {errorMessage && <span className="errormessage">{errorMessage}</span>}
    <br/>
    <button type="submit">UPDATE SETTINGS</button>
    </form>
    </div> 
    </div>
  );
};

export default SettingsBlock;
