import React from 'react';
// import './PageLink.css';
type TItemLink = 'service' | 'specialist' | 'facilities';
interface ItemLink {
  imagePath: string;
  title: string;
  onClick?: () => void;
}

interface ListLink {
  items: ItemLink[];
  type: TItemLink;
}

const PageLink = ({ items, type }: ListLink) => {
  return (
    <div>
      {items.map((item) => (
        <a className={`abc ${type}`} onClick={item.onClick}>
          <img
            className='img-link-secondary'
            src={item.imagePath}
            alt={`Image for ${item.title}`}
          />
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default PageLink;
