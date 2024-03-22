import React, { useState } from 'react';
import './doctor.css';
import { Button, Image, Input } from '@components/common'; // Import your custom Input component
import supportIcon from '../assets/icons/ic-support.svg';
import doctor1 from '@assets/doctors/hua-thuy-vi.jpg';
import Text from '@components/common/Text/Text';
import { Header, ItemLink } from '@components';
import { LIST_NAV } from '@mockdata';

const DoctorDetailPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted!');
    handleCloseForm();
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide form
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setDate('');
  };

  const handleCloseButtonClick = () => {
    handleCloseForm();
  };

  return (
    <>
      <Header items={LIST_NAV.items} icon={supportIcon} />
      <div className="container  doctor-container">
        <div className="doctor-summary">
          <Image type="circle" src={doctor1} width="120" height="120" />
          <Text
            title="Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An"
            description="Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
                         Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
                        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em"
          />
        </div>
        <div className="examination-schedule">
          <div className="schedule-time">
            <Text title="LỊCH KHÁM" />
            <div className='time-focus'>
              <Button size="small" title="7:30 - 8:30" onClick={handleClick} />
              <Button size="small" title="7:30 - 8:30" onClick={handleClick} />
              <Button size="small" title="7:30 - 8:30" onClick={handleClick} />
              <Button size="small" title="7:30 - 8:30" onClick={handleClick} />
              <Button size="small" title="7:30 - 8:30" onClick={handleClick} />
              <Button size="small" title="7:30 - 8:30" onClick={handleClick} />
              <Button size="small" title="7:30 - 8:30" onClick={handleClick} />
            </div>
          </div>
          <div className="address-container">
            <div className="clinic-address">
              <Text
                title='ĐỊA CHỈ KHÁM'
                subsTitle='Bệnh viện Nam học và Hiếm muộn Hà Nội'
                description='431 Tam Trinh (Lô 01 – 8A), Hoàng Mai, Hà Nội'
              />
            </div>
            <div className="examination-price">
              <Text
                title='GIÁ KHÁM'
                subsTitle='200.000'
              />
            </div>
          </div>
        </div>

        {/* showForm if true */}
        {showForm && (
          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Full Name:
              <Input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(value) => setFullName(value)}
                required
              />
            </label>
            <label>
              Email:
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(value) => setEmail(value)}
                required
              />
            </label>
            <label>
              Phone Number:
              <Input
                type="text"
                placeholder="Enter your phone"
                value={phoneNumber}
                onChange={(value) => setPhoneNumber(value)}
                required
              />
            </label>
            <label>
              Date of birth:
              <Input
                type="date"
                value={date}
                onChange={(value) => setDate(value)}
                required
              />
            </label>
            <Button title="Submit" onClick={handleSubmit} />
            <Button  title="Close" onClick={handleCloseButtonClick} />
          </form>
        )}

        <div className="doctor-description">
          <ul className="desc-list">
            <Text title="Phó Giáo sư, Tiến sĩ Nguyn Thi Hoai An" />
            <li>
              <Text subsTitle="Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng" />
            </li>
          </ul>
        </div>
      </div>
    </>

  );
};

export default DoctorDetailPage;
