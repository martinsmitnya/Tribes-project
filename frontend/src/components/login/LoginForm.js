import React, { useEffect, useState } from 'react';
import Fetch from '../fetch/Fetch';
import './LoginForm.css';
import oopsErrorIcon from '../../assets/oops.png';
// require('dotenv').config()

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {}, [errorMessage]);
  useEffect(() => {
    setErrorMessage(() => ``);
  }, [userName, password]);

  function handleSubmit(event) {
    event.preventDefault();
    if (password === '' || userName === '') {
      setErrorMessage(() => 'All the input fields are required.');
    } else {
      let body = { username: userName, password: password };
      Fetch('POST', '/api/login', body).then(response => {
        if (response.status !== 200) {
          setErrorMessage(response.error);
          return;
        } else {
          setErrorMessage('');
          localStorage.setItem('token', response.token);
          window.location.reload();
        }
      });
    }
  }

  function handleUsernameChange(event) {
    let container = event.target.value;
    setUserName(() => container);
    // console.log('Username: ' + userName)
  }
  function handlePasswordChange(event) {
    let container = event.target.value;
    setPassword(() => container);
    // console.log('Password: ' + password)
  }

  return (
    <div className="Login">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="username">
              <input
                name="username"
                className="formInput"
                type="text"
                onChange={handleUsernameChange}
              />
            </label>
            <label htmlFor="password">
              <input
                name="password"
                className="formInput"
                type="password"
                onChange={handlePasswordChange}
              />
            </label>
            <div>
              {errorMessage && (
                <div className="errorMessageWrapper">
                  <p>{errorMessage}</p>
                  <img src={oopsErrorIcon} alt="oopsErrorIcon" />{' '}
                </div>
              )}
            </div>
          </div>
          <button className="loginSubmitButton">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
