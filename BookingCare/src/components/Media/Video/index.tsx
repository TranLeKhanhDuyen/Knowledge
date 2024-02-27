import '../Media.css'

export interface IVideoMedia {
  title: string;
  link: string;
  onClick?: () => void;
}

export const MediaVideo = ({ title, link, onClick }: IVideoMedia) => {
  return (
      <div className='content-left' onClick={onClick}>
          <iframe
            className='video-embed'
            src={link}
            title={title}
            allowFullScreen
          ></iframe>
      </div>

  );
};
