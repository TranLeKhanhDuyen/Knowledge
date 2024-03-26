import React, { useState } from 'react'
import doctor1 from '@assets/doctors/hua-thuy-vi.jpg'
import supportIcon from '@assets/icons/ic-support.svg'
import { Form, Header } from '@components'
import { Button, Heading, Image, Input, Text } from '@components/common'
import { LIST_NAV, DOCTOR } from '@mockdata'
import './doctor.css'

const DoctorDetailPage = () => {
  const [isShowForm, setShowForm] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')

  const handleClick = () => {
    setShowForm(true)
    document.body.classList.add('overlay-active')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Form submitted!')
    handleCloseForm()
  }

  const handleCloseForm = () => {
    setShowForm(false) // Hide form
    document.body.classList.remove('overlay-active')
    setFullName('')
    setEmail('')
    setPhoneNumber('')
    setDate('')
  }

  const handleCloseButtonClick = () => {
    handleCloseForm()
  }

  return (
    <>
      <Header items={LIST_NAV[0].items} icon={supportIcon} />
      <div className='body-doctor'>
        <div className='container  doctor-container'>
          <div className='doctor-summary'>
            <Image type='circle' src={doctor1} width='120' height='120' />
            <Heading content={DOCTOR.name} className='heading-doctor' />
            <Text content={DOCTOR.description} className='text-description' />
          </div>

          <div className='examination-schedule'>
            <div className='schedule-time'>
              <Heading content='LỊCH KHÁM' />
              <div className='time-focus'>
                {DOCTOR.schedule.map((item: string) => (
                  <Button title={item} onClick={handleClick} />
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

          <ul className='desc-list'>
            <Heading content='Phó Giáo sư, Tiến sĩ Nguyn Thi Hoai An' />
            <li>
              <Text content='Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng' />
            </li>
          </ul>
        </div>
      </div>

      {isShowForm && (
        <div className='overlay'>
          <Form
            className='booking-form'
            onSubmit={handleSubmit}
            action='/'
            method='POST'
          >
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
              <Button
                title='Cancel'
                type='button'
                onClick={handleCloseButtonClick}
              />
              <Button title='Submit' type='submit' variant='secondary' />
            </div>
          </Form>
        </div>
      )}
    </>
  )
}

export default DoctorDetailPage
