import { ChangeEvent } from 'react'
import { ButtonIcon, TextField } from '@components'
import './SearchBar.css'

interface ISearchBarProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  additionalClass?: string
}

const SearchBar = ({ onChange, additionalClass }: ISearchBarProps) => {
  return (
    <article className={`search-container ${additionalClass}`}>
      <div className='input-search'>
        <ButtonIcon icon='search' alt='search icon' />
        <TextField
          isShowLabel={false}
          additionalClass='input-search'
          placeholder='Search essentials, groceries and more...'
          onChange={onChange}
        />
      </div>
      <ButtonIcon icon='list' alt='list icon' />
    </article>
  )
}

export default SearchBar
