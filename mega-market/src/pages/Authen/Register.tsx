import { RHFTextField } from '@components/HookFormFields/RHFTextField'
import { RegisterRequest } from '@services/request/authRequest'
import { FormProvider, useFormContext } from 'react-hook-form'

const RegisterForm = () => {
  const { handleSubmit } = useFormContext<RegisterRequest>()

  const onSubmit = (data: RegisterRequest) => {
    console.log(data)
  }

  return (
    <FormProvider onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name='userName' label='Username' type='text' />
      <RHFTextField name='email' label='Email' type='email' />
      <RHFTextField name='password' label='Password' type='password' />
      <RHFTextField
        name='confirmPassword'
        label='Confirm Password'
        type='password'
      />
      <button type='submit'>Register</button>
    </FormProvider>
  )
}
