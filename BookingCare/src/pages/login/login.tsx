import { ChangeEvent, useState } from 'react'
import './login.css'
import { authService } from '@services/authService'
import { UserRole } from '@services/models/user-role'

interface ILoginState {
  username: string
  password: string
  isShowPassword: boolean
  errMessage: string
}

const Login = () => {
  const [state, setState] = useState<ILoginState>({
    username: '',
    password: '',
    isShowPassword: false,
    errMessage: ''
  })

  const handleOnChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      username: event.target.value
    })
  }

  const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      password: event.target.value
    })
  }

  const handleShowHidePassword = () => {
    setState({
      ...state,
      isShowPassword: !state.isShowPassword
    })
  }

  const handleLogin = async () => {
    setState({
      ...state,
      errMessage: ''
    })

    try {
      const response = await authService.signIn({
        email: state.username,
        password: state.password
      })
      // const { accessToken, user } = response
      console.log(response)

      if (response.user.role === UserRole.ADMIN) {
        window.location.href = '/manage'
      } else if (response.user.role === UserRole.DOCTOR) {
        window.location.href = '/manage/all-users'
      } else {
        window.location.href = '/'
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setState({
          ...state,
          errMessage: error.response.data.message
        })
      }
      console.log('Error during login:', error)
    }
  }

  return (
    <div className='login-background'>
      <div className='login-container'>
        <div className='login-content '>
          <div className='login-title text-5xl text-bold'>Đăng nhập</div>
          <div className='form-input'>
            <label>Tên</label>
            <input
              type='text'
              className='username text-field'
              placeholder='Enter your username'
              value={state.username}
              onChange={(event) => handleOnChangeUsername(event)}
            />
            <label>Mật khẩu</label>
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
          <span className='forgot-password'>Quên mật khẩu?</span>
          <span className='option-text'>Hoặc đăng nhập với: </span>
          <div className='afternative-login'>
            <a href='#' className='login-google'></a>
            <a href='#' className='login-facebook'></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
