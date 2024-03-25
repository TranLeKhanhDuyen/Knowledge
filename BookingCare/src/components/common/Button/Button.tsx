import './Button.css'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: TButtonVariant
}

export type TButtonVariant = 'primary' | 'secondary'

const Button = ({
  title = 'See more',
  variant = 'primary',
  ...props
}: IButtonProps) => (
  <button className={`btn btn-${variant}`} {...props}>
    {title}
  </button>
)

export default Button
