import React, { useState } from 'react'
import { Form, AvatarUpload } from '@components'
import { Button, Input, OptionList } from '@components/common'
import './UserForm.css'

interface IUserFormProps {
  onSubmit: (formData: FormData) => void
  onClose?: () => void
  mode?: any
}

const UserForm = ({ onSubmit, onClose, mode, ...props }: IUserFormProps) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [avatar, setAvatar] = useState<File | null>(null)
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('phoneNumber', phoneNumber)
    formData.append('address', address)
    formData.append('gender', gender)
    formData.append('password', password)
    formData.append('birthday', birthday)
    formData.append('avatar', avatar as File)

    onSubmit(formData)
  }

  return (
    <Form
      {...props}
      onSubmit={handleSubmit}
      className='container form-create-user'
      method='POST'
      encType='multipart/form-data'
    >
      <div>
        <label htmlFor='lastName'>Họ</label>
        <Input
          type='text'
          placeholder='Họ'
          value={lastName}
          onChangeValue={setLastName}
          required
          id='lastName'
        />
      </div>
      <div>
        <label htmlFor='firstName'>Tên</label>
        <Input
          type='text'
          placeholder='Tên'
          value={firstName}
          onChangeValue={setFirstName}
          required
          id='firstName'
        />
      </div>
      <div>
        <label htmlFor='email'>Nhập Email</label>
        <Input
          type='email'
          placeholder='Nhập Email'
          value={email}
          onChangeValue={setEmail}
          required
          id='email'
        />
      </div>
      <div>
        <label htmlFor='phoneNumber'>Số điện thoại liên hệ</label>
        <Input
          type='number'
          placeholder='Số điện thoại liên hệ'
          value={phoneNumber}
          onChangeValue={setPhoneNumber}
          required
          id='phoneNumber'
        />
      </div>
      <div>
        <label htmlFor='password'>Nhập mật khẩu</label>
        <Input
          type='password'
          placeholder='Nhập mật khẩu'
          value={password}
          onChangeValue={setPassword}
          required
          id='password'
        />
      </div>
      <div>
        <label htmlFor='birthday'>Ngày sinh</label>
        <Input
          type='birthday'
          value={birthday}
          onChangeValue={setBirthday}
          required
          id='birthday'
        />
      </div>
      <div>
        <label htmlFor='address'>Địa chỉ</label>
        <Input
          type='text'
          placeholder='Địa chỉ'
          value={address}
          onChangeValue={setAddress}
          required
          id='address'
        />
      </div>
      <div>
        <label htmlFor='gender'>Giới tính</label>
        <OptionList
          items={[
            { id: '1', value: 'Nam' },
            { id: '2', value: 'Nữ' }
          ]}
          onChange={(event) => setGender(event.target.value)}
          defaultValue='Chọn'
        />
      </div>
      <div>
        <label htmlFor='role'>Phân quyền</label>
        <OptionList
          items={[
            { id: '1', value: 'Bác sĩ' },
            { id: '2', value: 'Bệnh nhân' }
          ]}
          onChange={(event) => setGender(event.target.value)}
          defaultValue='Chọn'
        />
      </div>
      <div>
        <label htmlFor='avatar'>Avatar</label>
        <AvatarUpload onAvatarSelect={setAvatar} />
      </div>

      {mode === 'create' ? (
        <Button variant='secondary' additionalClass='create-user' title='Tạo' />
      ) : (
        <>
          <Button
            variant='secondary'
            additionalClass='update-user'
            title='Cập nhật'
          />
          <Button
            variant='secondary'
            additionalClass='close-form'
            onClick={onClose}
            title='Đóng form'
          />
        </>
      )}
    </Form>
  )
}

export default UserForm
