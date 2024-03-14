export interface INavItem {
  title: string;
  subsTitle: string;
  navigation?: () => void;
}

interface INavbar {
  items: INavItem[];
}

const Navbar = ({ items }: INavbar) => {
  return items.map((item) => (
    <nav className='center-content' onClick={item.navigation}>
      <div className='cursor child-content'>
        <p className='text-turquoise-dark text-bold'>{item.title}</p>
        <p className=' subs-title text-dark-gray'>{item.subsTitle}</p>
      </div>
    </nav>
  ));
};

export default Navbar;
