import React from 'react'
import './Image.css'

type TImage = 'square' | 'circle'

export interface IImageProps {
  imageUrl: string
  alt: string
  variant?: TImage
  additionalClass?: string
}

const Image: React.FC<IImageProps> = ({
  imageUrl,
  alt,
  variant = 'circle',
  additionalClass
}) => {
  return (
    <div
      className={`image-container image-container-${variant} ${additionalClass}`}
    >
      <img
        className={`image image-${variant} ${additionalClass}`}
        src={imageUrl}
        alt={`Image at ${alt}`}
      />
    </div>
  )
}

export default Image
