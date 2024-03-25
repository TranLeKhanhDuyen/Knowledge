import React, { useState } from 'react'
import './doctor.css'
import { Button, Heading, Image, Input } from '@components/common' // Import your custom Input component
import supportIcon from '../assets/icons/ic-support.svg'
import doctor1 from '@assets/doctors/hua-thuy-vi.jpg'
import Text from '@components/common/Text/Text'
import { Header } from '@components'
import { LIST_NAV, DOCTOR } from '@mockdata'
import Form from '@components/Form/Form'

const DoctorDetailPage = () => {
  const [isShowForm, setShowForm] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')

  const handleClick = () => {
    setShowForm(true)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Form submitted!')
    handleCloseForm()
  }

  const handleCloseForm = () => {
    setShowForm(false) // Hide form
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
      <Header items={LIST_NAV.items} icon={supportIcon} />
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
                <Button size='small' title={item} onClick={handleClick} />
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

        {/* showForm if true */}
        {isShowForm && (
          <Form
            className='booking-form'
            onSubmit={handleSubmit}
            action='/'
            method='POST'
          >
            <label>
              Full Name:
              <Input
                type='text'
                placeholder='Enter your full name'
                value={fullName}
                onChangeValue={(value) => setFullName(value)}
                required
              />
            </label>
            <label>
              Email:
              <Input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChangeValue={(value) => setEmail(value)}
                required
              />
            </label>
            <label>
              Phone Number:
              <Input
                type='text'
                placeholder='Enter your phone'
                value={phoneNumber}
                onChangeValue={(value) => setPhoneNumber(value)}
                required
              />
            </label>
            <label>
              Date of birth:
              <Input
                type='date'
                value={date}
                onChangeValue={(value) => setDate(value)}
                required
              />
            </label>
            <Button title='Submit' type='submit' />
            <Button
              title='Close'
              type='button'
              onClick={handleCloseButtonClick}
            />
          </Form>
        )}

        {/* <div className='doctor-description'> */}
        <ul className='desc-list'>
          <Heading content='Phó Giáo sư, Tiến sĩ Nguyn Thi Hoai An' />
          <li>
            <Text content='Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng' />
          </li>
        </ul>
        {/* </div> */}
      </div>
    </>
  )
}

export default DoctorDetailPage
