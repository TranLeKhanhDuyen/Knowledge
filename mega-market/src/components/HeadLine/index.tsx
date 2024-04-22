// CSS
import '@components/HeadLine/HeadLine.css'

// Types

export interface IHeadline extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subTitle?: string
  additionalClass?: string
}

const HeadLine = ({ title, subTitle, additionalClass }: IHeadline) => {
  return (
    <div className='headline-container'>
      <span className={`headline headline-title ${additionalClass} `}>
        {title}
      </span>
      <span className={`headline headline-sub-title ${additionalClass}`}>
        {subTitle}
      </span>
    </div>
  )
}

export default HeadLine
