import React from 'react'
import './ImagePadding.css'

type TImagePadding = 'square' | 'circle'

export interface IImagePaddingProps {
  imageUrl: string
  alt: string
  variant?: TImagePadding
  additionalClass?: string
}

const ImagePadding: React.FC<IImagePaddingProps> = ({
  imageUrl,
  alt,
  variant = 'circle',
  additionalClass
}) => {
  return (
    <div
      className={`image-padding-container image-padding-container-${variant} ${additionalClass}`}
    >
      <img
        className={`image-padding image-padding-${variant} ${additionalClass}`}
        src={imageUrl}
        alt={`Image at ${alt}`}
      />
    </div>
  )
}

export default ImagePadding
