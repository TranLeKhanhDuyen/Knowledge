import ItemMedia, { IItemMedia } from './ItemMedia';
import './Media.css';
import { MediaVideo } from './Video';

export interface IMedia {
  title: string;
  link: string;
  items: IItemMedia[];
}

const Media = ({ title, link, items }: IMedia) => {
  return (
    <div className='media-container'>
      <h3 className='text-bold text-5xl media-title'>
        Media talks about BookingCare
      </h3>
      <div className='container media-wrapper'>
        <MediaVideo title={title} link={link} />
        <ItemMedia items={items} />
      </div>
    </div>
  );
};

export default Media;
