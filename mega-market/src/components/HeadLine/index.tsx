import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconTextButton from '@components/Common/IconTextButton'
import './HeadLine.css'

export type THeadline = 'primary' | 'secondary'

export interface IHeadline extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subTitle?: string
  variant?: THeadline
  additionalClass?: string
  showButton?: boolean
  navigateTo?: string
  onClick?: () => void
}

const HeadLine = ({
  title,
  subTitle,
  additionalClass,
  showButton = true,
  navigateTo,
  onClick
}: IHeadline) => {

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (navigateTo) {
      const navigate = useNavigate()
      navigate(navigateTo)
    }
  }

  return (
    <div className={`headline-container ${additionalClass}`}>
      <p className={`headline-content ${additionalClass}`}>
        <span className={`headline headline-title ${additionalClass}`}>
          {title}
        </span>
        {subTitle && (
          <span className={`headline headline-sub-title ${additionalClass}`}>
            {subTitle}
          </span>
        )}
      </p>

      {showButton && (
        <IconTextButton
          additionalClass='headline-btn'
          iconPosition='right'
          title='View All'
          icon='arrowRight'
          onClick={handleClick}
        />
      )}
    </div>
  )
}

export default HeadLine
