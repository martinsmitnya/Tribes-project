import React, { useState, useEffect } from 'react';
import './SettingsBlock.css';
import InputField from './InputField';
import Fetch from '../fetch/Fetch';

const SettingsBlock = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [kingdomName, setKingdomName] = useState('');

  useEffect(() => {
    setErrorMessage(() => ``);
  }, [kingdomName]);

  function handleKingdomNameChange(event) {
    setKingdomName(event.target.value.trim());
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (kingdomName === '') {
      setErrorMessage(`Kingdom name is required`);
    } else {
      let body = {
        kingdom_name: kingdomName,
      };

      Fetch(
        'PUT',
        '/kingdom',
        body,
        JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
      )
        .then(response => {
          setErrorMessage('');
          let input = document.querySelector('input');
          input.value = '';
          setErrorMessage('');
        })
        .catch(error => {
          console.log(error);
          setErrorMessage(error.message);
          setKingdomName(kingdomName);
        });
    }
  }

  return (
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
        <br />
        <button type="submit">UPDATE SETTINGS</button>
      </form>
    </div>
  );
};

export default SettingsBlock;
