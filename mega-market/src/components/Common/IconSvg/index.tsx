import { icons } from "@constants/icons"

export interface IconSvgProps {
  name: keyof typeof icons
  style?: React.CSSProperties
  className?: string
}

const IconSvg: React.FC<IconSvgProps> = ({ name, style, className }) => {
  return (
    <span className={`icon icon-${name} ${className || ''}`} style={style}>
      {icons[name]}
    </span>
  )
}

export default IconSvg
