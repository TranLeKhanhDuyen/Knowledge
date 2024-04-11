import { useState } from 'react'
import supportIcon from '@assets/icons/ic-support.svg'
import { Header } from '@components'
import { Button, Heading, Text } from '@components/common'
import { LIST_NAV, DOCTOR, IDoctor } from '@mockdata'
import { useCreateAppointment } from './use-create-appointment'
import { useGetDoctorDetails } from './use-get-doctor-details'
import Avatar from '@components/Avatar'
import { fCurrency } from '@utils/number-formatter'
import './doctor.css'
import { FormProvider } from '@components/HookFormFields/FormProvider'
import { RHFTextField } from '@components/HookFormFields/RHFTextField'
import { hashCode, randomAvatar } from '@components/Avatar/random-avatar'

const DoctorDetailPage = () => {
  const [isShowForm, setShowForm] = useState(false)
  const { doctorDetails } = useGetDoctorDetails()

  const toggleForm = () => {
    setShowForm(!isShowForm)
    document.body.classList.toggle('overlay-active')
  }

  return (
    <>
      <Header items={LIST_NAV[0].items} icon={supportIcon} />
      <div className='body-doctor'>
        <div className='container  doctor-container'>
          {/* Doctor summary */}
          <div className='doctor-summary'>
            <Avatar
              alt={doctorDetails?.firstName}
              src={randomAvatar(hashCode(doctorDetails?.email || ''))}
              size={120}
            />
            <div className='doctor-name'>
              <Heading
                content={`${doctorDetails?.firstName} ${doctorDetails?.lastName}`}
                className='heading-doctor'
              />
              <Text
               content={doctorDetails?.title ?? ''}
                className='heading-doctor'
                style={{width: '50%', fontSize: 'var(--font-lg)', lineHeight: '1.5'}}
              />


            </div>
          </div>

          {/* Examination schedule */}
          <div className='examination-schedule'>
            <div className='schedule-time'>
              <Heading content='LỊCH KHÁM' />
              <div className='time-focus'>
                {(DOCTOR.schedule ?? []).map((item: string) => (
                  <Button title={item} onClick={toggleForm} />
                ))}
              </div>
            </div>

            <div className='address-container'>
              <Heading
                content='ĐỊA CHỈ KHÁM'
                style={{ color: 'var(--turquoise-color)' }}
              />
              <Text
                content={doctorDetails?.address ?? ''}
                className='text-address'
                style={{ fontSize: 'var(--font-xl)', margin: '5px' }}
              />
              <Heading
                content='GIÁ KHÁM'
                style={{ color: 'var(--turquoise-color)' }}
              />
              <Text
                content={'Dự kiến: 500.000 VND'}
                className='text-price'
                style={{ fontSize: 'var(--font-xl)', margin: '5px' }}
              />
            </div>
          </div>
          <Text content={doctorDetails?.description ?? ''} />
        </div>
      </div>

      {/* Render form if isShowForm is true */}
      {isShowForm && <BookingForm onCloseForm={toggleForm} />}
    </>
  )
}

const BookingForm = ({ onCloseForm }: { onCloseForm: () => void }) => {
  const { methods, handleCreateAppointment } = useCreateAppointment(onCloseForm)
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods

  return (
    <div className='overlay'>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(handleCreateAppointment)}
      >
        <div className='booking-form'>
          <Heading className='booking' content='ĐẶT LỊCH KHÁM BỆNH' />
          <RHFTextField
            name='fullName'
            label='Họ và tên'
            placeholder='Nhập họ và tên'
          />
          <RHFTextField
            name='phoneNumber'
            label='Số điện thoại'
            placeholder='Nhập số điện thoại'
          />
          <RHFTextField name='email' label='Email' placeholder='Email' />
          <RHFTextField
            name='dob'
            label='Ngày sinh'
            placeholder='Nhâp ngày sinh'
            type='date'
          />
          <RHFTextField
            name='date'
            label='Ngày khám'
            placeholder='Nhập ngày khám'
            type='date'
          />
          <RHFTextField
            name='reasonForMedicalExam'
            label='Lí do khám'
            placeholder='Nhập lí do khám'
            multiple
          />
          <div className='button-booking'>
            <Button title='Huỷ' type='button' onClick={onCloseForm} />
            <Button
              title='ĐẶT LỊCH'
              disabled={isSubmitting}
              type='submit'
              variant='secondary'
            />
          </div>
        </div>
      </FormProvider>
    </div>
  )
}

export default DoctorDetailPage
