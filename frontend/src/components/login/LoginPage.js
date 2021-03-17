import React from 'react';
import LoginForm from './LoginForm'
import Header from '../header/Header'
import './LoginPage.css';

function LoginPage() {
  return (
    <div>
      <Header />
      <div className='mainContent'>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;