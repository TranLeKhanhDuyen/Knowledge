import Image from "@components/common/Image/Image";
import ItemNav from "@components/common/ItemNav/ItemNav";
import './Header.css';
import logo from '../../assets/logo-v3.png';

interface IHeaderProps {
  navbarData: {
    id: string,
    title: string,
    subsTitle: string
  }[]
}

const Header = ({ navbarData }: IHeaderProps) => {
  return (
    <header className="header">
      <Image
        width={200}
        height={43}
        src={logo || ''}
        alt={'logo'}
      />
      <nav className="navbar">
        {navbarData.map((item) => (
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
