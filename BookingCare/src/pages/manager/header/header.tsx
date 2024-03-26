import OptionList from '@components/common/Options/Options'
import './header.css'

interface IHeaderManagerProps {
  onSelectOption: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedOption: string
}

const HeaderManager = ({
  onSelectOption,
  selectedOption
}: IHeaderManagerProps) => {
  const handleLogout = () => {
    alert('Logout Success')
  }

  return (
    <header className='header-manager-container'>
      <nav className='text-white header-manager'>
        <div className='nav-left'>
          <OptionList
            className='optionlist'
            items={[
              { id: '1', value: 'All User' },
              { id: '2', value: 'Create User' },
              { id: '3', value: 'Manage Doctor' },
              { id: '4', value: 'Manage Admin' }
            ]}
            onChange={onSelectOption}
            value={selectedOption}
          />
        </div>
        <div className='nav-right'>
          <span>Welcome User</span>
          <button
            className='cursor logout-manager'
            onClick={handleLogout}
          ></button>
        </div>
      </nav>
    </header>
  )
}

export default HeaderManager
