import React, { useState } from 'react';
import './SettingsBlock.css';
import InputField from './InputField'

const SettingsBlock = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [kingdomName, setKingdomName] = useState('');

  function handleKingdomNameChange(event) {
    setKingdomName(event.target.value.trim());
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (kingdomName === '') {
      setErrorMessage(`Kingdom name is required`);
    } else {
      let myRequestObject = JSON.stringify({
        kingdom_name : kingdomName
      })
      fetch(`${process.env.REACT_APP_PORT}/kingdom`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: myRequestObject,
      })
      .then(response => response.json())
      .then(response => {
        if (response.status !== 200) {
            setErrorMessage(response.error);
            setKingdomName(kingdomName);
            return;
        }
      })
      .catch(error => {
        setErrorMessage(() => `${error}`);
        console.log(error);
      })
    }
  }
  
  return ( 
    <div className="settingsBlock">
    <h1>Kingdom Settings</h1>
    <form autocomplete="off" onSubmit={handleSubmit}>
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
  );
}
 
export default SettingsBlock;