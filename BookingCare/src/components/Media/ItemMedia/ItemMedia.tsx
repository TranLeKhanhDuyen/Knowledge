import '../Media.css'

export interface IItemMedia {
  title: string;
  imagePath: string;
  link: string;
  onClick?: () => void;
}

export interface IListMedia {
  items: IItemMedia[];
}

const ItemMedia = ({ items }: IListMedia) => {
  return (
    <div className='media-item-container'>
      {items.map((item) => (
        <a
          className="item-link-media"
          onClick={item.onClick}
          href={item.link}
        >
          <img
            className='img-media-link'
            src={item.imagePath}
            alt={`Image for ${item.title}`}
          />
        </a>
      ))}
    </div>
  );
};

export default ItemMedia;
