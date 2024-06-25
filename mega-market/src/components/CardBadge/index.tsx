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
  additionalClass = ''
}) => {
  return (
    <aside className={`card-badge-container ${additionalClass}`}>
      <p className={`card-badge badge-percent`}>{percent}%</p>
      <p className={`card-badge badge-title`}>{title}</p>
    </aside>
  )
}

export default CardBadge
