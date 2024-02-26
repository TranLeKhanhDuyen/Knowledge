import React from 'react';
import './ItemOutstanding.css';

type TItemOutstanding = 'doctor';

interface IItemOutstanding {
  imagePath: string;
  title: string;
  describe: string;

  onClick?: () => void;
}

interface ListOutstanding {
  items: IItemOutstanding[];
  type: TItemOutstanding;
}

const ItemOutstanding = ({ items, type }: ListOutstanding) => {
  return (
    <div className='outstanding-container'>
      <div className='outstanding-wrapper'>
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
