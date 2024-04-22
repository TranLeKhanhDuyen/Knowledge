import type { Meta, StoryObj } from '@storybook/react'
import locationIcon from '@assets/images/icons/location.svg'

// Components
import { IconTextButton } from '@components'

export default {
  title: 'Components/IconTextButton',
  component: IconTextButton,
  tags: ['autodocs'],
  argTypes: {
    size: { description: 'The size of button' },
    additionalClass: { description: 'Add class to the button' },
    title: { description: 'The title of button.' },
    subTitle: { description: 'The subs title of button.' }
  }
} as Meta

type Story = StoryObj<typeof IconTextButton>

export const Default: Story = {
  args: {
    size: 'sm',
    icon: locationIcon,
    title: 'Deliver to',
    subTitle: '423651',
    width: '18px',
    height: '18px'
  }
}
