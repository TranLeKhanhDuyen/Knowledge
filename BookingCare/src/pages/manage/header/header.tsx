import OptionList from '@components/common/Options/Options'
import './header.css'

interface IHeadermanageProps {
  onSelectOption: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedOption: string
}

const Headermanage = ({
  onSelectOption,
  selectedOption
}: IHeadermanageProps) => {
  const handleLogout = () => {
    alert('Logout Success')
  }

  return (
    <header className='header-manage-container'>
      <nav className='text-white header-manage'>
        <div className='nav-left'>
          <OptionList
            className='optionlist'
            items={[
              { id: '1', value: 'Tất cả người dùng' },
              { id: '2', value: 'Tạo người dùng' }
            ]}
            onChange={onSelectOption}
            value={selectedOption}
          />
        </div>
        <div className='nav-right'>
          <span>Welcome User</span>
          <button
            className='cursor logout-manage'
            onClick={handleLogout}
          ></button>
        </div>
      </nav>
    </header>
  )
}

export default Headermanage
