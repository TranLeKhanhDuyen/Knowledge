import { Meta, StoryObj } from '@storybook/react'
import logo from '../../../assets/logo.png'
import  Image from './Image'

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    src: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: logo,
      table: {
        defaultValue: {
          summary: logo,
        },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {

  }
}
