import Input, { IInputProps } from '@components/common/Input/Input'
import searchIcon from '@assets/icons/ic-search.svg'
import './SearchBar.css'
import { Image } from "@components/common"

const SearchBar = ({ value, onChange }: IInputProps) => {
  return (
    <div className='search-container'>
      <Input
        variant="search"
        placeholder="Enter you keyword ... "
        value={value}
        onChange={onChange}
      />
      <Image
        variant="rectangular"
        width='10'
        height='10'
        src={searchIcon}
        alt="Search Icon"
      />
    </div>
  )
}

export default SearchBar
