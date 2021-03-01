import React from 'react';
import LoginForm from './LoginForm'
import Header from './Header'
import './LoginPage.css';

function LoginPage() {
  return (
    <div>
      <Header />
      <div className='mainContent'>
        <h1 className='loginTitle'>Tribes of Gymnocercus</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;