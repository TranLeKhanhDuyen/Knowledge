import './Input.css'
import { IInputProps } from '@types'

const Input = ({ type, placeholder, name, value }: IInputProps) => (
  <input
    className="input"
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
  />
)

export default Input
