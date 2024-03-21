import './ItemLink.css'
import Image, { TImage } from '@components/common/Image/Image';
import img1 from '@assets/facilities/cho-ray.jpg'
import Text from '@components/common/Text/Text';


export type TItemLinkType =
  | 'banner'
  | 'service'
  | 'specialist'
  | 'facilities'
  | 'doctor'
  | 'handbook'
  | 'media'
  | 'icon';

export interface IItemLinkProps {
  title?: string;
  subsTitle?: string;
  type?: TItemLinkType;
  description?: string;
  image?: string;
  width?: string;
  height?: string;
  typeImage?: TImage;
  onClick?: () => void;
}

const ItemLink = ({
  title,
  subsTitle,
  type,
  width,
  height,
  description,
  image = img1,
  typeImage,
  onClick
}: IItemLinkProps) => {
  return (
    <div className={`itemlink-container`}>
      <a
        className={`cursor itemlink ${type ? `itemlink-${type}` : ''}`}
        onClick={onClick}
      >
        <Image
          width={width}
          height={height}
          src={image}
          alt={`Image for ${title}`}
          type={typeImage}
        />
        <Text
          title={title}
          subsTitle={subsTitle}
          description={description}

        />
      </a>
    </div>
  )
}

export default ItemLink
