import React from 'react';
import PlaceImage from './PlaceImage';

interface PlaceProps {
  place: {
    id: number;
    name: string;
    description: string;
    imageId: string;
  };
}

export default function Place({ place }: PlaceProps) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}
