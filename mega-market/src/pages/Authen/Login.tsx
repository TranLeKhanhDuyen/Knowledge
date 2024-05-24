import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { SignInRequest, useUser } from '@services'
import { RHFTextField, FormProvider, Button } from '@components'
import './authen.css'
import { Link, useNavigate } from 'react-router-dom'
import { ValidationMessages } from '@constants/validation'

const LoginForm = () => {
  const methods = useForm<SignInRequest>()
  const { handleSubmit } = methods
  const [error, setError] = useState<string | null>(null)
  const { setUser } = useUser()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignInRequest> = (data) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === data.email && user.password === data.password
      )

      if (!user) {
        throw new Error('Wrong email or password')
      }

      setUser(user)
      alert('Logged in successfully')
      navigate('/')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Login failed')
      }
    }
  }

  return (
    <div className='container authen-container'>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
        additionalClass='authen-form'
      >
        <h1 className='authen-title'>Welcome Back!</h1>
        <RHFTextField
          additionalClass='form'
          name='email'
          label='Email'
          isShowLabel
          rules={{
            required: ValidationMessages.Required,
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address'
            }
          }}
        />
        <RHFTextField
          additionalClass='form'
          name='password'
          label='Password'
          type='password'
          isShowLabel
          iconRight='eye'
          rules={{ required: ValidationMessages.Required }}
        />
        <div className='error-placeholder'>
          {error && <p className='error-message'>{error}</p>}
        </div>
        <Button additionalClass='btn-register' type='submit' label='Login' />
        <p className='navigate-authen'>
          Don't have an account?{' '}
          <Link className='navigate-authen-link' to='/auth/register'>
            Register
          </Link>
        </p>
      </FormProvider>
      <article className='login-background'></article>
    </div>
  )
}

export default LoginForm
