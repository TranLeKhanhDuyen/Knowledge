import type { Meta, StoryObj } from '@storybook/react'
import { ButtonIcon } from '@components'
import { menuIcon } from '@assets/images'

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    variants: { description: 'The variants of button.' },
    size: { description: 'The size of button' },
    additionalClass: { description: 'Add class to the button' },
    children: { description: 'The content of button.' }
  }
} as Meta

type Story = StoryObj<typeof ButtonIcon>

export const Default: Story = {
  args: {
    variants: 'square',
    size: 'md',
    icon: menuIcon,
    width: '26px',
    height: '18px'
  }
}
