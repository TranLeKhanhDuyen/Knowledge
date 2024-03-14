import Slider from 'react-slick';
import './ItemLink.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

type TItemLink = 'service' | 'specialist' | 'facilities';

export interface IItemLink {
  imagePath: string;
  title: string;
  onClick?: () => void;
}

export interface IListLink {
  items: IItemLink[];
  type: TItemLink;
}

const ItemLink = ({ items, type }: IListLink) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4
  }

  if (type === 'service') {
    return (
      <div className={`container item-link-wrapper ${type}`}>
        {items.map((item) => (
          <a className={`cursor item-link-container`} onClick={item.onClick}>
            <img
              className='img-link'
              src={item.imagePath}
              alt={`Image for ${item.title}`}
            />
            <p className='text-bold text-xl title-link'>{item.title}</p>
          </a>
        ))}
      </div>
    )
  }

  if (type === 'specialist' || type === 'facilities') {
    return (
      <Slider  {...settings} className={`container item-link-wrapper ${type}`}>
        {items.map((item) => (
          <div className='item-link-slider'>
            <a className={`cursor item-link-container`} onClick={item.onClick}>
              <img
                className='img-link'
                src={item.imagePath}
                alt={`Image for ${item.title}`}
              />
              <p className='text-bold text-xl title-link'>{item.title}</p>
            </a>
          </div>
        ))}
      </Slider>
    );
  };

}
export default ItemLink;
