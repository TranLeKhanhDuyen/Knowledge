import React from 'react';
import './ListHeader.css';

type TListHeader = 'specialist' | 'facilities' | 'outstanding' | 'handbook';

interface IItemHeader {
  title: string;
  onClick?: () => void;
}

export interface IListHeader {
  items: IItemHeader[];
  type: TListHeader;
}

const ItemHeader = ({ items, type }: IListHeader) => {
  return (
    <div className={`item-header-container container ${type}`}>
      {items.map((item) => (
        <>
          <h3 className='text-bold text-xl'>{item.title}</h3>
          <a className={` text-xl item-header-wrapper`} onClick={item.onClick}>
            <p className='btn-primary'>see more</p>
          </a>
        </>
      ))}
    </div>
  );
};

export default ItemHeader;