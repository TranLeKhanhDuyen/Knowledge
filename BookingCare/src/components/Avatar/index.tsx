import { ComponentPropsWithRef, FC } from 'react'

export interface AvatarProps extends ComponentPropsWithRef<'img'> {
  src?: string
  alt?: string
  size?: number
}

export interface Avatars {
  item: AvatarProps[]
}

const Avatar: FC<AvatarProps> = ({ src, alt, size = 50, ...props }) => {
  return (
    <img
      src={src }
      alt={alt}
      {...props}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
        ...(props.style ?? {})
      }}
    />
  )
}

export default Avatar
