import { Form } from '@components'
import './create-user.css'
import { Heading, Input } from '@components/common'
import { useState } from 'react'

const CreateUser = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <Heading variant='h1' content='CREATE USER' />
      <Form
        className='form-create-user'
        onSubmit={handleSubmit}
        action='/'
        method='POST'
      >
        <Input
          additionalClass=''
          type='text'
          placeholder='Họ tên bệnh nhân (bắt buộc)'
          value={fullName}
          onChangeValue={(value) => setFullName(value)}
          required
        />
        <Input
          additionalClass=''
          type='number'
          placeholder='Số điện thoại liên hệ (bắt buộc)'
          value={phoneNumber}
          onChangeValue={(value) => setPhoneNumber(value)}
          required
        />
        <Input
          additionalClass=''
          type='date'
          placeholder='Ngày tháng năm sinh'
          value={date}
          onChangeValue={(value) => setDate(value)}
          required
        />
        <Input
          additionalClass=''
          type='text'
          placeholder='Nghề nghiệp'
          value={date}
          onChangeValue={(value) => setDate(value)}
          required
        />
        <Input
          additionalClass=''
          type='email'
          placeholder='Nhập địa chỉ email'
          value={email}
          onChangeValue={(value) => setEmail(value)}
          required
        />
      </Form>
    </>
  )
}

export default CreateUser
