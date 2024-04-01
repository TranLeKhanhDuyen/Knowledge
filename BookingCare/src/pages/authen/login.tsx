import { useState } from 'react'
import { authService } from '@services/authService'
import { UserRole } from '@services/models/user-role'
import { Button, Heading, Text } from '@components/common'
import { Form, ItemLink } from '@components'
import facebookIcon from '@assets/icons/ic-facebook.svg'
import googleIcon from '@assets/icons/ic-google.svg'
import InputField from '@components/common/InputField/InputField'
import './authen.css'

interface ILoginProps {
  username: string
  password: string
  isShowPassword: boolean
  errMessage: string
}

const Login = () => {
  const [state, setState] = useState<ILoginProps>({
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
      if (response.user.role === UserRole.ADMIN) {
        window.location.href = '/manage'
      } else if (response.user.role === UserRole.DOCTOR) {
        window.location.href = '/manage/doctor-schedule'
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
    <div className='authen-background'>
      <div className='authen-container sign-in-container'>
        <Heading
          variant='h1'
          content='ĐĂNG NHẬP'
          style={{
            fontSize: 'var(--font-5xl)',
            textAlign: 'center',
            color: 'var(--turquoise-color)'
          }}
        />

        <Form className='form-input sign-in-form'>
          <InputField
            label='Tên'
            type='text'
            className='username text-field'
            placeholder='Nhập tên hoặc email'
            value={state.username}
            onChangeValue={handleOnChangeUsername}
          />

          <div className='password-container'>
            <InputField
              label='Mật khẩu'
              className='password text-field'
              type={state.isShowPassword ? 'text' : 'password'}
              placeholder='Nhập mật khẩu'
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
          title='Đăng nhập'
          variant='secondary'
          additionalClass='sign-in'
          onClick={handleLogin}
        />

        <Text
          className='forgot-password'
          content='Quên mật khẩu?'
          style={{ textAlign: 'center' }}
        />

        <Button
          title='Đăng ký tài khoản'
          variant='primary'
          additionalClass='register'
          onClick={() => (window.location.href = '/register')}
        />

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
