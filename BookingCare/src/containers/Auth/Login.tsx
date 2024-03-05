import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className='login-background'>
        <div className='login-container'>
          <div className='login-content '>
            <div className='login-title text-5xl text-bold'>Login</div>
            <div className='form-input'>
              <label>Username</label>
              <input type='text' className='username text-field' />
            </div>
            <div className='form-input'>
              <label>Password</label>
              <input type='text' className='password text-field' />
            </div>
            <button className='login-button text-bold'>Login</button>
            <span className='forgot-password'>Forgot your password?</span>
            <span className='option-text'> Or Login with: </span>
            <div className='afternative-login'>
              <a href='#' className='google'></a>
              <a href='#' className='facebook'></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
