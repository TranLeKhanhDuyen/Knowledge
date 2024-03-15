import './input.css'
import { IInputProps } from '@types'

const Input = ({ type = 'text', placeholder }: IInputProps) => (
  <input className="input" type={type} placeholder={placeholder} />
)

export default Input
