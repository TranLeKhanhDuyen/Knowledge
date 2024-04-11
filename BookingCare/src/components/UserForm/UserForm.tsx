import { Button } from '@components/common'
import { getDetailUsers } from '@services/usersService'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './UserForm.css'
import moment from 'moment'

interface IUserFormProps {
  onSubmit: (formData: FormData) => void
  onClose?: () => void
  mode?: any
  heading?: string
  dataEdit?: any
}

const UserForm = ({
  onClose,
  mode,
  onSubmit: handleSubmitProps,
  dataEdit
}: IUserFormProps) => {
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if (!dataEdit) return
    getDetailUsers(dataEdit?.id).then((res: any) => {
      console.log(res)
      setValue('firstName', res['user']['firstName'])
      setValue('lastName', res['user']['lastName'])
      setValue('email', res['user']['email'])
      setValue('phoneNumber', res['user']['phoneNumber'])
      setValue('role', res['user']['role'])
      setValue('address', res['user']['address'])
      setValue('password', res['user']['password'])
      setValue('dob', res['user']['dob'])
      setValue('gender', res['user']['gender'])
    })
  }, [setValue])

  const onSubmit = (data: any) => {
    handleSubmitProps({
      ...data,
      avatar: '',
      role: data.role === 'DOCTOR' ? 'DOCTOR' : 'USER',
      gender: data.gender === 'MALE' ? 'MALE' : 'FEMALE'
    })
  }

  const passwordUI = () => {
    if (mode !== 'create') return
    return (
      <div>
        <label htmlFor='password'>Nhập mật khẩu</label>
        <input
          type='password'
          placeholder='Nhập mật khẩu'
          {...register('password')}
          required
          id='password'
        />
      </div>
    )
  }

  const emailUI = () => {
    if (mode !== 'create') return
    return (
      <div>
        <label htmlFor='email'>Nhập Email</label>
        <input
          type='email'
          placeholder='Nhập Email'
          {...register('email')}
          required
          id='email'
        />
      </div>
    )
  }

  const dayOfBirthUI = () => {
    if (mode === 'create') return (
      <div>
      <label htmlFor='dob'>Ngày sinh</label>
      <input
        type='date'
        {...register('dob')}
        id='dob'
        defaultValue={moment(dataEdit?.dob ?? new Date()).format(
          'YYYY-MM-DD'
        )}
      />
    </div>
    )
    return (
      <div>
        <label htmlFor='dob'>Ngày sinh</label>
        <input
          type='date'
          id='dob'
          defaultValue={moment(dataEdit?.dob ?? new Date()).format(
            'YYYY-MM-DD'
          )}
        />
      </div>
    )
  }

  return (
    <form
      className='container form-create-user'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor='lastName'>Họ</label>
        <input
          type='text'
          placeholder='Họ'
          required
          {...register('lastName')}
          id='lastName'
        />
      </div>
      <div>
        <label htmlFor='firstName'>Tên</label>
        <input
          type='text'
          placeholder='Tên'
          {...register('firstName')}
          required
          id='firstName'
        />
      </div>

      {emailUI()}
      <div>
        <label htmlFor='phoneNumber'>Số điện thoại liên hệ</label>
        <input
          type='text'
          placeholder='Số điện thoại liên hệ'
          {...register('phoneNumber')}
          required
          id='phoneNumber'
        />
      </div>
      {
        <div>
          <label htmlFor='role'>Chính sửa</label>
          <select {...register('role')} defaultValue={'DOCTOR'}>
            <option value={'DOCTOR'}>Bác sĩ</option>
            <option value={'USER'}>Bệnh nhân</option>
          </select>
        </div>
      }
      {passwordUI()}
      {dayOfBirthUI()}

      <div>
        <label htmlFor='address'>Địa chỉ</label>
        <input
          type='text'
          placeholder='Địa chỉ'
          required
          id='address'
          {...register('address')}
        />
      </div>
      <div>
        <label htmlFor='gender'>Giới tính</label>
        <select {...register('gender')} defaultValue={'FEMALE'}>
          <option value={'MALE'}>Nam</option>
          <option value={'FEMALE'}>Nữ</option>
        </select>
      </div>
      <div>
        <label htmlFor='role'>Phân quyền</label>

        <select {...register('role')} defaultValue={'USER'}>
          <option value={'DOCTOR'}>Bác sĩ</option>
          <option value={'USER'}>Bệnh nhân</option>
        </select>
      </div>
      {mode === 'create' ? (
        <Button
          variant='secondary'
          additionalClass='create-user'
          title='Tạo'
          style={{ padding: '10px' }}
          type='submit'
        />
      ) : (
        <>
          <Button
            variant='primary'
            additionalClass='close-form'
            onClick={() => onClose?.()}
            title='Đóng form'
            style={{ width: '40%' }}
          />
          <Button
            type='submit'
            variant='secondary'
            additionalClass='update-user'
            title='Cập nhật'
            style={{ width: '40%' }}
          />
        </>
      )}
    </form>
  )
}

export default UserForm
