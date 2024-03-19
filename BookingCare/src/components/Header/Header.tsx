import Image from "@components/common/Image/Image";
import ItemNav from "@components/common/ItemNav/ItemNav";
import './Header.css';
import logo from '../../assets/logo-v3.png';

export interface IHeaderProps {
  navbarData: IHeader[];
}

export interface IHeader {
  width?: string;
  height?: string;
  image: string;
  alt?: string;
  items: {
    id: string;
    title: string;
    subtitle: string;
  }[];
}

const Header = ({ navbarData }: IHeaderProps) => {
  return (
    <header className="header">
      <Image
        src={logo || ''}
        alt={'logo'}
      />
      <nav className="navbar">
        {navbarData.map((items) => (
          <ItemNav
            key={items.id}
            title={items.title}
            subsTitle={items.subtitle}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;
