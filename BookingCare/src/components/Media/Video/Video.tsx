import '../Media.css';

export interface IVideoMedia {
  title: string;
  link: string;
  onClick?: () => void;
}

const MediaVideo = ({ title, link, onClick }: IVideoMedia) => {
  return (
    <div className='media-video-container' onClick={onClick}>
      <iframe
        className='video-embed'
        src={link}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MediaVideo
