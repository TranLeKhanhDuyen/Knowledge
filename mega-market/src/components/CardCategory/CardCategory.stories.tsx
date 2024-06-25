import type { Meta, StoryObj } from '@storybook/react'

import { CardCategory } from '@components'
import img1 from '@assets/images/products/phone-2.svg'
import img2 from '@assets/images/products/cherry.svg'

export default {
  title: 'Components/CardCategory',
  component: CardCategory,
  tags: ['autodocs'],
  argTypes: {
    additionalClass: { description: 'Add class to the category' },
    imageUrl: { description: 'imageUrl content of category' },
    alt: { description: 'alt content of category' },
    name: { description: 'name content of category' },
    discountPercent: { description: 'discount percent content of category' }
  }
} as Meta

type Story = StoryObj<typeof CardCategory>

export const Circle: Story = {
  args: {
    imageUrl: img1,
    alt: 'phone',
    name: 'Galaxy S22 Ultra',
    variant: 'circle'
  }
}

export const Square: Story = {
  args: {
    imageUrl: img2,
    variant: 'square',
    name: 'Daily Essentials',
    discountPercent: '50%'
  }
}
