import ItemLink, { IItemLinkProps, TItemLinkType } from '@components/ItemLink/ItemLink';
import './Slider.css'
import { useEffect, useState } from 'react';

interface ISliderProps {
  items: IItemLinkProps[];
  types: TItemLinkType
}



const CustomSlider = ({ types, items }: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (types === 'banner') {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [types, items]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderSliderItems = () => {
    if (types === 'banner') {
      return (
        <div className="slider-items">
          <ItemLink {...items[currentIndex]} />
        </div>
      );
    } else {
      return (
        <div className="slider-items">
          {items.map((item, index) => (
            <ItemLink key={index} {...item} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="slider-container">
      {renderSliderItems()}
      {types !== 'banner' && (
        <div className="slider-controls">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
