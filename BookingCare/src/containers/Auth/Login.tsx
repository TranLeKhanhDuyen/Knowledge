import { ChangeEvent, useState } from 'react';
import './Login.css';
import handleLoginAPi from '../../services/userService';
import { useNavigate } from 'react-router-dom';

interface ILoginState {
  username: string;
  password: string;
  isShowPassword: boolean;
  errMessage: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<ILoginState>({
    username: '',
    password: '',
    isShowPassword: false,
    errMessage: ''
  });

  const handleOnChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      username: event.target.value
    });
  };

  const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      password: event.target.value
    });
  };

  const handleLogin = async () => {
    setState({
      ...state,
      errMessage: ''
    });

    navigate('/');
  };
  const handleShowHidePassword = () => {
    setState({
      ...state,
      isShowPassword: !state.isShowPassword
    });
  };

  return (
    <>
      <div className='login-background'>
        <div className='login-container'>
          <div className='login-content '>
            <div className='login-title text-5xl text-bold'>Login</div>
            <div className='form-input'>
              <label>Username</label>
              <input
                type='text'
                className='username text-field'
                placeholder='Enter your username'
                value={state.username}
                onChange={(event) => handleOnChangeUsername(event)}
              />
              <label>Password</label>
              <div className='password-container'>
                <input
                  className='password text-field'
                  type={state.isShowPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  value={state.password}
                  onChange={(event) => handleOnChangePassword(event)}
                />
                <span
                  className={`eye cursor ${
                    state.isShowPassword ? 'hide-eye' : 'show-eye'
                  }`}
                  onClick={handleShowHidePassword}
                ></span>
              </div>
            </div>

            <div className='col-12' style={{ color: 'red' }}>
              {state.errMessage}
            </div>

            <button
              className='login-button text-bold cursor'
              onClick={handleLogin}
            >
              Login
            </button>
            <span className='forgot-password'>Forgot your password?</span>
            <span className='option-text'>Or Login with: </span>
            <div className='afternative-login'>
              <a href='#' className='login-google'></a>
              <a href='#' className='login-facebook'></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
