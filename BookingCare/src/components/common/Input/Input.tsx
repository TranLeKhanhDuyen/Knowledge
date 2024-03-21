import { ChangeEvent } from 'react';
import './Input.css'

export interface IInputProps {
  variant?: 'search' | 'text';
  placeholder: string;
  name?: string;
  value?: string;
  onChange: (value: string) => void;
}

const Input = ({
  variant = 'text',
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
