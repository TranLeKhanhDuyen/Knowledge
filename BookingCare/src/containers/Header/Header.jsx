import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header-container'>
        <div className='header-content'>
          <div className='left-content'>
            <i className='fas fa-bars'></i>
            <div className='header-logo'></div>
          </div>

          <nav className='center-content'>
            <div className='child-content'>
              <b>Specialist</b>
              <p className='subs-title'>Find doctors by specialty</p>
            </div>
            <div className='child-content'>
              <b>Health facilities</b>
              <p className='subs-title'>Choose a hospital or clinic</p>
            </div>
            <div className='child-content'>
              <b>Doctor</b>
              <p className='subs-title'>Choose a doctor</p>
            </div>
            <div className='child-content'>
              <b>Examination package</b>
              <p className='subs-title'>General examination</p>
            </div>
          </nav>

          <div className='right-content'>
            <i className='fa-regular fa-circle-question'></i>
            <p>Support</p>
          </div>
        </div>
      </header>
    );
  }
}
