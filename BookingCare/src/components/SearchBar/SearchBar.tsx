import Input, { IInputProps } from '@components/common/Input/Input'
import searchIcon from '@assets/icons/ic-search.svg'
import './SearchBar.css'
import { Image } from "@components/common"

const SearchBar = ({ value, onChange }: IInputProps) => {
  return (
    <div className='search-container'>
      <Image
        width='15'
        height='15'
        src={searchIcon}
        alt="Search Icon"
        type='square'
      />
      <Input
        variant="search"
        placeholder="Enter you keyword ... "
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar
