import '@components/Banner/Banner.css';

export interface IBannerItem {
  title: string;
  textField: string;
}

const Banner = ({ title, textField }: IBannerItem) => {
  return (
    <div className='banner'>
      <h1 className='text-5xl text-bold banner-title text-turquoise-light'>{title}</h1>
      <div className='search'>
        <span className='search-icon'></span>
        <input className='search-input' type='text' placeholder={textField} />
      </div>
    </div>
  );
};

export default Banner;
