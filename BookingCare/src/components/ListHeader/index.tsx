import React from 'react';
import './ListHeader.css';

type TListHeader = 'service' | 'facilities' | 'oustanding' | 'handbook';

interface IListHeader {
  title: string;
  onClick?: () => void;
}

interface ListHeader {
  items: IListHeader[];
  type: TListHeader;
}

const ItemHeader = ({ items, type }: ListHeader) => {
  return (
    <div className='item-header-container'>
      {items.map((item) => (
        <>
          <h3>{item.title}</h3>
          <a className={`item-header-wrapper`} onClick={item.onClick}>
            <p className={`${type}`}>see more</p>
          </a>
        </>
      ))}
    </div>
  );
};

export default ItemHeader;
