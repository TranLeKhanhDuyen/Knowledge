import React from 'react';
import './ItemHandbook.css';

type TItemHandbook = 'handbook';

interface IItemHandbook {
  imagePath: string;
  title: string;
  onClick?: () => void;
}

interface ListHandbook {
  items: IItemHandbook[];
  type: TItemHandbook;
}

const ItemHanbook = ({ items, type }: ListHandbook) => {
  return (
    <div className='handbook-container'>
      {items.map((item) => (
        <a className={`item-handbook-container ${type}`} onClick={item.onClick}>
          <img
            className='img-handbook'
            src={item.imagePath}
            alt={`Image for ${item.title}`}
          />
          <h4>{item.title}</h4>
        </a>
      ))}
    </div>
  );
};

export default ItemHanbook;
