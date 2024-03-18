import { IImageProps } from '@types'

const Image = ({ width, height, src, alt, variant }: IImageProps) => {
  return (
    <>
      <img className={`img-${variant}`} width={width} height={height} src={src} alt={alt} />
    </>
  )
}

export default Image
