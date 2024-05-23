import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { SignInRequest, useUser } from '@services'
import { RHFTextField, FormProvider, Button } from '@components'
import './authen.css'

const LoginForm = () => {
  const methods = useForm<SignInRequest>()
  const { handleSubmit } = methods
  const [error, setError] = useState<string | null>(null)
  const { setUser } = useUser()

  const onSubmit = (data: SignInRequest) => {
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
      console.log('Logged in successfully')
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
        <h1 className='authen-title'>Please Fill out form to Login!</h1>
        <RHFTextField
          additionalClass='form'
          name='email'
          label='Email'
          isShowLabel
        />
        <RHFTextField
          additionalClass='form'
          name='password'
          label='Password'
          type='password'
          isShowLabel
          iconRight='eye'
          width='10px'
          height='10px'
        />
        <div className='error-placeholder'>
          {' '}
          {error && <p className='error-message'>{error}</p>}
        </div>
        <Button additionalClass='btn-register' type='submit' label='Login' />
      </FormProvider>
      <article className='login-background'></article>
    </div>
  )
}

export default LoginForm
