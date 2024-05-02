import IconSvg, { IconSvgProps } from '@components/IconSvg'
import '@components/IconTextButton/IconTextButton.css'

type TIconTextButtonSize = 'sm' | 'md' | 'lg'
type TIconPosition = 'left' | 'right'

export interface IIconTextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TIconTextButtonSize
  iconPosition?: TIconPosition
  title?: string
  subTitle?: string
  icon: IconSvgProps['name']
  additionalClass?: string
}

const IconTextButton: React.FC<IIconTextButtonProps> = ({
  size = 'sm',
  iconPosition = 'left',
  title,
  subTitle,
  icon,
  additionalClass,
  children,
  ...props
}) => {
  const containerClass = `icontext-btn-container icontext-btn-container-${size} ${
    iconPosition === 'right' ? 'icontext-btn-container-right' : ''
  } ${additionalClass ?? ''}`
  const iconClass = `img-icontext-btn-${size}`
  const titleClass = `icontext-title icontext-title-${size} ${
    additionalClass ?? ''
  }`
  const subTitleClass = `icontext-title icontext-sub-title ${
    additionalClass ?? ''
  }`

  return (
    <button className={containerClass} {...props}>
      <IconSvg name={icon} className={iconClass}/>
      {title && <span className={titleClass}>{title}</span>}
      {subTitle && <span className={subTitleClass}>{subTitle}</span>}
      {children}
    </button>
  )
}

export default IconTextButton
