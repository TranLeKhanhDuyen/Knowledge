import { LIST_NAV } from "@mockdata";
import './home.css'
import { CustomSlider, Header, ItemLink } from "@components";
import { LIST_LINKS } from "@mockdata/listLinks";
import { LIST_HEADER } from "@mockdata/listHeader";
import { Label } from "@components/common";
import ListHeader from "@components/ListHeader/ListHeader";

const HomePage = () => {
  return (
    <>
      <header className="container">
        <Header items={LIST_NAV.items} />
      </header>
      <main>
        <div className="container banner">
          <CustomSlider
            items={LIST_LINKS.banner}
            types="banner"
          />
        </div>
        <span className="container">
          <Label text='service' />
        </span>
        <div className=" list-secondary">
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
        <div className="container">
          <ListHeader items={LIST_HEADER[0].items} type="specialist" />
          <CustomSlider items={LIST_LINKS.specialist} types="specialist" />
          <ListHeader items={LIST_HEADER[1].items} type="facilities" />
        </div>

      </main>
      <div>
      </div>
    </>
  );
};

export default HomePage;
