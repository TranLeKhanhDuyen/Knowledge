import React from 'react';
import './PageLink.css';

export interface IPageLinkSecondaryItem {
  title: string;
  imagePath: string;
}

interface IPageLink {
  items: IPageLinkSecondaryItem[];
}

const PageLink = ({ items }: IPageLink) => {
  return (
    <div className='link-secondary-container'>
      {items.map((item) => (
        <a className='link-secondary'>
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
