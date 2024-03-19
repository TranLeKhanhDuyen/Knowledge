import { LIST_NAV } from "@mockdata";
import './home.css'
import Header from "@components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header items={LIST_NAV.items} />
    </>
  );
};

export default HomePage;
