import React, { useEffect, useState } from 'react';
import './Login.css';
const loginErrorIcon = '../../../../docs/assets/oops.png'
function Login() {
  const [errorMessage, setErrorMessage] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    //Fetch comes here

    setErrorMessage(() => 'We have an error')
  }

  useEffect(
    () => {

    }, [errorMessage]
  );


  return (
    <div className="Login">

      <div class='navbarWrapper'>
        <h2>Tribes of Gymnocercus</h2>
        <div class='loginButtonsWraper'>
          <ul class='loginButtons'>
            <li><button>Login</button></li>
            <li><button>Register</button></li>
          </ul>
        </div>
      </div>
      <div class='mainContent'>
      <div class='MainTitle'>
        <h1>Tribes of Gymnocercus</h1>
      </div>

      <div class = 'formWrapper'> 
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>
            <input name='username' class='formInput' type='text' required />
          </label>
          <label htmlFor='password'>
            <input name='password' class='formInput' type='password' required />
          </label>
          <div class='errorMessageWrapper'>{errorMessage && <div><p>{errorMessage}</p><img src ={loginErrorIcon} alt ='loginErrorWarning'/> </div>}</div>
          <button>Login</button>
        </form>
      </div>
      </div>

    </div>
  );
}

export default Login;
