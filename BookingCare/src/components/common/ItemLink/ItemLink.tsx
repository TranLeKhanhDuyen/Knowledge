import './ItemLink.css'
import Image, { TImageVariant } from '../Image/Image';
import img1 from '@assets/facilities/cho-ray.jpg'

export type TItemLinkSize = 'small' | 'medium' | 'large';
export type TItemLinkVariant = 'primary' | 'secondary';

export interface IItemLinkProps {
  title?: string;
  size?: TItemLinkSize;
  variant?: TItemLinkVariant;
  description?: string;
  image?: string;
  onClick?: () => void;
}

const ItemLink = ({
  title = 'Title',
  size = 'medium',
  variant = 'primary',
  description = 'Description',
  image = img1,
  onClick
}: IItemLinkProps) => {
  return (
    <a
      className={`itemlink itemlink-${size} itemlink-${variant}`}
      onClick={onClick}
    >
      <Image
        variant={variant as TImageVariant}
        src={image}
        alt={`Image for ${title}`}
      />
      <h4 className='text-bold text-xl title-link'>{title}</h4>
      <p>{description}</p>
    </a>
  )
}

export default ItemLink
