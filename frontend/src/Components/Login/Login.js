import React, { useEffect, useState } from 'react';
import './Login.css';
import { FormComponent} from '../FormComponent/FormComponent.js'
import { ButtonComponent} from '../ButtonComponent/ButtonComponent.js'
const loginErrorIcon = '../../../../docs/assets/oops.png'
function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    if(password === '' || userName === '') {
      setErrorMessage(()=> 'All the input fields are required.')
    } 
    console.log('Username: ' + userName + ' Password: ' + password);
    //Fetch comes here
    //Inse fetch if(good) return things else() return -

  }

  function handleUsernameChange(event) {
    let container = event.target.value;
    setUserName(()=> container)
    console.log('Username: '+ userName)

  }
  function handlePasswordChange(event) {
    let container = event.target.value;
    setPassword(()=> container)
    console.log('Password: '+ password)
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
            <input name='username' class='formInput' type='text' onChange={handleUsernameChange}  />
          </label>
          <label htmlFor='password'>
            <input name='password' class='formInput' type='password' onChange={handlePasswordChange}  />
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
