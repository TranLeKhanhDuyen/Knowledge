import TextField, { ITextFieldProps } from '@components/Common/TextField'
import { Controller, useFormContext } from 'react-hook-form'

interface RHFTextFieldProps extends ITextFieldProps {
  name: string
}

export const RHFTextField = ({ name, ...other }: RHFTextFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} error={error?.message} {...other} />
      )}
    />
  )
}
