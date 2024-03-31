import { ChangeEvent, useState } from 'react'
import './register.css' // Tạo file CSS tương ứng với register nếu cần
import { authService } from '@services/authService'

interface IRegisterState {
  username: string
  email: string
  password: string
  confirmPassword: string
  errMessage: string
}

const Register = () => {
  const [state, setState] = useState<IRegisterState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errMessage: ''
  })

  const handleOnChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      username: event.target.value
    })
  }

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      email: event.target.value
    })
  }

  const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      password: event.target.value
    })
  }

  const handleOnChangeConfirmPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      confirmPassword: event.target.value
    })
  }

  const handleRegister = async () => {
    setState({
      ...state,
      errMessage: ''
    })

    try {
      if (state.password !== state.confirmPassword) {
        setState({
          ...state,
          errMessage: "Passwords don't match"
        })
        return
      }

      const response = await authService.register({
        userName: state.username,
        email: state.email,
        password: state.password
      })
      // Handle successful registration
    } catch (error: any) {
      if (error.response && error.response.data) {
        setState({
          ...state,
          errMessage: error.response.data.message
        })
      }
      console.log('Error during registration:', error)
    }
  }

  return (
    <div className='register-background'>
      <div className='register-container'>
        <div className='register-content '>
          <div className='register-title text-5xl text-bold'>Đăng ký</div>
          <div className='form-input'>
            <label>Tên</label>
            <input
              type='text'
              className='username text-field'
              placeholder='Enter your username'
              value={state.username}
              onChange={(event) => handleOnChangeUsername(event)}
            />
            <label>Email</label>
            <input
              type='email'
              className='email text-field'
              placeholder='Enter your email'
              value={state.email}
              onChange={(event) => handleOnChangeEmail(event)}
            />
            <label>Mật khẩu</label>
            <input
              className='password text-field'
              type='password'
              placeholder='Enter your password'
              value={state.password}
              onChange={(event) => handleOnChangePassword(event)}
            />
            <label>Xác nhận mật khẩu</label>
            <input
              className='confirm-password text-field'
              type='password'
              placeholder='Confirm your password'
              value={state.confirmPassword}
              onChange={(event) => handleOnChangeConfirmPassword(event)}
            />
          </div>

          <div className='col-12' style={{ color: 'red' }}>
            {state.errMessage}
          </div>

          <button
            className='register-button text-bold cursor'
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
