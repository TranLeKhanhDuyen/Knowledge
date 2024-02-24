import Banner from '@components/Banner';
import Header from '@components/Header';
import ItemLink from '@components/ListLink/ItemLink';
import { BANNER } from '@constants/banner';
import { LIST_LINK } from '@constants/listLink';
import { LIST_NAV } from '@constants/listNav';

const App = () => {
  return (
    <>
      <Header title="" items={LIST_NAV} />
      <Banner title={BANNER[0].title} textField={BANNER[0].textField} />
      <h3>Comprehensive service</h3>
      <ItemLink items={LIST_LINK[0].items} type="service" />

    </>
  );
};

export default App;
