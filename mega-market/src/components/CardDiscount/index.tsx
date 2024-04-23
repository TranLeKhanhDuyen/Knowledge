// CSS
import '@components/CardDiscount/CardDiscount.css'

interface ICardDiscountProps extends React.HTMLAttributes<HTMLDivElement> {
  percent: string
  title: string
  additionalClass?: string
}

const CardDiscount = ({
  percent,
  title,
  additionalClass
}: ICardDiscountProps) => {
  return (
    <div className={`card-discount-container ${additionalClass}`}>
      <span className={`card-discount card-discount-percent${additionalClass}`}>
        {percent}
      </span>
      <span className={`card-discount card-discount-title${additionalClass}`}>
        {title}
      </span>
    </div>
  )
}

export default CardDiscount
