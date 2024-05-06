import React from 'react'
import { CardDiscount } from '@components'
import './CardProduct.css'

interface ICardProductProps {
  imageUrl: string
  alt: string
  name: string
  salePrice: number
  regularPrice: number
  savePrice: number
  discountPercent: string
  contentDiscount?: string
  additionalClass?: string
}

const CardProduct: React.FC<ICardProductProps> = ({
  imageUrl,
  alt,
  name,
  salePrice = 400000,
  regularPrice = 455322,
  savePrice = 0,
  discountPercent = '50%',
  contentDiscount = 'off',
  additionalClass
}) => {
  return (
    <div className={`card-product-container ${additionalClass}`}>
      <div className={`product ${additionalClass}`}>
        <img
          className='product-square'
          src={imageUrl}
          alt={`Image at ${alt}`}
        />
        <CardDiscount
          percent={discountPercent}
          title={contentDiscount}
          additionalClass='product-discount'
        />
      </div>

      <div className={`product-details ${additionalClass}`}>
        <div className='product-name'>{name}</div>
        <div className='product-prices'>
          <span className='product-regular-price'>₹{regularPrice}</span>
          <span className='product-sale-price'>₹{salePrice}</span>
          <p className='product-save-price'>Save - ₹{savePrice}</p>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
