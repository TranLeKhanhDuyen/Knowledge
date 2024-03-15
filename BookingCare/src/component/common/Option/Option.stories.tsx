import { Meta, StoryObj } from '@storybook/react'
import Option from "./Option";

export default {
  title: 'Option',
  component: Option,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      }
    }
  }
} as Meta

type Story = StoryObj<typeof Option>;

export const Default: Story = {
  args: {
    title: 'Handbook',
  }
}
