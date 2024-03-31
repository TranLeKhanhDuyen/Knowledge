import { useEffect, useState } from 'react'
import { Table, UserForm } from '@components'
import { Heading } from '@components/common'
import { ALL_USERS, IUser } from '@mockdata'
import { getAllUsers } from '@services/userService'

import './allusers.css'

const AllUsers = () => {
  const [arrUsers, setArrUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers('ALL')
        if (response && response.data && response.data.errCode === 0) {
          setArrUsers(response.data.users)
          console.log('check state user: ', response.data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const columnTitles = {
    id: 'ID',
    lastName: 'Họ',
    firstName: 'Tên',
    email: 'Email',
    address: 'Địa chỉ',
    gender: 'Giới tính',
    phoneNumber: 'Số điện thoại',
    birthday: 'Ngày sinh',
    action: 'Chỉnh sửa'
  }

  const usersData = ALL_USERS.map((user: IUser) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
    birthday: user.birthday
  }))

  const [showEditForm, setShowEditForm] = useState(false)
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null)

  const handleEdit = (user: IUser) => {
    setSelectedUser(user)
    setShowEditForm(true)
  }

  const handleCloseForm = () => {
    setShowEditForm(false)
  }

  const handleSubmit = (formData: FormData) => {
    console.log('Submitted form data:', formData)
    setShowEditForm(false)
  }

  return (
    <div className=' container user-manage-container'>
      <Heading
        variant='h1'
        content='TẤT CẢ NGƯỜI DÙNG'
        className='text-3xl text-turquoise'
        style={{
          margin: '30px 0',
          textAlign: 'center',
          color: 'var(--turquoise-color)',
          fontSize: 'var(--font-3xl)'
        }}
      />
      <Table
        data={{ rows: usersData }}
        columnTitles={columnTitles}
        onEdit={handleEdit}
      />

      {showEditForm && (
        <div className='overlay'>
          <div className='form-container'>
            <Heading
              className='user-form'
              variant='h2'
              content='CẬP NHẬT THÔNG TIN'
            />
            <UserForm
              onSubmit={handleSubmit}
              onClose={handleCloseForm}
              mode='update'
              heading='Cập nhật thông tin'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AllUsers
