import React from 'react'
import { Circle, CircleDot } from 'lucide-react'
import ButtonIcon from '@components/ButtonIcon'
import { useState } from 'react'

import './BannerSlider.css'

export interface IImageSliderProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageUrls: string[]
  additonalClass?: string
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

      <div className='slider-navigation'>
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className='img-slider-dot-btn'
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BannerSlider
