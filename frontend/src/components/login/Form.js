import React, { useEffect, useState } from 'react';
import './Form.css';
import Fetch from '../fetch/Fetch';
import { useHistory } from 'react-router-dom';
import InputField from "../register/InputField";

const Form = () => {

  let history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleUsernameChange(event) {
    let container = event.target.value;
    setUserName(() => container);
  }

  function handlePasswordChange(event) {
    let container = event.target.value;
    setPassword(() => container);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password === '' || userName === '') {
      setErrorMessage(() => 'All the input fields are required.');
    } else {
      setSubmitted(true);
    }
  }

  useEffect(() => {
    if (submitted) {
      let body = { username: userName, password: password };
      Fetch('POST', '/login/login', body)
        .then(response => {
          setErrorMessage(() => ``);
          localStorage.setItem('token', response.token);
          history.push('/buildings');
        })
        .catch(err => {
          setErrorMessage(() => `${err}`);
        });
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <div className="login-form-container">
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
          name="password"
          id="password"
          type="password"
        />
        <br />
        {errorMessage && <span className="login-errormessage">{errorMessage}</span>}
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Form;
