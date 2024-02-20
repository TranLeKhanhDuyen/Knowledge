import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div className='header-content'>
          <div class='header-content'>
            <div className='left-content'>
              <i className='fa-solid fa-bars'></i>
              <div className='header-logo'></div>
            </div>
            <div className='center-content'></div>
            <div className='right-content'></div>
          </div>
        </div>
      </div>
    );
  }
}
