import ItemLink, { IItemLinkProps } from '@components/ItemLink/ItemLink';
import React, { useState } from 'react';
import './Slider.css'

interface ISliderProps {
  items: IItemLinkProps[];
}

const Slider = ({ items }: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="slide">
            <ItemLink {...item} />
          </div>
        ))}
      </div>
      <button onClick={goToPrevSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slider;
