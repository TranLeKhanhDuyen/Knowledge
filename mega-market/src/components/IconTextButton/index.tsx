// CSS
import '@components/IconTextButton/IconTextButton.css'

// Types
type TIconTextButtonSize = 'sm' | 'md' | 'lg'

export interface IIconTextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TIconTextButtonSize
  title?: string
  subTitle?: string
  icon?: string
  additionalClass?: string
  width?: string
  height?: string
}

const IconTextButton = ({
  size,
  title,
  subTitle,
  icon,
  width,
  height,
  additionalClass
}: IIconTextButtonProps) => {
  return (
    <button
      className={`icontext-btn-container icontext-btn-container-${size} ${
        additionalClass || ''
      }`}
    >
      {icon && (
        <img
          className={`img-icontext-btn-${size}`}
          alt='icon'
          src={icon}
          width={width}
          height={height}
        />
      )}
      {title && (
        <span className={`icontext-title icontext-title-${size}`}>{title}</span>
      )}
      {subTitle && (
        <span className={`icontext-title icontext-sub-title`}>{subTitle}</span>
      )}
    </button>
  )
}

export default IconTextButton
