import { Button } from "@components/common"
import './ListHeader.css'
import Text from "@components/common/Text/Text";
import { TItemLinkType } from "@components/ItemLink/ItemLink";

type TListHeaderType = TItemLinkType

interface IItemHeaderProps {
  text: string;
  onClick?: () => void;
}

export interface IListHeaderProps {
  items: IItemHeaderProps[];
  type: TListHeaderType;
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
