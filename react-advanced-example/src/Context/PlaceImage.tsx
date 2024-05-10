import React, { useContext } from 'react';
import { getImageUrl } from './utils';
import { ImageSizeContext } from './Context';

interface PlaceImageProps {
  place: {
    id: number;
    name: string;
    description: string;
    imageId: string;
  };
}

export default function PlaceImage({ place }: PlaceImageProps) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
