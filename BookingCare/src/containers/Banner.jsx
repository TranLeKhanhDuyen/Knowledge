import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <h1 className='banner-title'> HEALTHCARE MEDICAL FOUNDATION </h1>
      <div className='search'>
        <i className='fa-solid fa-magnifying-glass search-icon'></i>
        <input
          className='search-input'
          type='text'
          placeholder='Find a medical specialist'
        />
      </div>
    </div>
  );
};

export default Banner;
