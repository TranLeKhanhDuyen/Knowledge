import React from 'react'
import IconTextButton from '@components/Common/IconTextButton'
import './HeadLine.css'

export type THeadline = 'primary' | 'secondary'

export interface IHeadline extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subTitle?: string
  variant?: THeadline
  additionalClass?: string
  showButton?: boolean
  onClick?: () => void
}

const HeadLine = ({
  title,
  subTitle,
  additionalClass,
  showButton = true,
  onClick
}: IHeadline) => {
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
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default HeadLine
