import type { Meta, StoryObj } from '@storybook/react'

import { IconText } from '@components'

export default {
  title: 'Components/IconText',
  component: IconText,
  tags: ['autodocs'],
  argTypes: {
    size: { description: 'The size of button' },
    additionalClass: { description: 'Add class to the button' },
    title: { description: 'The title of button.' },
    subTitle: { description: 'The subs title of button.' },
    iconPosition: {
      description: 'The position of the icon relative to the text',
      control: {
        type: 'radio',
        options: ['left', 'right']
      }
    }
  }
} as Meta
type Story = StoryObj<typeof IconText>
export const Default: Story = {
  args: {
    size: 'sm',
    icon: 'location',
    title: 'Deliver to',
    subTitle: '423651'
  }
}
export const IconLeft: Story = {
  ...Default,
  args: {
    icon: 'truck',
    title: 'Track your order',
    iconPosition: 'left'
  }
}
export const IconRight: Story = {
  ...Default,
  args: {
    icon: 'buy',
    title: 'Groceries',
    iconPosition: 'right',
    additionalClass: 'select'
  }
}
