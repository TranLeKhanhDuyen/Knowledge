import { OptionList } from '@components/common'
import { UserRole } from '@services/models/user-role'
import './header.css'
import { useAuthStore } from '@store/auth-store'

interface IHeaderManageProps {
  onSelectOption: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedOption?: string
  role?: UserRole
}

const HeaderManage = ({
  onSelectOption,
  selectedOption
}: IHeaderManageProps) => {
  const { signOut, user } = useAuthStore()

  const optionsForRole = () => {
    console.log('user?.role')
    console.log(user?.role)
    if (user?.role === UserRole.ADMIN || user?.role === UserRole.SUPER_ADMIN) {
      return [
        { id: '1', value: 'Tất cả người dùng' },
        { id: '2', value: 'Tạo người dùng' }
      ]
    } else if (user?.role === UserRole.DOCTOR) {
      return [{ id: '3', value: 'Danh sách lịch hẹn' }]
    } else {
      return []
    }
  }

  return (
    <header className='header-manage-container'>
      <nav className='text-white header-manage'>
        <div className='nav-left'>
          <OptionList
            className='optionlist'
            items={optionsForRole()}
            onChange={onSelectOption}
            value={selectedOption}
          />
        </div>
        <div className='nav-right'>
          <span>
            Welcome {user?.firstName} {user?.lastName}
          </span>
          <button className='cursor logout-manage' onClick={signOut}></button>
        </div>
      </nav>
    </header>
  )
}

export default HeaderManage
