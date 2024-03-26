import React, { useState } from 'react'
import doctor1 from '@assets/doctors/hua-thuy-vi.jpg'
import supportIcon from '@assets/icons/ic-support.svg'
import { Form, Header } from '@components'
import { Button, Heading, Image, Input, Text } from '@components/common'
import { LIST_NAV, DOCTOR } from '@mockdata'
import './doctor.css'

const DoctorDetailPage = () => {
  const [isShowForm, setShowForm] = useState(false)

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
            <Image variant='circle' src={doctor1} width='120' height='120' />
            <div className='doctor-name'>
              <Heading content={DOCTOR.name} className='heading-doctor' />
              <Text content={DOCTOR.description} className='text-description' />
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
              <Text content={DOCTOR.address} className='text-address' />
              <Heading content='GIÁ KHÁM' />
              <Text content={DOCTOR.price} className='text-price' />
            </div>
          </div>

          {/* Description list */}
          <ul className='desc-list'>
            <Heading content='Phó Giáo sư, Tiến sĩ Nguyn Thi Hoai An' />
            <li>
              <Text content='Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng' />
            </li>
          </ul>
        </div>
      </div>

      {/* Render form if isShowForm is true */}
      {isShowForm && <BookingForm onCloseForm={toggleForm} />}
    </>
  )
}

const BookingForm = ({ onCloseForm }: { onCloseForm: () => void }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Form submitted!')
    onCloseForm()
  }

  return (
    <div className='overlay'>
      <Form className='booking-form' onSubmit={handleSubmit}>
        <Heading className='booking' content='ĐẶT LỊCH KHÁM BỆNH' />
        <Input
          additionalClass='bookingform'
          type='text'
          placeholder='Họ tên bệnh nhân (bắt buộc)'
          value={fullName}
          onChangeValue={(value) => setFullName(value)}
          required
        />
        <Input
          additionalClass='bookingform'
          type='number'
          placeholder='Số điện thoại liên hệ (bắt buộc)'
          value={phoneNumber}
          onChangeValue={(value) => setPhoneNumber(value)}
          required
        />
        <Input
          additionalClass='bookingform'
          type='date'
          placeholder='Ngày tháng năm sinh'
          value={date}
          onChangeValue={(value) => setDate(value)}
          required
        />
        <Input
          additionalClass='bookingform'
          type='text'
          placeholder='Nghề nghiệp'
          value={date}
          onChangeValue={(value) => setDate(value)}
          required
        />
        <Input
          additionalClass='bookingform'
          type='email'
          placeholder='Nhập địa chỉ email (nếu có)'
          value={email}
          onChangeValue={(value) => setEmail(value)}
          required
        />

        <div className='button-booking'>
          <Button title='Cancel' type='button' onClick={onCloseForm} />
          <Button title='Submit' type='submit' variant='secondary' />
        </div>
      </Form>
    </div>
  )
}

export default DoctorDetailPage
