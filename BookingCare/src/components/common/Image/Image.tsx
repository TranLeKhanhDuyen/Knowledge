export interface IImageProps {
  variant?: TImageVariant;
  width?: string;
  height?: string;
  src: string;
  alt?: string;
}

export type TImageVariant = 'round' | 'rectangular';

const Image = ({
  width,
  height,
  src,
  alt,
  variant = 'rectangular'
}: IImageProps) => (
  <img
    className={`img-${variant}`}
    width={width}
    height={height}
    src={src}
    alt={alt}
  />
)

export default Image
