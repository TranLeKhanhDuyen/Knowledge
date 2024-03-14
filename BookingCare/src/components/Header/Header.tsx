import './Header.css';
import Navbar, { INavItem } from './Navbar/Navbar';
import Contact from './Contact/Contact';

interface IHeader {
  title: string;
  items: INavItem[];
}

const Header = ({ title, items }: IHeader) => {
  return (
    <header className='container header-container'>
      <div className='header-content'>

        <span className='header-logo'></span>

        <Navbar items={items} />

        <Contact title={title} />
      </div>
    </header>
  );
};

export default Header;
