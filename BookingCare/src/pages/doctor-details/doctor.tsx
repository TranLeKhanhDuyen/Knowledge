import React, { useEffect, useState } from 'react'
import doctor1 from '@assets/doctors/hua-thuy-vi.jpg'
import supportIcon from '@assets/icons/ic-support.svg'
import { Form, Header } from '@components'
import { Button, Heading, Image, Input, Text } from '@components/common'
import { LIST_NAV, DOCTOR } from '@mockdata'
import './doctor.css'
import { useCreateAppointment } from './use-create-appointment'
import FormProvider from '@components/HookFormFields/FormProvider'
import RHFTextField from '@components/HookFormFields/RHFTextField'
import { useGetDoctorDetails } from './use-get-doctor-details'
import Avatar from '@components/Avatar'
import { fCurrency } from '@utils/number-formatter'

const DoctorDetailPage = () => {
  const [doctor, setDoctor] = useState([])
  const [isShowForm, setShowForm] = useState(false)
  const { doctorDetails } = useGetDoctorDetails()

  const toggleForm = () => {
    setShowForm(!isShowForm)
    document.body.classList.toggle('overlay-active')
  }

  useEffect(() => {
    fetchDoctorData()
  }, [])

  const fetchDoctorData = async () => {
    try {
      const response = await fetch('http://localhost:3001/doctors')
      if (!response.ok) {
        throw new Error('Failed to fetch doctor data')
      }
      const data = await response.json()
      setDoctor(data)
    } catch (error) {
      console.error('Error fetching doctor data:', error)
    }
  }

  if (!doctor) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header items={LIST_NAV[0].items} icon={supportIcon} />
      <div className='body-doctor'>
        <div className='container  doctor-container'>
          {/* Doctor summary */}
          <div className='doctor-summary'>
            <Avatar
              src={doctorDetails?.avatar}
              alt={doctorDetails?.firstName}
              size={120}
            />
            <div className='doctor-name'>
              <Heading
                content={`${doctorDetails?.firstName} ${doctorDetails?.lastName}`}
                className='heading-doctor'
              />
              <Text
                content={doctorDetails?.title ?? ''}
                className='text-description'
              />
            </div>
          </div>

          {/* Examination schedule */}
          <div className='examination-schedule'>
            <div className='schedule-time'>
              <Heading content='LỊCH KHÁM' />
              <div className='time-focus'>
                {DOCTOR.schedule.map((item: string) => (
                  <Button title={item} onClick={toggleForm} />
                ))}
              </div>
            </div>

            <div className='address-container'>
              <Heading content='ĐỊA CHỈ KHÁM' />
              <Text
                content={doctorDetails?.clinic?.address ?? ''}
                className='text-address'
              />
              <Heading content='GIÁ KHÁM' />
              <Text
                content={fCurrency(doctorDetails?.clinic?.fee ?? 0) ?? ''}
                className='text-price'
              />
            </div>
          </div>
          <Text content={doctorDetails?.description ?? ''} />
          {/* <ul className='desc-list'>
            <Heading content='Phó Giáo sư, Tiến sĩ Nguyn Thi Hoai An' />
            <li>
              <Text content='Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng' />
            </li>
          </ul> */}
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
            label='Full name'
            placeholder='Full name'
          />
          <RHFTextField
            name='phoneNumber'
            label='Phone number'
            placeholder='Phone number'
          />
          <RHFTextField name='email' label='Email' placeholder='Email' />
          <RHFTextField
            name='dob'
            label='Date of birth'
            placeholder='Date of birth'
            type='date'
          />
          <RHFTextField
            name='date'
            label='Date'
            placeholder='Date'
            type='date'
          />
          <RHFTextField
            name='reasonForMedicalExam'
            label='Reason for Medical examination'
            placeholder='Reason for Medical examination'
            multiple
          />
          <div className='button-booking'>
            <Button title='Cancel' type='button' onClick={onCloseForm} />
            <Button
              title='Submit'
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
