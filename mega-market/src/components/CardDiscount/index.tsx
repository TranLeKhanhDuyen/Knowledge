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
      <p className={`card-discount card-discount-percent${additionalClass}`}>
        {percent}
      </p>
      <p className={`card-discount card-discount-title${additionalClass}`}>
        {title}
      </p>
    </div>
  )
}

export default CardDiscount
