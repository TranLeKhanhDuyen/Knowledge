import { Meta, StoryObj } from '@storybook/react'
import BannerSlider from '.'

import banner2 from '@assets/images/banners/banner-2.svg'
import banner3 from '@assets/images/banners/banner-3.svg'
import banner4 from '@assets/images/banners/banner-4.svg'
import banner5 from '@assets/images/banners/banner-5.svg'

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { description: 'images of banner' }
  }
} as Meta

type Story = StoryObj<typeof BannerSlider>

export const Default: Story = {
  args: {
    imageUrls: [banner2, banner3, banner4, banner5]
  }
}
