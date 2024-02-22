import React from 'react';
import '../ListLink.css'

type TItemLink = 'service' | 'specialist' | 'facilities';

interface IItemLink {
  imagePath: string;
  title: string;
  onClick?: () => void;
}

interface ListLink {
  items: IItemLink[];
  type: TItemLink;
}

const ItemLink = ({ items, type }: ListLink) => {
  return (
    <div>
      {items.map((item) => (
        <a className={`item-link-container ${type}`} onClick={item.onClick}>
          <img
            className='img-link'
            src={item.imagePath}
            alt={`Image for ${item.title}`}
          />
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default ItemLink;
