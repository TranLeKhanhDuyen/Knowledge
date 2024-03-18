import { IImageProps } from '@types'
export type TImageVariant = 'round' | 'rectangular';

const Image = ({
    width,
    height,
    src,
    alt,
    variant
  }: IImageProps) => {
  return (
    <>
      <img
        className={`img-${variant}`}
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </>
  )
}

export default Image
