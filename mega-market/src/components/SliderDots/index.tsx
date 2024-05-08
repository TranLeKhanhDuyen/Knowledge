import React from 'react'

export interface SliderDotsProps
  extends React.HTMLAttributes<HTMLUListElement> {
  images: string[]
  currentSlide: number
  handleDotClick: (index: number) => void
  additionalClass?: string
}

const SliderDots: React.FC<SliderDotsProps> = ({
  images,
  currentSlide,
  handleDotClick,
  additionalClass: additionalClass
}) => {
  return (
    <ul className={`slider-dots ${additionalClass}`}>
      {images.map((_, index) => (
        <li
          key={index}
          className='slider-dot'
          onClick={() => handleDotClick(index)}
        >
          <button
            className={`slider-dot-button ${
              currentSlide === index ? 'active' : 'inactive'
            }`}
          />
        </li>
      ))}
    </ul>
  )
}

export default SliderDots
