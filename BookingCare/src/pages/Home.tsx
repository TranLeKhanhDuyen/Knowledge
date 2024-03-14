//constans
import {
  BANNER,
  LIST_HEADER,
  LIST_LINK,
  LIST_NAV,
  LIST_OUTSTANDING,
  LIST_FOOTER,
  LIST_MEDIA,
  MEDIA_VIDEO,
  LIST_HANDBOOK
} from '@constants'

//components
import {
  Banner,
  Header,
  ItemLink,
  ItemOutstanding,
  ItemHeader, Footer,
  ItemHanbook, Media
} from '@components';


const HomePage = () => {
  return (
    <>
      <Header title='' items={LIST_NAV} />
      <Banner title={BANNER[0].title} textField={BANNER[0].textField} />
      <h3 className='container text-bold text-lg'>Comprehensive service</h3>
      <ItemLink items={LIST_LINK[0].items} type='service' />
      <ItemHeader items={LIST_HEADER[0].items} type='specialist' />
      <ItemLink items={LIST_LINK[1].items} type='specialist' />
      <ItemHeader items={LIST_HEADER[1].items} type='facilities' />
      <ItemLink items={LIST_LINK[2].items} type='facilities' />
      <div className='outstanding'>
        <ItemHeader items={LIST_HEADER[2].items} type='outstanding' />
        <ItemOutstanding items={LIST_OUTSTANDING[0].items} type='doctor' />
      </div>
      <ItemHeader items={LIST_HEADER[3].items} type='handbook' />
      <ItemHanbook items={LIST_HANDBOOK[0].items} type='handbook' />
      <Media
        title={MEDIA_VIDEO[0].title}
        link={MEDIA_VIDEO[0].link}
        items={LIST_MEDIA[0].items}
      />
      <Footer items={LIST_FOOTER.items} />
    </>
  );
};

export default HomePage;
