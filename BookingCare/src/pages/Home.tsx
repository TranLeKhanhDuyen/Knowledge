import { LIST_NAV } from "@mockdata";
import './home.css'
import { CustomSlider, Header } from "@components";

const HomePage = () => {
  return (
    <>
      <header className="container">
        <Header items={LIST_NAV.items} />
      </header>
      <main className="banner">
        <CustomSlider items={LIST_NAV.items} />
      </main>
      <div>
      </div>
    </>
  );
};

export default HomePage;
