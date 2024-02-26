import React from 'react';

export interface INavItem {
  title: string;
  subsTitle: string;
  navigation?: () => void;
}

interface INavbar {
  items: INavItem[];
}

const Navbar = ({ items }: INavbar) => {
  return items.map((item) => (
    <nav className='center-content' onClick={item.navigation}>
      <div className='child-content'>
        <b>{item.title}</b>
        <p className='subs-title'>{item.subsTitle}</p>
      </div>
    </nav>
  ));
};

export default Navbar;
