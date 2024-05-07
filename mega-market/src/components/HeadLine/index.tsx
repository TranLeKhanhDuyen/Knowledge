import '@components/HeadLine/HeadLine.css'

type THeadline = 'primary' | 'secondary'

export interface IHeadline extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subTitle?: string
  additionalClass?: THeadline
}

const HeadLine = ({ title, subTitle, additionalClass }: IHeadline) => {
  return (
    <div className={`headline-container ${additionalClass}`}>
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
