export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  birthday: string
  address: string
  phoneNumber: string
  gender: string
}

const ALL_USERS: IUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    birthday: '1/2/2000',
    address: '123 Main St'
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    birthday: '1/2/2000',
    address: '456 Elm St'
  },
  {
    id: '3',
    firstName: 'Sara',
    lastName: 'Smith',
    email: 'sara@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    birthday: '1/2/2000',
    address: '789 Oak St'
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    birthday: '1/2/2000',
    address: '987 Pine St'
  }
]

export default ALL_USERS
