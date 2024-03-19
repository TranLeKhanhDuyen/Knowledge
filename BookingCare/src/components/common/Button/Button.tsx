import './Button.css';

export interface IButtonProps {
  title: string;
  size?: TButtonSize;
  variant?: TButtonVariant;
  onClick: () => void;
}

export type TButtonSize = 'small' | 'medium' | 'large';

export type TButtonVariant = 'primary' | 'secondary';

const Button = ({
  title = 'See more',
  size = 'small',
  variant = 'primary',
  onClick
}: IButtonProps) => (
  <button
    className={`btn btn-${size} btn-${variant}`}
    onClick={onClick}
  >
    {title}
  </button>
)

export default Button;
