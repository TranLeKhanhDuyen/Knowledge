import type { Meta, StoryObj } from '@storybook/react'

import { Contact } from '@components'

export default {
  title: 'Components/Contact',
  component: Contact,
  tags: ['autodocs'],
  argTypes: {
    icon: { description: 'The icon source.' },
    name: { description: 'The name of the contact.' },
    phoneNumber: { description: 'The phone number of the contact.' }
  }
} as Meta

type Story = StoryObj<typeof Contact>

export const Default: Story = {
  args: {
    name: 'Call Us',
    phoneNumber: '+1 202-918-2132'
  }
}
