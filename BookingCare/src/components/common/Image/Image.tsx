import './Image.css'

export type TImage = 'circle' | 'square'

export interface IImageProps { //TImageComponent
  width?: string; //
  height?: string; //
  src: string;
  alt?: string;
  type?: TImage
}

const Image = ({
  width = '100%',
  height = 'auto',
  src,
  alt,
  type
}: IImageProps) => (
  <img
    className={`img img-${type}`}
    width={width}
    height={height}
    src={src}
    alt={alt}
  />
)

export default Image
