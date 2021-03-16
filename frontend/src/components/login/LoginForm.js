import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import Fetch from '../fetch/Fetch';
import oopsErrorIcon from '../../assets/oops.png';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  let history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      let body = { username: userName, password: password };
      Fetch('POST', '/login/login', body)
        .then(response => {
          setErrorMessage(() => ``);
          history.push('/buildings');
          localStorage.setItem('token', response.token);
        })
        .catch(err => {
          setErrorMessage(() => `${err}`);
        });
      setSubmitted(false);
    }
  }, [submitted]);

  function handleSubmit(event) {
    event.preventDefault();
    if (password === '' || userName === '') {
      setErrorMessage(() => 'All the input fields are required.');
    } else {
      setSubmitted(true);
    }
  }

  function handleUsernameChange(event) {
    let container = event.target.value;
    setUserName(() => container);
  }
  function handlePasswordChange(event) {
    let container = event.target.value;
    setPassword(() => container);
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
