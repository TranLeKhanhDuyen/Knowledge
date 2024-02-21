import React from 'react';
import './header.css';
import Navbar, { INavItem } from './Navbar/index';
import Contact from './Contact/index';
import Banner from '@containers/Banner';

interface IHeader {
  title: string;
  items: INavItem[];
}

const Header = ({ title, items }: IHeader) => {
  return (
    <header className='header-container'>
      <div className='header-content'>

        <span className='header-logo'></span>

        <Navbar items={items} />

        <Contact title={title} />
      </div>
    </header>
  );
};

export default Header;
