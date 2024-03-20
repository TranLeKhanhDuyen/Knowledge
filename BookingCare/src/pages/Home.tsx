import { LIST_NAV } from "@mockdata";
import './home.css'
import { CustomSlider, Header } from "@components";
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
      </main>
      <div>
      </div>
    </>
  );
};

export default HomePage;
