import React from 'react'
import IconSvg, { IconSvgProps } from '@components/IconSvg'
import './Contact.css'

interface IContactProps {
  icon: IconSvgProps['name']
  name: string
  phoneNumber: string
  additionalClass?: string
}

const Contact: React.FC<IContactProps> = ({
  icon,
  name,
  phoneNumber,
  additionalClass
}) => {
  return (
    <article className={`contact ${additionalClass}`}>
      <IconSvg name={icon} />
      <aside className='contact-info'>
        <p className='contact-name'>{name}</p>
        <p className='contact-phone'>{phoneNumber}</p>
      </aside>
    </article>
  )
}

export default Contact
