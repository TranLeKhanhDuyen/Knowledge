import React from 'react';

import './banner.css';

export interface IBannerItem {
  title: string;
  textField: string;
}

const Banner = ({ title, textField }: IBannerItem) => {
  return (
    <div className='banner'>
      <h1 className='banner-title'>{title}</h1>
      <div className='search'>
        <span className='search-icon'></span>
        <input className='search-input' type='text' placeholder={textField} />
      </div>
    </div>
  );
};

export default Banner;
