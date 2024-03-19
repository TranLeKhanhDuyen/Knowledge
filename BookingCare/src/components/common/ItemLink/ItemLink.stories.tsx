import { Meta, StoryObj } from '@storybook/react'
import './ItemLink.css'
import ItemLink from './ItemLink';
import image from '../../../assets/facilities/cental-military.jpg'

export default {
  title: 'Commons/ItemLink',
  component: ItemLink,
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
      description: 'Change size of the item link',
    },
    variant: {
      defaultValue: 'primary',
      description: 'Change color of the item link',
    },
    description: {
      defaultValue: '',
      description: 'Change description of the item link',
    },
    image: {
      defaultValue: '',
      description: 'Image URL for the item link',
    },
  },
} as Meta

type Story = StoryObj<typeof ItemLink>;

export const Default: Story = {
  args: {
    image: image,
    title: 'D',
    description: 'D'
  }
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  }
}

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'medium',
  }
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  }
}

