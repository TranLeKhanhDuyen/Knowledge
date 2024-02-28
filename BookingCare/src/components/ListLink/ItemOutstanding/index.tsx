import React from 'react';
import './ItemOutstanding.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TItemOutstanding = 'doctor';


interface IItemOutstanding {
  imagePath: string;
  title: string;
  describe: string;

  onClick?: () => void;
}

export interface IListOutstanding {
  items: IItemOutstanding[];
  type: TItemOutstanding;
}

const ItemOutstanding = ({ items, type }: IListOutstanding) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }

  return (
    <div className='outstanding-container'>
      <Slider {...settings} className='container outstanding-wrapper'>
        {items.map((item) => (
          <a
            className={`item-oustanding-container ${type}`}
            onClick={item.onClick}
          >
            <img
              className='img-outstanding'
              src={item.imagePath}
              alt={`Image for ${item.title}`}
            />
            <h4 className='text-3xl'>{item.title}</h4>
            <p className='text-xl describe-oustainding'>{item.describe}</p>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default ItemOutstanding;
