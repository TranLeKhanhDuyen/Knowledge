import { ChangeEvent } from 'react';
import './Input.css'

export interface IInputProps {
  variant?: 'search' | 'text';
  type: 'text'| 'checkbox'|'email'|'password'|'date';
  placeholder?: string;
  name?: string;
  value?: string;
  onChange: (value: string) => void;
  required?: boolean
}

const Input = ({
  variant ,
  placeholder,
  name,
  value,
  onChange
}: IInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  };
  return (
    <input
      className={`input-${variant}`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleOnChange}
    />
  )
}

export default Input
