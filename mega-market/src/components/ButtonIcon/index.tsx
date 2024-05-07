import '@components/ButtonIcon/ButtonIcon.css'

type TButtonIconVariant = 'square' | 'circle'
type TButtonSize = 'sm' | 'md' | 'lg'

export interface IButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: TButtonIconVariant
  size?: TButtonSize
  icon: string
  alt: string
  additionalClass?: string
  width?: string
  height?: string
}

const ButtonIcon = ({
  variants = 'square',
  size = 'md',
  icon,
  width,
  height,
  alt = 'icon',
  additionalClass,
  onClick,
  ...props
}: IButtonIconProps) => {
  return (
    <button
      className={`btn btn-${variants} btn-${size} ${additionalClass || ''}`}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <img
          className='btn-icon'
          alt={`Image depicts ${alt}`}
          src={icon}
          width={width}
          height={height}
        />
      )}
    </button>
  )
}

export default ButtonIcon
