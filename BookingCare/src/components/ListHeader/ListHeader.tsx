import { Button } from "@components/common"
import './ListHeader.css'
import Text from "@components/common/Text/Text";

type TListHeadeType = 'specialist' | 'facilities' | 'doctor' | 'handbook';

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
        <Text title={item.text}/>
          <Button title='See more' onClick={handleClick} />
        </>
      ))}
    </div>
  );
}

export default ListHeader
