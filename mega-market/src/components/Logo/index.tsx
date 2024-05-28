import React from 'react'
import logoImage from '@assets/images/logo.svg'
import logoImageWhite from '@assets/images/logo-white.svg'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'default' | 'white'
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', ...props }) => {
  const imageSrc = variant === 'white' ? logoImageWhite : logoImage

  return <img src={imageSrc} alt='Logo' {...props} />
}

export default Logo
