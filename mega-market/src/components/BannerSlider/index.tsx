import React from 'react'
import ButtonIcon from '@components/Common/ButtonIcon'
import { useState } from 'react'

import './BannerSlider.css'
import { SliderDots } from '@components'

export interface IImageSliderProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageUrls: string[]
  additionalClass?: string
}

const BannerSlider = ({ imageUrls }: IImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }

  const showPreviousImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }

  const handleDotClick = (index: number) => {
    setImageIndex(index)
  }

  return (
    <div className='container image-slider-container'>
      <div className='list-img'>
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className='img-slider'
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <ButtonIcon
        variants='circle'
        icon='arrow-left'
        additionalClass='btn-slider btn-slider-left'
        onClick={showPreviousImage}
      />
      <ButtonIcon
        variants='circle'
        icon='arrow-right'
        additionalClass='btn-slider btn-slider-right'
        onClick={showNextImage}
      />

      <SliderDots
        images={imageUrls}
        currentSlide={imageIndex}
        handleDotClick={handleDotClick}
        additionalClass='banner-slider-dots'
      />
    </div>
  )
}

export default BannerSlider
