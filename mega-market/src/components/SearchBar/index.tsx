import '@components/SearchBar/SearchBar.css'
import { ButtonIcon, TextField } from '@components'

interface ISearchBarProps {
  onChange?: (value: string) => void
}

const SearchBar = ({ onChange }: ISearchBarProps) => {
  return (
    <div className='search-container'>
      <ButtonIcon icon='search' alt='search icon' />
      <TextField
        isShowLabel={false}
        additionalClass='input-search'
        placeholder='Search essentials, groceries and more...'
        onChange={onChange}
      />
      <ButtonIcon icon='list' alt='list icon' />
    </div>
  )
}

export default SearchBar
