export interface IItemFooterProps {
  link?: string;
  text: string;
}

const ItemFooter = ({ text, link }: IItemFooterProps) => (
    <a href={link} className="item-footer">
      <p>{text}</p>
    </a>
)

export default ItemFooter
