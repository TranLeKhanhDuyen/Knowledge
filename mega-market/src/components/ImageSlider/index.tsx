import React, { useState } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {SliderDots} from '@components'
import './ImageSlider.css'

interface SliderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  images: string[]
  additionalClass?: string
  displayCount?: number
}

const ImageSlider: React.FC<SliderProps> = ({
  images,
  additionalClass,
  displayCount = 1
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: displayCount,
    slidesToScroll: displayCount,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (_, newIndex) => {
      setCurrentSlide(newIndex)
    }
  }

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className={`slider-container ${additionalClass}`}>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>

      <SliderDots
        images={images}
        currentSlide={currentSlide}
        handleDotClick={handleDotClick}
        additionalClass='images-slider-dots'
      />
    </div>
  )
}

export default ImageSlider
