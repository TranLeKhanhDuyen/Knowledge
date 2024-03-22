import './Header.css';
import logo from '@assets/logo-v3.png';
import SearchBar from '@components/SearchBar/SearchBar';
import { Image } from '@components/common';
import ItemLink from '@components/ItemLink/ItemLink';
import Text from '@components/common/Text/Text';

export interface IHeaderProps {
  items: {
    id: string;
    title: string;
    subsTitle: string;
  }[];
  icon?: string
}

const Header = ({
  items,
  icon
}: IHeaderProps) => {
  const handleSearchChange = () => { };

  return (
    <header className="header">
      <div className='container header-container'>
        <Image
          src={logo}
          width='200'
          height='43'
          alt={'logo'}
        />
        <nav className="navbar">
          {items.map((item) => (
            <Text
              key={item.id}
              title={item.title}
              subsTitle={item.subsTitle}
              additionalClass="cursor item-nav"
            />
          ))}
        </nav>
        <SearchBar
          onChange={handleSearchChange}
          placeholder='Search'
        />
        <ItemLink
          type='icon'
          width='30'
          height='30'
          image={icon}
          title='Support'
        />
      </div>
    </header>
  );
}

export default Header;
