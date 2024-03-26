import { Table } from '@components'
import { Heading } from '@components/common'
import { ALL_USERS, IUser } from '@mockdata'
import './allusers.css'

const AllUsers = () => {
  const columnTitles = {
    id: 'ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    address: 'Address'
  }

  const usersData = ALL_USERS.map((user: IUser) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address
  }))

  return (
    <div className='user-manager-container'>
      <Heading variant='h1' content='ALL USERS' />
      <Table data={{ rows: usersData }} columnTitles={columnTitles} />
    </div>
  )
}

export default AllUsers
