import React from 'react'
import './CardBadge.css'

interface ICardBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  percent: string
  title: string
  additionalClass?: string
}

const CardBadge: React.FC<ICardBadgeProps> = ({
  percent,
  title,
  additionalClass = '',
  ...restProps
}) => {
  return (
    <aside className={`card-badge-container ${additionalClass}`} {...restProps}>
      <p className={`card-badge card-badge-percent`}>{percent}</p>
      <p className={`card-badge card-badge-title`}>{title}</p>
    </aside>
  )
}

export default CardBadge
