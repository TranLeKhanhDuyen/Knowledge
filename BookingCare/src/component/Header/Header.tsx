import Image from "@component/common/Image/Image";
import ItemNav from "@component/common/ItemNav/ItemNav";
import { IHeaderProps } from "@types";
import './Header.css'

const Header = ({ navbarData }: IHeaderProps) => {

  return (
    <header className="header">
      <Image
        width={200}
        height={43}
        src={navbarData.image}
        alt={navbarData.alt}
      />
      <nav className="navbar">
        {navbarData.items.map((item) => (
          <ItemNav
            key={item.id}
            title={item.title}
            subsTitle={item.subtitle}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;
