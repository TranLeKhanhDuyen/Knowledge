import React from 'react'
import { Button } from '@components'
import './Message.css'

interface MessageProps {
  message: string
  onClose: () => void
}

const Message: React.FC<MessageProps> = ({ message, onClose }) => {
  return (
    <div className='message-container'>
      <article className='message-wrapper'>
        <h3 className='message-title'>{message}</h3>
        <Button label='OK' onClick={onClose} additionalClass='primary' />
      </article>
    </div>
  )
}

export default Message
