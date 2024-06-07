import React from 'react'
import { CardBadge } from '@components'
import './CardProduct.css'

interface ICardProductProps {
  imageUrl: string
  alt: string
  name: string
  salePrice: string
  regularPrice: number
  savePrice: string
  discountPercent: string
  contentBadge?: string
  additionalClass?: string
  onClick?: () => void
}

const CardProduct: React.FC<ICardProductProps> = ({
  imageUrl,
  alt,
  name,
  salePrice,
  regularPrice,
  savePrice,
  discountPercent,
  contentBadge = 'off',
  onClick,
  additionalClass = ''
}) => {
  return (
    <article
      className={`card-product-container ${additionalClass}`}
      onClick={onClick}
    >
      <section className={`product`}>
        <img className='product-square' src={imageUrl} alt={alt} />
        <CardBadge
          percent={discountPercent}
          title={contentBadge}
          additionalClass='product-badge'
        />
      </section>

      <section className={`product-details `}>
        <h2 className='product-name'>{name}</h2>
        <div className='product-prices'>
          <p>
            <span className='product-sale-price'>₹{salePrice}</span>
            <span className='product-regular-price'>₹{regularPrice}</span>
          </p>
          <p className='product-save-price'>Save - ₹{savePrice}</p>
        </div>
      </section>
    </article>
  )
}

export default CardProduct
