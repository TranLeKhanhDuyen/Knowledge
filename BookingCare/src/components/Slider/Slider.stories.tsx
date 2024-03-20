import { Meta, StoryObj } from '@storybook/react'
import CustomSlider from './Slider';
import image1 from '@assets/facilities/cho-ray.jpg'
import image2 from '@assets/facilities/diag.png'
import image3 from '@assets/facilities/doctor-check.png'

export default {
  title: 'Components/CustomSlider',
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
        description: 'Description 1',
        variant: 'primary',
        width:'329px',
        height: '157px'
      },
      {
        image: image2,
        title: 'Title 2',
        description: 'Description 2',
        variant: 'primary',
        width:'329px',
        height: '157px'
      },
      {
        image: image3,
        title: 'Title 3',
        description: 'Description 3',
        variant: 'primary',
        width:'329px',
        height: '157px'
      },
      {
        image: image2,
        title: 'Title 3',
        description: 'Description 3',
        variant: 'primary',
        width:'329px',
        height: '157px'
      },
      {
        image: image1,
        title: 'Title 3',
        description: 'Description 3',
        variant: 'primary',
        width:'329px',
        height: '157px'
      },
      {
        image: image1,
        title: 'Title 3',
        description: 'Description 3',
        variant: 'primary',
        width:'329px',
        height: '157px'
      },
    ]
  }
}
