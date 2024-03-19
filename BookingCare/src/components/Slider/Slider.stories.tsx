import { Meta, StoryObj } from '@storybook/react'
import CustomSlider from './Slider';
import image1 from '@assets/facilities/cho-ray.jpg'
import image2 from '@assets/facilities/diag.png'

export default {
  title: 'CustomSlider',
  component: CustomSlider,
  tags: ['autodocs'],
} as Meta

type Story = StoryObj<typeof CustomSlider>;

export const Default: Story = {
  args: {
    items: [
      {
        image: image1,
        title: 'Title 1',
        description: 'Description 1'
      },
      {
        image: image2,
        title: 'Title 2',
        description: 'Description 2'
      },
    ]
  }
}
