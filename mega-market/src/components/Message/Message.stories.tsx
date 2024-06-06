import { Meta, StoryObj } from '@storybook/react'
import Message from '.'

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    onClose: { action: 'close clicked' },
    onSubmit: { action: 'submit clicked' }
  }
} as Meta

type Story = StoryObj<typeof Message>

export const Default: Story = {
  args: {
    message: 'This is a message',
    labelClose: 'Close',
    showSubmit: false
  }
}

export const WithSubmitButton: Story = {
  args: {
    message: 'This is a message',
    labelClose: 'Close',
    labelSubmit: 'Submit',
    showSubmit: true
  }
}
