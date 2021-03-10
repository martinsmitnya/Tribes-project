import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import oopsErrorIcon from '../../assets/oops.png';

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
      let myRequestObject = JSON.stringify({
        username: userName,
        password: password,
      });
      fetch(`${process.env.REACT_APP_PORT}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: myRequestObject,
      })
        .then(response => response.json() )
        .then(data => {
          if (data.status !== 200) {
            //from throw {status: 406, message: 'Username or password is incorrect.'}
            setErrorMessage(() => data);
            return;
          } else {
            //Set token and redirect
            setErrorMessage(() => ``);
            localStorage.setItem('token', data.token);
            
            //Navlink
            window.location.replace('http://localhost:3000/');
          }
        })
        .catch(error => {
          setErrorMessage(() => `${error}`);
          console.log(error);
        });
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
