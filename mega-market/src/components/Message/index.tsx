import React from 'react'
import { Button } from '@components'
import './Message.css'

interface MessageProps {
  message: string
  labelClose: string
  labelSubmit?: string
  onClose?: () => void
  onSubmit?: () => void
  showSubmit?: boolean
}

const Message: React.FC<MessageProps> = ({
  message,
  onClose,
  onSubmit,
  showSubmit = true,
  labelSubmit,
  labelClose
}) => {
  return (
    <div className='message-container'>
      <article className='message-wrapper'>
        <h3 className='message-title'>{message}</h3>
        <div className='message-buttons'>
          <Button
            label={labelClose}
            onClick={onClose}
            additionalClass='primary btn-message-close'
          />
          {showSubmit && labelSubmit && (
            <Button
              label={labelSubmit}
              onClick={onSubmit}
              additionalClass='secondary btn-message-submit'
            />
          )}
        </div>
      </article>
    </div>
  )
}

export default Message
