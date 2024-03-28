import UserForm from '@components/UserForm/UserForm'
import { Heading } from '@components/common'
import './create-user.css'

const CreateUser = () => {
  const handleSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <>
      <Heading className='allusers' variant='h1' content='TẠO NGƯỜI DÙNG' />
      <UserForm onSubmit={handleSubmit} mode='create'/>
    </>
  )
}

export default CreateUser
