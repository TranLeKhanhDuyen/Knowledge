import './EmbedVideo.css';

export interface IEmbedVideo {
  alt: string;
  link: string;
  onClick?: () => void;
}

const EmbedVideo = ({ alt, link, onClick }: IEmbedVideo) => {
  return (
    <div className='embed-video-container' onClick={onClick}>
      <iframe
        className='video-embed'
        src={link}
        title={alt}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedVideo
