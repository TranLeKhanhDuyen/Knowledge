import './Input.css'

export interface IInputProps {
  variant?: TInputVariant;
  placeholder?: string;
  name?: string;
  value?: string;
  additionalClass?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TInputVariant = 'search' | 'text';

const Input = ({
  variant,
  placeholder,
  name,
  value,
  onChange
}: IInputProps) => (
  <input
    className={`input-${variant}`}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
)

export default Input
