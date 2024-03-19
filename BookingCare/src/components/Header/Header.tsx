import './Header.css';
import logo from '@assets/logo-v3.png';
import supportIcon from '@assets/icons/ic-support.svg'
import { Image, ItemLink, ItemNav } from "@components/common";

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
      <ItemLink
        variant='tertiary'
        width='30'
        height='30'
        image={supportIcon}
        title='Support'
      />
    </header>
  );
}

export default Header;
