import { LIST_NAV } from "@mockdata";
import './home.css'
import { CustomSlider, Header, ItemLink } from "@components";
import { LIST_LINKS } from "@mockdata/listLinks";
import { LIST_HEADER } from "@mockdata/listHeader";
import ListHeader from "@components/ListHeader/ListHeader";
import EmbedVideo from "@components/EmbedVideo/EmbedVideo";
import Text from "@components/common/Text/Text";
import supportIcon from "../assets/icons/ic-support.svg"

const HomePage = () => {
  return (
    <>
      <header>
        <Header items={LIST_NAV.items} icon={supportIcon} />
      </header>
      <main className="main-homepage">
        <div className="container banner">
          <CustomSlider
            items={LIST_LINKS.banner}
            types="banner"
          />
        </div>
        <div className="container">
          <Text title='Service' />
        </div>
        <div className="container list-link">
          {LIST_LINKS.service.map((item) => (
            <ItemLink
              image={item.image}
              title={item.title}
              description={item.description}
              width="56"
              height="56"
              type="service"
            />
          ))}
        </div>
        <ListHeader text={LIST_HEADER.specialist[0].text} type="specialist" />
        <CustomSlider items={LIST_LINKS.specialist} types="specialist" />
        <ListHeader text={LIST_HEADER.facilities[0].text} type="facilities" />
        <CustomSlider items={LIST_LINKS.facilities} types="facilities" />
        <div className="slider-doctor">
          <ListHeader text={LIST_HEADER.doctor[0].text} type="doctor" />
          <CustomSlider items={LIST_LINKS.doctor} types="doctor" typeImage='circle' />
        </div>

        <div className="media">
          <Text title='Media talks about BookingCare' />
          <div className="container media-container">
            <div className="embed-video">
              <EmbedVideo
                link="https://www.youtube.com/embed/FyDQljKtWnI?si=mg6VMSm1mRjSxFhg"
                alt="vtv1"
              />
            </div>
            <div className="list-media">
              {LIST_LINKS.media.map((item) => (
                <ItemLink
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  width="150"
                  height="56"
                  type={item.type}
                />
              ))}
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className=" container footer-container">
            <Text title="@BookingCare 2024" />
            {LIST_LINKS.footer.map((item) => (
              <ItemLink
                image={item.image}
                width="56"
                height="56"

                type={item.type}
              />
            ))}
          </div>
        </footer>
      </main>
      <div>
      </div>
    </>
  );
};

export default HomePage;
