import '@components/SearchBar/SearchBar.css'
import { ButtonIcon, TextField } from '@components'

interface ISearchBarProps {
  onChange?: (value: string) => void
  additonalClass?: string
}

const SearchBar = ({ onChange, additonalClass }: ISearchBarProps) => {
  return (
    <div className={`search-container ${additonalClass}`}>
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
