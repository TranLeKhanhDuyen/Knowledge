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
    <div>
      {items.map((item) => (
        <a className={`item-link-container ${type}`} onClick={item.onClick}>
          <img
            className='img-link'
            src={item.imagePath}
            alt={`Image for ${item.title}`}
          />
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default ItemLink;
