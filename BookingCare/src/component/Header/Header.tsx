import Image from "@component/common/Image/Image";
import ItemNav from "@component/common/ItemNav/ItemNav";
import { IHeaderProps } from "@types";
import './Header.css'

const Header = ({ header }: IHeaderProps) => {
  const { width, height, image, alt, items } = header;

  return (
    <header className="header">
      <Image
        width={width}
        height={height}
        src={image}
        alt={alt}
      />
      <nav className="navbar">
      {items.map((item, index) => (
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
