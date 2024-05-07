import IconSvg, { IconSvgProps } from '@components/IconSvg'
import '@components/IconText/IconText.css'

type TIconTextSize = 'sm' | 'md' | 'lg'
type TIconPosition = 'left' | 'right'

export interface IIconTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TIconTextSize
  iconPosition?: TIconPosition
  title?: string
  subTitle?: string
  icon: IconSvgProps['name']
  additionalClass?: string
}

const IconText: React.FC<IIconTextProps> = ({
  size = 'sm',
  iconPosition = 'left',
  title,
  subTitle,
  icon,
  additionalClass,
  children,
  ...props
}) => {
  const containerClass = `icontext-container icontext-container-${size} ${
    iconPosition === 'right' ? 'icontext-container-right' : ''
  } ${additionalClass ?? ''}`
  const iconClass = `img-icontext-${size}`
  const titleClass = `icontext-title icontext-title-${size} ${
    additionalClass ?? ''
  }`
  const subTitleClass = `icontext-title icontext-sub-title ${
    additionalClass ?? ''
  }`

  return (
    <p className={containerClass} {...props}>
      <IconSvg name={icon} className={iconClass} />
      {title && <span className={titleClass}>{title}</span>}
      {subTitle && <span className={subTitleClass}>{subTitle}</span>}
      {children}
    </p>
  )
}

export default IconText
