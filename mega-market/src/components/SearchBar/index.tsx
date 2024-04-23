import '@components/SearchBar/SearchBar.css'

import searchIcon from '@assets/images/icons/search.svg'
import listIcon from '@assets/images/icons/list.svg'
import TextField from '@components/TextField'

interface ISearchBarProps {
  icon?: string
  placeholder?: string
  iconLeft?: string
  iconRight?: string
  onChange?: (value: string) => void
  onClose?: () => void
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
