import Icons from '@components/Icons/Icons'
import './IconSvg.css'

export interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof Icons
  className?: string
}

const IconSvg: React.FC<IconSvgProps> = ({ name, className = '' }) => {
  const IconComponent = Icons[name]
  return (
    <span className={`icon icon-${name} ${className || ''}`}>
      {IconComponent}
    </span>
  )
}

export default IconSvg
