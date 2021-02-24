import React, { useEffect, useState } from 'react';
import './Register.css';
const loginErrorIcon = '../../../../docs/assets/oops.png';
function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [passwordhash, setPasswordhash] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (passwordhash === '' || username === '') {
      setErrorMessage(() => 'All the input fields are required.');
    }
    let myRequestObject = {
      username: username,
      passwordhash: passwordhash,
    };
    fetch(process.env.REACT_APP_PORT + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myRequestObject),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status !== 'ok') {
          setErrorMessage(() => data.error);
        } else {
          //REDIRECT TO MAIN PAGE
          console.log(
            'Status: ' + data.status + 'Your token is: ' + data.token
          );
        }
      })
      .catch(error => console.log(error));
  }

  function handleUsernameChange(event) {
    let container = event.target.value;
    setUsername(() => container);
    console.log('Username: ' + username);
  }
  function handlePasswordChange(event) {
    let container = event.target.value;
    setPasswordhash(() => container);
    console.log('Password: ' + passwordhash);
  }

  useEffect(() => {}, [errorMessage]);

  return (
    <div className="Login">
      <div className="mainContent">
        <div className="MainTitle">
          <h1>Tribes of Gymnocercus</h1>
        </div>

        <div className="formWrapper">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              <input
                name="username"
                className="formInput"
                type="text"
                onChange={handleUsernameChange}
              />
            </label>
            <label htmlFor="passwordhash">
              <input
                name="passwordhash"
                className="formInput"
                type="password"
                onChange={handlePasswordChange}
              />
            </label>
            <div className="errorMessageWrapper">
              {errorMessage && (
                <div>
                  <p>{errorMessage}</p>
                  <img src={loginErrorIcon} alt="loginErrorWarning" />{' '}
                </div>
              )}
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
