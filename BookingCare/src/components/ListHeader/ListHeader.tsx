import { Button, Label } from "@components/common"
import './ListHeader.css'

type TListHeadeType = 'specialist' | 'facilities' | 'outstanding' | 'handbook';

interface IItemHeaderProps {
  text: string;
  onClick?: () => void;
}

export interface IListHeaderProps {
  items: IItemHeaderProps[];
  type: TListHeadeType;
}
const ListHeader = ({ items, type }: IListHeaderProps) => {
  const handleClick = () => {
    alert("click ok");
  }

  return (
    <div className={`item-header-container ${type}`}>
      {items.map((item) => (
        <>
          <Label text={item.text} />
          <Button title='See more' onClick={handleClick} />
        </>
      ))}
    </div>
  );
}

export default ListHeader
