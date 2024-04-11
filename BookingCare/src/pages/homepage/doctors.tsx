import { ListHeader } from '@components'
import Avatar from '@components/Avatar'
import { Heading, Text } from '@components/common'
import classNames from 'classnames/bind'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import styles from './doctors.module.css'
import { useGetDoctors } from './use-get-doctors'
import { hashCode, randomAvatar } from '@components/Avatar/random-avatar'

const className = classNames.bind(styles)

export interface DoctorsProps {}

const Doctors: FC<DoctorsProps> = () => {
  const navigate = useNavigate()
  const { doctors } = useGetDoctors()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  }

  return (
    <div className='container slider-container'>
      <div className='slider-doctor'>
        <ListHeader content='Doctor' type='doctor' />
        <Slider {...settings} className={`slider slider-doctor`}>
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={className('doctor-content')}
              onClick={() => {
                navigate(`/doctors/${doctor.id}`)
              }}
            >
              <Avatar
                size={218}
                src={randomAvatar(hashCode(doctor?.email || ''))}
                alt={doctor.firstName}
              />

              <Text
                content={doctor?.firstName + ' ' + doctor?.lastName}
                className={className('doctor-specialty')}
                style={{
                  marginTop: '10px',
                  fontSize: 'var(--font-xl)',
                  fontWeight: 'var(--fw-bold)'
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Doctors
