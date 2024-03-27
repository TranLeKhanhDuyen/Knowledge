import React, { useState } from 'react'
import { Button, Heading, Input } from '@components/common'
import OptionList from '@components/common/Options/Options'
import AvatarUpload from '@components/AvatarUploader/AvatarUploader'
import './create-user.css'

const CreateUser = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [avatar, setAvatar] = useState<File | null>(null)
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('email', email)
    formData.append('phoneNumber', phoneNumber)
    formData.append('address', address)
    formData.append('gender', gender)
    formData.append('password', password)
    formData.append('avatar', avatar as File)
  }

  return (
    <>
      <Heading className='allusers' variant='h1' content='TẠO NGƯỜI DÙNG' />
      <form
        className='container form-create-user'
        onSubmit={handleSubmit}
        action='/'
        method='POST'
        encType='multipart/form-data'
      >
        <div>
          <label htmlFor='fullName'>Họ và tên (bắt buộc)</label>
          <Input
            type='text'
            placeholder='Họ và tên (bắt buộc)'
            value={fullName}
            onChangeValue={setFullName}
            required
            id='fullName'
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
          <label htmlFor='phoneNumber'>Số điện thoại liên hệ (bắt buộc)</label>
          <Input
            type='number'
            placeholder='Số điện thoại liên hệ (bắt buộc)'
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
        <Button title='Tạo' variant='secondary' additionalClass='create-user' />
      </form>
    </>
  )
}

export default CreateUser
