import { Meta, StoryObj } from '@storybook/react'
import ItemNav from "./ItemNav";

export default {
  title: 'Commons/ItemNav',
  component: ItemNav,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      }
    },
    subsTitle: {
      defaultValue: '',
      description: 'Change title of the navbar item',
    },
  }
} as Meta

type Story = StoryObj<typeof ItemNav>;

export const Default: Story = {
  args: {
    title: 'Handbook',
    subsTitle: 'Handbookgn'
  }
}
