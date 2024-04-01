import { OptionList } from '@components/common'
import { UserRole } from '@services/models/user-role'
import './header.css'

interface IHeadermanageProps {
  onSelectOption?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedOption?: string
  role: UserRole
}

const Headermanage = ({
  onSelectOption,
  selectedOption,
  role
}: IHeadermanageProps) => {
  const handleLogout = () => {
    alert('Logout Success')
  }

  console.log('role', role)

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

          {/* {role === UserRole.ADMIN && (
            <OptionList
              className='optionlist'
              items={[
                { id: '1', value: 'Tất cả người dùng' },
                { id: '2', value: 'Tạo người dùng' }
              ]}
              onChange={onSelectOption}
              value={selectedOption}
            />
          )}
          {role === UserRole.DOCTOR && (
            <OptionList
              className='optionlist'
              items={[{ id: '3', value: 'Danh sách lịch hẹn' }]}
              onChange={onSelectOption}
              value={selectedOption}
            />
          )} */}
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
