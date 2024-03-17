import { Meta, StoryObj } from '@storybook/react'
import Label from "./Label";

export default {
  title: 'Commons/Label',
  component: Label,
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

type Story = StoryObj<{ title: string }>;

export const Default: Story = {
  args: {
    title: 'Handbook'
  }
}
