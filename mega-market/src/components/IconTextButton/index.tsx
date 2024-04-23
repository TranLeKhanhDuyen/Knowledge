import '@components/IconTextButton/IconTextButton.css'

type TIconTextButtonSize = 'sm' | 'md' | 'lg'
type TIconPosition = 'left' | 'right'

export interface IIconTextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TIconTextButtonSize
  iconPosition?: TIconPosition
  title?: string
  subTitle?: string
  icon?: string
  additionalClass?: string
}

const IconTextButton: React.FC<IIconTextButtonProps> = ({
  size = 'sm',
  iconPosition = 'left',
  title,
  subTitle,
  icon,
  additionalClass,
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
      {icon && <img className={iconClass} alt='icon' src={icon} />}
      {title && <span className={titleClass}>{title}</span>}
      {subTitle && <span className={subTitleClass}>{subTitle}</span>}
    </button>
  )
}

export default IconTextButton
