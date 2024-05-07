import React from 'react'
import logoImage from '@assets/images/logo.svg'

const Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img src={logoImage} alt='Logo' {...props} />
}

export default Logo
