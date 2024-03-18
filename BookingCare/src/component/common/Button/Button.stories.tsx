import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import './Button.css'

export default {
  title: 'Commons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      }
    },
    size: {
      defaultValue: 'small',
      description: 'Change size of the button',
    },
    variant: {
      defaultValue: 'primary',
      description: 'Change color of the button',
    },
  },
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    title: 'See more'
  }
}

export const Small: Story = {
  args: {
    ...Default,
    size: 'small',
    variant: 'primary',
  }
}

export const Medium: Story = {
  args: {
    ...Default,
    size: 'medium',
    variant: 'primary',
  }
}

export const Large: Story = {
  args: {
    ...Default,
    size: 'large',
    variant: 'secondary',
  }
}
