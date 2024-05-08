import { icons } from '@constants/icons'

export interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons
  className?: string
}

const IconSvg: React.FC<IconSvgProps> = ({ name, className = '' }) => {
  return (
    <span className={`icon icon-${name} ${className || ''}`}>
      {icons[name]}
    </span>
  )
}

export default IconSvg
