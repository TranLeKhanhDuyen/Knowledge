import type { Meta, StoryObj } from '@storybook/react'

import { CardBadge } from '@components'

export default {
  title: 'Components/CardBadge',
  component: CardBadge,
  tags: ['autodocs'],
  argTypes: {
    additionalClass: { description: 'Add class to the button' },
    title: { description: 'title content of button.' },
    percent: { description: 'percent content of button.' }
  }
} as Meta

type Story = StoryObj<typeof CardBadge>

export const Default: Story = {
  args: {
    percent: '50%',
    title: 'off'
  }
}
