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
import React from 'react';


const HomePage = () => {
  return (
    <>
      <Header title='' items={LIST_NAV} />
      <Banner title={BANNER[0].title} textField={BANNER[0].textField} />
      <h3 className='container text-bold text-lg'>Comprehensive service</h3>

      {LIST_LINK.map((link, index) => (
        <div key={`link-${index}`}>
          <ItemLink items={link.items} type={link.type} />
          {LIST_HEADER[index] && (
            <>
              <ItemHeader items={LIST_HEADER[index].items} type={LIST_HEADER[index].type} />
              {LIST_HEADER[index].type === 'outstanding' && (
                <ItemOutstanding items={LIST_OUTSTANDING[0].items} type='doctor' />
              )}
            </>
          )}
        </div>
      ))}

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
