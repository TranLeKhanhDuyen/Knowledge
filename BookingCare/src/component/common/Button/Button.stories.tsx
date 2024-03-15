import { Meta, Story } from '@storybook/react'
import Button from './Button'
import './Button.css'

export default {
  title: 'Button',
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

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  variant: 'primary',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  variant: 'secondary',
}
