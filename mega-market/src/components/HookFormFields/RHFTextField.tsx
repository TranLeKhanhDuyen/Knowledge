import TextField, { ITextFieldProps } from '@components/Common/TextField'
import { Controller, useFormContext } from 'react-hook-form'

interface RHFTextFieldProps extends ITextFieldProps {
  name: string
  rules?: any
}

const RHFTextField = ({ name, rules, ...other }: RHFTextFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} error={error?.message} {...other} />
      )}
    />
  )
}

export default RHFTextField
