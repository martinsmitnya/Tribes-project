import React from 'react';
import RegisterBlock from './RegisterBlock'
import Header from '../header/Header'
import './RegisterPage.css'

const RegisterPage = () => {

    return (
        <div className='register-page-container'>
            <Header />
            <RegisterBlock />
        </div>
    );
}

export default RegisterPage;
