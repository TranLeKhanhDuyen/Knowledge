import { LIST_NAV } from "@mockdata";
import './home.css'
import { CustomSlider, Header, ItemLink } from "@components";
import { LIST_LINKS } from "@mockdata/listLinks";

const HomePage = () => {
  return (
    <>
      <header className="container">
        <Header items={LIST_NAV.items} />
      </header>

      <main>
        <div className="container banner">
          <CustomSlider items={LIST_LINKS.banner} types="banner" />
        </div>

        <div className="container list-secondary">
          {LIST_LINKS.service.map((item) => (
            <ItemLink
              image={item.image}
              title={item.title}
              description={item.description}
              width="56"
              height="56"
              variant="secondary"
            />
          ))}
        </div>
      </main>
      <div>
      </div>
    </>
  );
};

export default HomePage;
