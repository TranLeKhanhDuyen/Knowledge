import './ItemLink.css'
import Image from '@components/common/Image/Image';
import img1 from '@assets/facilities/cho-ray.jpg'

export type TItemLinkVariant = 'primary' | 'secondary' | 'tertiary';
export type TItemLinkType = 'banner' | 'service' | 'specialist' | 'facilities' | 'doctor' | 'handbook' | 'media';

export interface IItemLinkProps {
  title?: string;
  variant?: TItemLinkVariant;
  description?: string;
  image?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const ItemLink = ({
  title,
  variant,
  width = 'fit-content',
  height = 'auto',
  description,
  image = img1,
  onClick
}: IItemLinkProps) => {
  return (
    <a
      className={`cursor itemlink ${variant ? `itemlink-${variant}` : ''}`}
      onClick={onClick}
    >
      <Image
        width={width}
        height={height}
        src={image}
        alt={`Image for ${title}`}
      />
      <div className='content'>
        <h4 className='text-bold text-xl title-link'>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  )
}

export default ItemLink
