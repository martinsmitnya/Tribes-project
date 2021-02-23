import React, { useState } from 'react';
import './LoginForm.css';
const loginErrorIcon = '../../../../docs/assets/oops.png'
function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    if (password === '' || userName === '') {
      setErrorMessage(() => 'All the input fields are required.')
    }
    console.log('Username: ' + userName + ' Password: ' + password);
    let myRequestObject = {
      "username": userName,
      "password": password
    }
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { myRequestObject }
    })
      .then(response => response.json()).then(data => {
        if (data.status !== 'ok') {
          setErrorMessage(() => data.error)
        } else {
          //REDIRECT TO MAIN PAGE
          console.log('Status: ' + data.status + 'Your token is: ' + data.token)
        }
      })
      .catch(error => console.log(error))
  }

  function handleUsernameChange(event) {
    let container = event.target.value;
    setUserName(() => container)
    console.log('Username: ' + userName)

  }
  function handlePasswordChange(event) {
    let container = event.target.value;
    setPassword(() => container)
    console.log('Password: ' + password)
  }


  return (
    <div className="Login">

      <div class='mainContent'>
        <div class='MainTitle'>
          <h1>Tribes of Gymnocercus</h1>
        </div>

        <div class='formWrapper'>
          <form onSubmit={handleSubmit}>

            <div class='inputWrapper'>
              <label htmlFor='username'>
                <input name='username' class='formInput' type='text' onChange={handleUsernameChange} />
              </label>
              <label htmlFor='password'>
                <input name='password' class='formInput' type='password' onChange={handlePasswordChange} />
              </label>
              <div >{errorMessage && <div class='errorMessageWrapper'><p>{errorMessage}</p><img src={loginErrorIcon} alt='loginErrorWarning' /> </div>}</div>
            </div>
            <button class='loginSubmitButton'>Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;
