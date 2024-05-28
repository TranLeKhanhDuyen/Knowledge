import React from 'react'
import './CardCategory.css'

type TCardCategoryVariant = 'square' | 'circle'

interface ICardCategoryProps {
  imageUrl: string
  alt?: string
  name?: string
  discountPercent?: string
  additionalClass?: string
  variant?: TCardCategoryVariant
  onClick?: () => void
}

const CardCategory: React.FC<ICardCategoryProps> = ({
  imageUrl,
  alt = 'Image of category',
  name = 'Electronics',
  discountPercent,
  variant = 'circle',
  additionalClass = '',
  onClick
}) => {
  return (
    <article
      className={`card-category-container card-category-container-${variant} ${additionalClass}`}
    >
      <figure
        className={`category-img-wrapper category-img-wrapper-${variant}`}
        onClick={onClick}
      >
        <img className='category-img' src={imageUrl} alt={alt} />
      </figure>
      <aside className={`category-details`}>
        <p className={`category-name category-name-${variant}`}>{name}</p>
        {discountPercent && (
          <p
            className={`category-discount category-discount-${variant}`}
          >{`UP to ${discountPercent} OFF`}</p>
        )}
      </aside>
    </article>
  )
}

export default CardCategory
