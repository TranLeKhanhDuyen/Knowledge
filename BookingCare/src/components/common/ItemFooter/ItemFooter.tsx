import { IItemFooterProps } from "@types"

const ItemFooter = ({ text, link }: IItemFooterProps) => {
  return (
    <>
      <a href={link} className="item-footer">{text}</a>
    </>
  )
}
export default ItemFooter
