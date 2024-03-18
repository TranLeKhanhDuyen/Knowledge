import React, { useState, useEffect } from "react";
import Image from "@components/common/Image/Image";
import "./Slider.css";

interface ImageData {
  src: string;
  alt: string;
}

interface SliderProps {
  images: ImageData[];
  autoPlay?: boolean;
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoPlay, interval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="prev-btn" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>
      <div className="slider-images">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}

          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
