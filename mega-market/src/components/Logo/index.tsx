import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoImage from '@assets/images/logo.svg'
import logoImageWhite from '@assets/images/logo-white.svg'
import './Logo.css'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'default' | 'white'
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', ...props }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  const imageSrc = variant === 'white' ? logoImageWhite : logoImage

  return (
    <img
      className='logo'
      src={imageSrc}
      alt='Logo'
      {...props}
      onClick={handleClick}
    />
  )
}

export default Logo
