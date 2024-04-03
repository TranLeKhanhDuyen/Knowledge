import { FC } from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  size?: number
}

const Avatar: FC<AvatarProps> = ({ src, alt, size = 50 }) => {
  return (
    <img
      src={src || '/assets/images/default-avatar.avif'}
      alt={alt}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  )
}

export default Avatar
