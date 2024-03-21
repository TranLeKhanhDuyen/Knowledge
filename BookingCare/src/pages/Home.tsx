import { LIST_NAV } from "@mockdata";
import './home.css'
import { CustomSlider, Header, ItemLink } from "@components";
import { LIST_LINKS } from "@mockdata/listLinks";
import { LIST_HEADER } from "@mockdata/listHeader";
import ListHeader from "@components/ListHeader/ListHeader";
import EmbedVideo from "@components/EmbedVideo/EmbedVideo";
import Text from "@components/common/Text/Text";

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

        <div className="container">
          <Text title='Service' />
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
        <div className="container">
          <ListHeader items={LIST_HEADER[0].items} type="specialist" />
          <CustomSlider items={LIST_LINKS.specialist} types="specialist" />
          <ListHeader items={LIST_HEADER[1].items} type="facilities" />
          <CustomSlider items={LIST_LINKS.facilities} types="facilities" />
          <ListHeader items={LIST_HEADER[1].items} type="doctor" />
          <CustomSlider items={LIST_LINKS.doctor} types="doctor" />
        </div>

        <div className="media">
          <h3 className="text-5xl media-title">
            <Text title='MEDIA TALK ABOUT BOOKINGCARE' />
          </h3>
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
                  variant={item.variant}
                />
              ))}
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <Text title="hhu" />
          </div>
        </footer>
      </main>
      <div>
      </div>
    </>
  );
};

export default HomePage;
