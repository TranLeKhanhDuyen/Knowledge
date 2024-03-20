import './ItemLink.css'
import Image from '@components/common/Image/Image';
import img1 from '@assets/facilities/cho-ray.jpg'

export type TItemLinkSize = 'small' | 'medium' | 'large';
export type TItemLinkVariant = 'primary' | 'secondary' | 'tertiary';
export type TItemLinkType = 'service' | 'specialist' | 'facilities' | 'doctor' | 'handbook';

export interface IItemLinkProps {
  title?: string;
  size?: TItemLinkSize;
  variant?: TItemLinkVariant;
  description?: string;
  image?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const ItemLink = ({
  title = 'Title',
  size = 'small',
  variant = 'primary',
  width = '100%',
  height = 'auto',
  description = '',
  image = img1,
  onClick
}: IItemLinkProps) => {
  return (
    <a
      className={`cursor itemlink itemlink-${size} itemlink-${variant}`}
      onClick={onClick}
    >
      <Image
        width={width}
        height={height}
        src={image}
        alt={`Image for ${title}`}
      />
      <h4 className='text-bold text-xl title-link'>{title}</h4>
      <p>{description}</p>
    </a>
  )
}

export default ItemLink
