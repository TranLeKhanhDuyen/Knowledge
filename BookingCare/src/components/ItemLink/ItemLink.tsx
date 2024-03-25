import { Link } from 'react-router-dom'
import Image, { TImageVariant } from '@components/common/Image/Image'
import placeholderImage from '@assets/facilities/cho-ray.jpg'
import Text, { ITextProps } from '@components/common/Text/Text'
import './ItemLink.css'
import { Heading } from '@components/common'
import { IHeadingProps } from '@components/common/Heading/Heading'

export type TItemLinkType =
  | 'banner'
  | 'service'
  | 'specialist'
  | 'facilities'
  | 'doctor'
  | 'handbook'
  | 'media'
  | 'icon'
  | 'footer'

export interface IItemLinkProps {
  type?: TItemLinkType
  headingProps?: IHeadingProps
  textProps?: ITextProps
  image?: string
  alt?: string
  width?: string
  height?: string
  typeImage?: TImageVariant
  path?: string
}

const ItemLink = ({
  type,
  headingProps,
  textProps,
  width,
  height,
  image = placeholderImage,
  path = '',
  typeImage,
  alt
}: IItemLinkProps) => {
  return (
    <div className={`itemlink-container`}>
      <Link
        className={`cursor itemlink ${type ? `itemlink-${type}` : ''}`}
        to={path}
      >
        <Image
          className={`img-${type}`}
          width={width}
          height={height}
          src={image}
          alt={`Image for ${alt}`}
          variant={typeImage}
        />
        {headingProps && <Heading {...headingProps} />}
        {textProps && <Text {...textProps} />}
      </Link>
    </div>
  )
}

export default ItemLink
