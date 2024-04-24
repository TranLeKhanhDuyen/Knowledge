import '@components/SearchBar/SearchBar.css'

import { TextField } from '@components'
import { listIcon, searchIcon } from '@assets/images'

interface ISearchBarProps {
  placeholder: string
  iconLeft?: string
  iconRight?: string
  onChange?: (value: string) => void
}

const SearchBar = ({
  iconLeft = searchIcon,
  iconRight = listIcon,
  placeholder = 'Search',
  onChange
}: ISearchBarProps) => {
  return (
    <div className='search-container'>
      <TextField
        isShowLabel={false}
        additionalClass='input-search'
        placeholder={placeholder}
        onChange={onChange}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </div>
  )
}

export default SearchBar
