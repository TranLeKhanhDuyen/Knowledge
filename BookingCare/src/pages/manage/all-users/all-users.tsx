import { UserForm } from '@components'
import { Heading } from '@components/common'
import { useState } from 'react'

import Card from '@components/Card'
import Pagination from '@components/Pagination'
import TableBody from '@components/Table/TableBody'
import TableCell from '@components/Table/TableCell'
import TableHead, { XTable } from '@components/Table/TableHead'
import TableRow from '@components/Table/TableRow'
import { usePagination } from '@hooks/use-pagination'
import { User } from '@services/models/user'
import './all-users.css'
import { useGetUsers } from './use-get-users'
import UserTableRow from './user-table-row'

const AllUsers = () => {
  const { page, limit, onPageChange } = usePagination()
  const { data, pagination } = useGetUsers({ page, limit })

  const [showEditForm, setShowEditForm] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const handleEdit = (user: User) => {
    setSelectedUser(user)
    setShowEditForm(true)
  }

  const handleDelete = (userId: number) => {}

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

      <Card style={{ overflowX: 'auto' }}>
        <XTable
          style={{
            width: '100%',
            borderBottom: 'solid 1px gray'
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell elType='th'>Name</TableCell>
              <TableCell elType='th'>Job Title</TableCell>
              <TableCell elType='th'>Email</TableCell>
              <TableCell elType='th'>Dob</TableCell>
              <TableCell elType='th'>Gender</TableCell>
              <TableCell elType='th'>Phone number</TableCell>
              <TableCell elType='th'>Address</TableCell>
              <TableCell elType='th' textAlign='center'>
                Role
              </TableCell>
              <TableCell elType='th' />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onEdit={() => {
                  handleEdit(user)
                }}
                onDelete={() => {
                  handleDelete(user.id)
                }}
              />
            ))}
          </TableBody>
        </XTable>
        <div
          style={{
            width: '100%',
            margin: '16px',
            position: 'relative'
          }}
        >
          <Pagination
            page={pagination.currentPage}
            totalPage={pagination.lastPage}
            onPageChange={onPageChange}
          />
        </div>
      </Card>
    </div>
  )
}

export default AllUsers
