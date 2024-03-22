import './ItemLink.css'
import Image, { TImage } from '@components/common/Image/Image';
import img1 from '@assets/facilities/cho-ray.jpg'
import Text from '@components/common/Text/Text';
import { useNavigate } from 'react-router-dom';

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
}: IItemLinkProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (type) {
      switch (type) {
        case 'doctor':
          navigate('/doctor');
          break;
        case 'service':
          navigate('/service-page');
          break;
        case 'specialist':
          navigate('/specialist-page');
          break;
        default:
          throw new Error(`Unhandled action type: ${type}`);
      }
    } else {
      console.log("error type")
    }
  };

  return (
    <div className={`itemlink-container`}>
      <a
        className={`cursor itemlink ${type ? `itemlink-${type}` : ''}`}
        onClick={handleOnClick}
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
