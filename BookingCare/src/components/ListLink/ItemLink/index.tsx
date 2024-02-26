import './ItemLink.css'

type TItemLink = 'service' | 'specialist' | 'facilities';

export interface IItemLink {
  imagePath: string;
  title: string;
  onClick?: () => void;
}

export interface IListLink {
  items: IItemLink[];
  type: TItemLink;
}

const ItemLink = ({ items, type }: IListLink) => {
  return (
    <div className={`item-link-wrapper ${type}`}>
      {items.map((item) => (
        <a className={`item-link-container`} onClick={item.onClick}>
          <img
            className='img-link'
            src={item.imagePath}
            alt={`Image for ${item.title}`}
          />
          <p className='title-link'>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default ItemLink;
