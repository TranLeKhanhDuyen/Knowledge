import type { Meta, StoryObj } from '@storybook/react'

// Components
import { IconTextButton } from '@components'
import { arrowDownIconWhite, locationIcon, truckIcon } from '@assets/images'

export default {
  title: 'Components/IconTextButton',
  component: IconTextButton,
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

type Story = StoryObj<typeof IconTextButton>

export const Default: Story = {
  args: {
    size: 'sm',
    icon: locationIcon,
    title: 'Deliver to',
    subTitle: '423651'
  }
}

export const IconLeft: Story = {
  ...Default,
  args: {
    icon: truckIcon,
    title: 'Track your order',
    iconPosition: 'left'
  }
}

export const IconRight: Story = {
  ...Default,
  args: {
    icon: arrowDownIconWhite,
    title: 'Groceries',
    iconPosition: 'right',
    additionalClass: 'select'
  }
}
