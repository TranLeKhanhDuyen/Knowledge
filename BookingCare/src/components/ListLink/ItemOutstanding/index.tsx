import React from 'react';
import './ItemOutstanding.css';

type TItemOutstanding = 'doctor';

interface IItemOutstanding {
  imagePath: string;
  title: string;
  describe: string;

  onClick?: () => void;
}

export interface IListOutstanding {
  items: IItemOutstanding[];
  type: TItemOutstanding;
}

const ItemOutstanding = ({ items, type }: IListOutstanding) => {
  return (
    <div className='outstanding-container'>
      <div className='container outstanding-wrapper'>
        {items.map((item) => (
          <a
            className={`item-oustanding-container ${type}`}
            onClick={item.onClick}
          >
            <img
              className='img-outstanding'
              src={item.imagePath}
              alt={`Image for ${item.title}`}
            />
            <h4>{item.title}</h4>
            <p className='describe-oustainding'>{item.describe}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ItemOutstanding;
