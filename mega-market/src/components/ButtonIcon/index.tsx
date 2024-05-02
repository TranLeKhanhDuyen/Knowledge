import IconSvg, { IconSvgProps } from '@components/IconSvg'
import '@components/ButtonIcon/ButtonIcon.css'

type TButtonIconVariant = 'square' | 'circle'
type TButtonSize = 'sm' | 'md' | 'lg'

export interface IButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: TButtonIconVariant
  size?: TButtonSize
  icon: IconSvgProps['name']
  alt: string
  additionalClass?: string
}

const ButtonIcon = ({
  variants,
  size,
  icon,
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
      <IconSvg name={icon} />
    </button>
  )
}

export default ButtonIcon
