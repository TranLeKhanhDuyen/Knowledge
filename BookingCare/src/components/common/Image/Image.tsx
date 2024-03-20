import './Image.css'

export interface IImageProps {
  width?: string;
  height?: string;
  src: string;
  alt: string;
}

const Image = ({
  width = '100%',
  height = 'auto',
  src,
  alt,
}: IImageProps) => (
  <img
    className={`img`}
    width={width}
    height={height}
    src={src}
    alt={alt}
  />
)

export default Image
