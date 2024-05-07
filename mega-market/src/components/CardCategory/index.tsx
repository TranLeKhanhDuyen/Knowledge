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
}

const CardCategory: React.FC<ICardCategoryProps> = ({
  imageUrl,
  alt,
  name,
  discountPercent,
  variant = 'circle',
  additionalClass
}) => {
  return (
    <article
      className={`card-category-container card-category-container-${variant} ${additionalClass}`}
    >
      <figure
        className={`category-img-wrapper category-img-wrapper-${variant} ${additionalClass}`}
      >
        <img className='category-img' src={imageUrl} alt={`Image at ${alt}`} />
      </figure>
      <aside className={`category-details ${additionalClass}`}>
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
