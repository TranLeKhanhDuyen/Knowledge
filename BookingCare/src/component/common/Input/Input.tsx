import './Input.css'
import { IInputProps } from '@types'

export type TInputVariant = 'search' | 'text';

const Input = ({
  variant,
  placeholder,
  name,
  value
}: IInputProps) => (
  <input
    className={`input-${variant}`}
    placeholder={placeholder}
    name={name}
    value={value}
  />
)

export default Input
