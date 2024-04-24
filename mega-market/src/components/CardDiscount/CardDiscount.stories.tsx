import type { Meta, StoryObj } from '@storybook/react'

// Components
import { CardDiscount } from '@components'

export default {
  title: 'Components/CardDiscount',
  component: CardDiscount,
  tags: ['autodocs'],
  argTypes: {
    additionalClass: { description: 'Add class to the button' },
    title: { description: 'title content of button.' },
    percent: { description: 'percent content of button.' }
  }
} as Meta

type Story = StoryObj<typeof CardDiscount>

export const Default: Story = {
  args: {
    percent: '50%',
    title: 'off'
  }
}
