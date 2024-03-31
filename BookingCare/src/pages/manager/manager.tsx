import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HeaderManager from './header/header'

const Manager = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value
    setSelectedOption(optionValue)
    switch (optionValue) {
      case '':
        return navigate('/manager')
      case 'Tất cả người dùng':
        return navigate('/manager/all-users')
      case 'Tạo người dùng':
        return navigate('/manager/create-users')
      default:
    }
  }

  return (
    <>
      <HeaderManager
        onSelectOption={handleSelectOption}
        selectedOption={selectedOption}
      />
      <Outlet />
    </>
  )
}

export default Manager
