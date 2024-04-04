import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Headermanage from './header/header'

const Manage = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value
    setSelectedOption(optionValue)
    switch (optionValue) {
      case '':
        return navigate('/manage')
      case 'Tất cả người dùng':
        return navigate('/manage/all-users')
      case 'Tạo người dùng':
        return navigate('/manage/create-users')
      case 'Danh sách bệnh nhân':
        // check role of user
        const user = JSON.parse(localStorage.getItem('user') || '{}')
        if (user.role === 'admin') {
          return navigate('/manage')
        } else {
          return navigate('/manage/all-users')
        }
      default:
    }
  }

  return (
    <>
      <Headermanage
        onSelectOption={handleSelectOption}
        selectedOption={selectedOption}
      />
      <Outlet />
    </>
  )
}

export default Manage
