// CSS
import '@components/ButtonIcon/ButtonIcon.css'

// Types
type TButtonIconVariant = 'square' | 'circle'
type TButtonSize = 'sm' | 'md' | 'lg'

export interface IButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: TButtonIconVariant
  size: TButtonSize
  icon?: string
  additionalClass?: string
  width?: string
  height?: string
}

const ButtonIcon = ({
  variants,
  size,
  icon,
  width,
  height,
  additionalClass,
  onClick,
  ...props
}: IButtonIconProps) => {
  return (
    <button
      className={`
        btn btn-${variants}
        btn-${size}
        ${additionalClass || ''}
      `}
      {...props}
      onClick={onClick}
    >
      {icon && (
        <img
          className='btn-icon'
          alt='icon'
          src={icon}
          width={width}
          height={height}
        />
      )}
    </button>
  )
}

export default ButtonIcon
