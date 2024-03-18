import Image from "@component/common/Image/Image";
import ItemNav from "@component/common/ItemNav/ItemNav";
import { IHeaderProps } from "@types";
import './Header.css'

const Header = ({ header }: IHeaderProps) => {

  return (
    <header className="header">
      <Image
        width={200}
        height={43}
        src={header.image}
        alt={header.alt}
      />
      <nav className="navbar">
      {header.items.map((item, index) => (
        <ItemNav
          key={index}
          title={item.title}
          subsTitle={item.subtitle}
        />
      ))}
      </nav>
    </header>
  );
}

export default Header;
