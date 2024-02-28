import './Footer.css';

interface IFooter {
  title: string;
  link: string;
  imagePath: string;
  onClick?: () => void;
}

export interface IListFooter {
  items: IFooter[];
}

const Footer = ({ items }: IListFooter) => {
  return (
    <footer className='footer-container'>
      <div className='container footer-wrapper'>
        <span className='text-turquoise-light copy-right'>
          &copy; 2024 BookingCare
        </span>
        <div className='list-link-footer'>
          {items.map((item) => (
            <a
              target='blank'
              href={item.link}
              className={`item-footer`}
              onClick={item.onClick}
            >
              <img
                className='img-footer'
                src={item.imagePath}
                alt={`Image for ${item.title}`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
