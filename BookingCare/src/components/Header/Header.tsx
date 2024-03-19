import './Header.css';
import logo from '../../assets/logo-v3.png';
import { Image, ItemNav } from "@components/common";

export interface IHeaderProps {
  items: {
    id: string;
    title: string;
    subsTitle: string;
  }[];
}

const Header = ({ items }: IHeaderProps) => {
  return (
    <header className="header">
      <Image
        src={logo}
        width='200'
        height='43'
        alt={'logo'}
      />
      <nav className="navbar">
        {items.map((item) => (
          <ItemNav
            key={item.id}
            title={item.title}
            subsTitle={item.subsTitle}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;
