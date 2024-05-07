import React from 'react'
import './Contact.css'

interface IContactProps {
  icon: string
  name: string
  phoneNumber: string
}

const Contact: React.FC<IContactProps> = ({ icon, name, phoneNumber }) => {
  return (
    <article className='contact'>
      <img src={icon} alt='Contact Icon' className='contact-icon' />
      <aside className='contact-info'>
        <p className='contact-name'>{name}</p>
        <p className='contact-phone'>{phoneNumber}</p>
      </aside>
    </article>
  )
}

export default Contact
