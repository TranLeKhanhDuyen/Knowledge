import { Button } from '@components'
import './QuantitySelector.css'
import { HTMLAttributes } from 'react'

export interface IQuantitySelectorProps extends HTMLAttributes<HTMLDivElement> {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  additionalClass?: string
}

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  additionalClass
}: IQuantitySelectorProps) => {
  return (
    <article className={`quantity-container ${additionalClass}`}>
      <Button
        label='-'
        onClick={onDecrease}
        disabled={quantity === 1}
        additionalClass='quantity-btn quantity-btn-reduce'
      />
      <span className='quantity'>{quantity}</span>
      <Button
        label='+'
        onClick={onIncrease}
        additionalClass='quantity-btn quantity-btn-increase'
      />
    </article>
  )
}

export default QuantitySelector
