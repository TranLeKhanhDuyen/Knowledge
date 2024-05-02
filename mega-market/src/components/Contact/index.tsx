import React from 'react'
import IconSvg from '@components/IconSvg'
import './Contact.css'

interface IContactProps {
  icon: string
  name: string
  phoneNumber: string
}

const Contact: React.FC<IContactProps> = ({ name, phoneNumber }) => {
  return (
    <article className='contact'>
      <IconSvg name='call' />
      <aside className='contact-info'>
        <p className='contact-name'>{name}</p>
        <p className='contact-phone'>{phoneNumber}</p>
      </aside>
    </article>
  )
}

export default Contact
