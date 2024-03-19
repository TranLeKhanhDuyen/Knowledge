import { ItemLink } from '@components/common';
import { IItemLinkProps } from '@components/common/ItemLink/ItemLink';
import  { useEffect, useState } from 'react';
import Slider from 'react-slick';

interface ISliderProps {
  items: IItemLinkProps[];
}

const CustomSlider = ({ items }: ISliderProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [items]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider key={key} {...settings}>
        {items.map((item, id) => (
          <div key={id}>
            <ItemLink {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
