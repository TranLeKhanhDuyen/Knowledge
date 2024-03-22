import './doctor.css'
import { Button, Image } from "@components/common"
import supportIcon from "../assets/icons/ic-support.svg"


import doctor1 from '@assets/doctors/hua-thuy-vi.jpg'
import Text from "@components/common/Text/Text"
import { Header } from "@components"
import { LIST_NAV } from "@mockdata"
import { useState } from 'react'

const DoctorDetailPage = () => {

  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(true);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert('Form submitted!');
    setShowForm(false); // Hide form
  };

  return (
    <div className="doctor-container">
      <Header items={LIST_NAV.items} icon={supportIcon} />
      <div className="doctor-sumary">
        <Image type='circle' src={doctor1} width="50" height="50" />
        <Text
          title="Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An"
          description="Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
        Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em"
        />
      </div>
      <div className="examination-schedule" >
        <Text title="MEDICAL EXAMINATION SCHEDULE" />
        <Button
          size="small"
          title="7:30 - 8:30"
          onClick={handleClick}
        />
        <Button
          size="small"
          title="7:30 - 8:30"
          onClick={handleClick}
        />
        <Button
          size="small"
          title="7:30 - 8:30"
          onClick={handleClick}
        />
      </div>

      {/* showForm if true */}
      {showForm && (
        <form className="registration-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" name="fullname" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <Button title="Submit" onClick={handleSubmit} />
        </form>
      )}

      <div className="doctor-description">
        <ul className="desc-list">
          <Text
            title="Phó Giáo sư, Tiến sĩ Nguyn Thi Hoai An"
          />
          <li>
            <Text
              subsTitle="Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorDetailPage
