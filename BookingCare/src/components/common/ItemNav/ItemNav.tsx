import { INavItemProps } from "@types"
import './ItemNav.css'

const ItemNav = ({ title, subsTitle }: INavItemProps) => {
  return (
    <div className="item-nav">
      <p className='text-turquoise-dark text-bold title-nav'>{title}</p>
      <p className='text-dark-gray subs-title-nav'>{subsTitle}</p>
    </div>
  )
}

export default ItemNav