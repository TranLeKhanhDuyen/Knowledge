import './Input.css'
import { IInputProps } from '@types'

const Input = ({
  type,
  placeholder,
  name,
  value,
  additionalClass
}: IInputProps) => (
  <input
    className={`input ${additionalClass}`}
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
  />
)

export default Input
