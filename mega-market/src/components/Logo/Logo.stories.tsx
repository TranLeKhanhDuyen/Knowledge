import type { Meta, StoryObj } from '@storybook/react'

import Logo from '@components/Logo/index'

export default {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    width: { description: 'Set width of the logo.' },
    height: { description: 'Set height of the logo.' }
  }
} as Meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    width: '138',
    height: '28'
  }
}
