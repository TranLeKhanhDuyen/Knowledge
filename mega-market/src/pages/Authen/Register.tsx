import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { RegisterRequest, useUser } from '@services'
import { Button, RHFTextField, FormProvider } from '@components'
import './authen.css'

const RegisterForm = () => {
  const methods = useForm<RegisterRequest>()
  const { handleSubmit } = methods
  const [error, setError] = useState<string | null>(null)
  const { setUser } = useUser()

  const onSubmit = (data: RegisterRequest) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
      const userExists = existingUsers.some(
        (user: { email: string }) => user.email === data.email
      )

      if (userExists) {
        throw new Error('Email already exists')
      }

      const newUser = {
        userName: data.userName,
        email: data.email,
        password: data.password
      }

      const updatedUsers = [...existingUsers, newUser]
      localStorage.setItem('users', JSON.stringify(updatedUsers))
      setUser(newUser)
      alert('Login is successful')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Login is failed')
      }
    }
  }

  const handleEyeClick = () => {
    // update later
  }

  return (
    <div className='container authen-container'>
      <article className='register-background'></article>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
        additionalClass='authen-form'
      >
        <h1 className='authen-title'>Please Fill out form to Register!</h1>
        <RHFTextField
          additionalClass='form'
          name='userName'
          label='UserName'
          isShowLabel
        />
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
        <RHFTextField
          additionalClass='form'
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          isShowLabel
          iconRight='eye'
        />
        <div className='error-placeholder'>
          {' '}
          {error && <p className='error-message'>{error}</p>}
        </div>
        <Button additionalClass='btn-register' type='submit' label='Register' />
      </FormProvider>
    </div>
  )
}

export default RegisterForm
