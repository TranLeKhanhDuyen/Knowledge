import { IButtonProps } from '../../../types/type';
import './Button.css';

const Button = ({
  title,
  size,
  variant,
  onClick
}: IButtonProps) => (
  <button
    className={`btn btn-${size}
    btn-${variant}`}
    onClick={onClick}>
    {title}
  </button>
)

export default Button;
