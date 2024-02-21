import React from 'react';
import './Button.css';

export interface IButtonItem {
  title: string;
  onClick?: () => void;
  imagePath: string;
}

interface IButton {
  items: IButtonItem[];
}

const Button = ({ items }: IButton) => {
  return items.map((item) => (
      <button className='btn-secondary' onClick={item.onClick}>
        <img
          className='img-btn-secondary'
          src={item.imagePath}
          alt={`Image for ${item.title}`}
        />
        <p>{item.title}</p>
      </button>
  ));
};

export default Button;
