import { IItemLinkProps } from '@types';
import './ItemLink.css'
import Image, { TImageVariant } from '../Image/Image';

export type TItemLinkSize = 'small' | 'medium' | 'large';
export type TItemLinkVariant = 'primary' | 'secondary';

const ItemLink = ({
  title,
  size,
  variant,
  description,
  image,
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
