import { useState } from 'react'
import { authService } from '@services/authService'
import { UserRole } from '@services/models/user-role'
import { Button, Heading, Input, Text } from '@components/common'
import { Form, ItemLink } from '@components'
import facebookIcon from '@assets/icons/ic-facebook.svg'
import googleIcon from '@assets/icons/ic-google.svg'
import './login.css'

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

  const handleOnChangeUsername = (value: string) => {
    setState({
      ...state,
      username: value
    })
  }

  const handleOnChangePassword = (value: string) => {
    setState({
      ...state,
      password: value
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
      <div className='login-container '>
        <Heading
          variant='h1'
          content='ĐĂNG NHẬP'
          style={{
            fontSize: 'var(--font-5xl)',
            textAlign: 'center',
            color: 'var(--turquoise-color)'
          }}
        />

        <Form className='form-input'>
          <label>Tên</label>
          <Input
            type='text'
            className='username text-field'
            placeholder='Enter your username'
            value={state.username}
            onChangeValue={handleOnChangeUsername}
          />
          <label>Mật khẩu</label>
          <div className='password-container'>
            <Input
              className='password text-field'
              type={state.isShowPassword ? 'text' : 'password'}
              placeholder='Enter your password'
              value={state.password}
              onChangeValue={handleOnChangePassword}
            />
            <span
              className={`eye cursor ${
                state.isShowPassword ? 'hide-eye' : 'show-eye'
              }`}
              onClick={handleShowHidePassword}
            ></span>
          </div>
        </Form>

        <div className='col-12' style={{ color: 'red' }}>
          {state.errMessage}
        </div>

        <Button
          className='login-button text-bold cursor'
          onClick={handleLogin}
          title='Đăng nhập'
        />

        <Text className='forgot-password' content='Quên mật khẩu' />
        <Text className='option-text' content='Hoặc đăng nhập với:' />
        <div className='afternative-login'>
          <ItemLink
            path='#'
            additionalClass='login-google'
            image={facebookIcon}
          />
          <ItemLink
            path='#'
            additionalClass='login-facebook'
            image={googleIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
