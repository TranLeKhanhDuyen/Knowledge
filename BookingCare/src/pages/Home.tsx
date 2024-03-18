import { Header } from "@components";
import { LIST_NAV } from "@mockdata";
import './home.css'
import Slider from "react-slick";

const HomePage = () => {
  return (
    <>
      <Header navbarData={LIST_NAV} />
      <Slider />
    </>
  );
};

export default HomePage;
