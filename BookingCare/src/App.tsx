import Banner from '@components/Banner';
import Header from '@components/Header';
import { BANNER } from '@constants/banner';
import { LIST_NAV } from '@constants/listNav';

const App = () => {
  return (
    <>
       <Header title="ListNav" items={LIST_NAV} />
       <Banner title={BANNER[0].title} textField={BANNER[0].textField}/>
    </>
  );
};

export default App;
