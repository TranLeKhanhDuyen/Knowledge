import Input from '@components/common/Input/Input'
import searchIcon from '@assets/icons/ic-search.svg'
import './SearchBar.css'
import { Image } from '@components/common'
import { useState } from 'react'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className='search-container'>
      <Image
        width='15'
        height='15'
        src={searchIcon}
        alt='Search Icon'
        type='square'
      />
      <Input
        placeholder='Enter you keyword ... '
        value={searchValue}
        onChangeValue={handleSearchChange}
        additionalClass='search'
      />
    </div>
  )
}

export default SearchBar
