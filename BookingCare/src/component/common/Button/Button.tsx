import { IButtonProps } from '../../../types/type';
import './Button.css';

const Button = ({ title, size = 'small', variant = 'primary', onClick }: IButtonProps) => (
  <button className={`btn btn-${size} btn-${variant}`} onClick={onClick}>
    {title}
  </button>
)

export default Button;
