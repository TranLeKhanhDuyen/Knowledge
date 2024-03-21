import { ChangeEvent } from 'react';
import './Input.css'

export interface IInputProps {
  variant?: TInputVariant;
  placeholder: string;
  name?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TInputVariant = 'search' | 'text';

const Input = ({
  variant = 'text',
  placeholder,
  name = '',
  value = '',
  onChange
}: IInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event)
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
