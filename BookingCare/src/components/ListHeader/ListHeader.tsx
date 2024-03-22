import { Button } from "@components/common"
import './ListHeader.css'
import Text from "@components/common/Text/Text";
import { TItemLinkType } from "@components/ItemLink/ItemLink";

type TListHeaderType = TItemLinkType

export interface IItemHeaderProps {
  text: string;
  onClick?: () => void;
  type?: TListHeaderType;

}

const ListHeader = ({ text, type }: IItemHeaderProps) => {
  const handleClick = () => {
    alert("click ok");
  }

  return (
    <div className={`container item-header-container ${type}`}>
      <>
        <Text title={text} />
        <Button title='See more' onClick={handleClick} />
      </>
    </div>
  );
}

export default ListHeader
