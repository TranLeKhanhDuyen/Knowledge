import IconTextButton from '@components/IconTextButton'
import './HeadLine.css'

type THeadline = 'primary' | 'secondary'

export interface IHeadline extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subTitle?: string
  variant?: THeadline
  additionalClass?: string
  showButton?: boolean
}

const HeadLine = ({
  title,
  subTitle,
  additionalClass,
  showButton = true
}: IHeadline) => {
  return (
    <div className={`headline-container ${additionalClass}`}>
      <p className={`headline-content ${additionalClass}`}>
        <span className={`headline headline-title ${additionalClass} `}>
          {title}
        </span>
        <span className={`headline headline-sub-title ${additionalClass}`}>
          {subTitle}
        </span>
      </p>

      {showButton && (
        <IconTextButton
          additionalClass='headline-btn'
          iconPosition='right'
          title='View All'
          icon='arrow-right'
        />
      )}
    </div>
  )
}

export default HeadLine
