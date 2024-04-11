import { Button } from '@components/common'
import { getDetailPatient } from '@services/patientService'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './PatientForm.css'

interface IPatientFormProps {
  onSubmit: (formData: FormData) => void
  onClose?: () => void
  mode?: any
  heading?: string
  isEdit?: boolean
  dataEdit?: any
}

const PatientForm = ({
  onClose,
  mode,
  onSubmit: handleSubmitProps,
  isEdit,
  dataEdit
}: IPatientFormProps) => {
  const { register, handleSubmit, setValue } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    if (!dataEdit) return
    getDetailPatient(dataEdit?.id, {}).then((res) => {
      setValue('fullName', res.data.fullName)
      setValue('phoneNumber', res.data.phoneNumber)
      setValue('email', res.data)
      setValue('dob', res.data)
      setValue('status', res.status)
    })
  }, [isEdit, dataEdit, setValue])

  const onSubmit = (data: any) => {
    handleSubmitProps({ ...data })
  }

  return (
    <form className='container' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-create-user'>
        <div>
          <label htmlFor='fullName'>Họ và tên</label>
          <input
            type='text'
            placeholder='Họ'
            required
            {...register('fullName')}
            id='fullName'
          />
        </div>
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
        <div>
          <label htmlFor='phoneNumber'>Số điện thoại liên hệ</label>
          <input
            type='number'
            placeholder='Số điện thoại liên hệ'
            {...register('phoneNumber')}
            required
            id='phoneNumber'
          />
        </div>
        <div>
          <label htmlFor='dob'>Ngày sinh</label>
          <input type='date' {...register('dob')} required id='dob' />
        </div>
        <div>
          <label htmlFor='status'>Trạng thái</label>
          <select {...register('status')} defaultValue={1}>
            <option value={1}>Xác nhận</option>
            <option value={2}>Hủy bỏ</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'center',
          gap: '10px',
          margin: '20px auto'
        }}
      >
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
      </div>
    </form>
  )
}

export default PatientForm
