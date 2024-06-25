import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { description: 'clicked' },
    label: { description: 'text' },
    additionalClass: { description: 'text' }
  }
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'Button'
  }
}

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    additionalClass: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    additionalClass: 'secondary'
  }
}
