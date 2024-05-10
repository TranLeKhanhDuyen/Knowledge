import React from 'react';
import { places } from './data';
import Place from './Place';

export default function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));

  return <ul>{listItems}</ul>;
}
