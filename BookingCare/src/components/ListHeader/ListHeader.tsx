import { TItemLinkType } from '@components/ItemLink/ItemLink'
import { Button, Heading } from '@components/common'
import './ListHeader.css'

type TListHeaderType = TItemLinkType

export interface IItemHeaderProps {
  content: string
  onClick?: () => void
  type?: TListHeaderType
}

const ListHeader = ({ content, type }: IItemHeaderProps) => {
  const handleClick = () => {
    alert('click ok')
  }

  return (
    <div className={`container item-header-container ${type}`}>
        <Heading variant='h2' content={content} />
        <Button title='Xem thêm' onClick={handleClick} />
    </div>
  )
}

export default ListHeader
