import { Meta, StoryObj } from '@storybook/react'
import './ItemFooter.css'
import ItemFooter from './ItemFooter';

export default {
  title: 'Commons/ItemFooter',
  component: ItemFooter,
  tags: ['autodocs'],
  argTypes: {
    title: {
      text: {
        name: 'string',
        required: true,
      }
    }
  }
} as Meta

type Story = StoryObj<typeof ItemFooter>;

export const Default: Story = {
  args: {
    text: 'text',
    link: 'Enter your email'
  }
}
