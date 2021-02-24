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
          return
        } else {
          localStorage.setItem('token', data.token);
          //REDIRECT TO MAIN PAGE       location.replace("http://localhost:3000/")
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

      <div className='mainContent'>
        <div className='MainTitle'>
          <h1>Tribes of Gymnocercus</h1>
        </div>

        <div className='formWrapper'>
          <form onSubmit={handleSubmit}>

            <div className='inputWrapper'>
              <label htmlFor='username'>
                <input name='username' className='formInput' type='text' onChange={handleUsernameChange} />
              </label>
              <label htmlFor='password'>
                <input name='password' className='formInput' type='password' onChange={handlePasswordChange} />
              </label>
              <div >{errorMessage && <div className='errorMessageWrapper'><p>{errorMessage}</p><img src={loginErrorIcon} alt='loginErrorWarning' /> </div>}</div>
            </div>
            <button className='loginSubmitButton'>Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;
