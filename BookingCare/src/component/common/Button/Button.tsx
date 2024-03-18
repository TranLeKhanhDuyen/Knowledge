import { IButtonProps } from '@types';
import './Button.css';

export type TButtonSize = 'small' | 'medium' | 'large';
export type TButtonVariant = 'primary' | 'secondary';

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
