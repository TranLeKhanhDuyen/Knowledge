import IconSvg, {IconSvgProps } from '@components/Common/IconSvg'
import './IconText.css'

type TIconTextSize = 'sm' | 'md' | 'lg'
type TIconPosition = 'left' | 'right'
type TIconTextVariant = 'primary' | 'secondary'

export interface IIconTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TIconTextSize
  iconPosition?: TIconPosition
  title?: string
  subTitle?: string
  icon: IconSvgProps['name']
  additionalClass?: string
  type?: TIconTextVariant
}

const IconText: React.FC<IIconTextProps> = ({
  size = 'sm',
  iconPosition = 'left',
  title,
  subTitle,
  icon,
  additionalClass = '',
  children,
  type = 'primary',
  ...props
}) => {
  const containerClass = `icontext-container icontext-container-${size} ${
    iconPosition === 'right' ? 'icontext-container-right' : ''
  } ${additionalClass ?? ''}`
  const iconClass = `img-icontext-${size} img-icontext-${type}`
  const titleClass = `icontext-title icontext-title-${size} icontext-title-${type}`
  const subTitleClass = `icontext-title icontext-sub-title-${type}`

  return (
    <article className={containerClass} {...props}>
      <IconSvg name={icon} className={iconClass} />
      <aside className={`icontext-content icontext-content-${type}`}>
        <p className={titleClass}>{title}</p>
        <p className={subTitleClass}>{subTitle}</p>
        {children}
      </aside>
    </article>
  )
}

export default IconText
