import './ItemHandbook.css';
import Slider from 'react-slick';

type TItemHandbook = 'handbook';

interface IItemHandbook {
  imagePath: string;
  title: string;
  onClick?: () => void;
}

export interface IListHandbook {
  items: IItemHandbook[];
  type: TItemHandbook;
}

const ItemHanbook = ({ items, type }: IListHandbook) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <Slider {...settings} className='container handbook-container'>
      {items.map((item) => (
        <a className={`item-handbook-container ${type}`} onClick={item.onClick}>
          <img
            className='img-handbook'
            src={item.imagePath}
            alt={`Image for ${item.title}`}
          />
          <h4 className='text-bold'>{item.title}</h4>
        </a>
      ))}
    </Slider>
  );
};

export default ItemHanbook;
