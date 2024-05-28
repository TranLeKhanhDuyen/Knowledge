import type { Meta, StoryObj } from '@storybook/react'

import { CardProduct } from '@components'
import img1 from '@assets/images/products/phone-1.svg'

export default {
  title: 'Components/CardProduct',
  component: CardProduct,
  tags: ['autodocs'],
  argTypes: {
    additionalClass: { description: 'Add class to the product' },
    imageUrl: { description: 'imageUrl content of product' },
    alt: { description: 'alt content of product' },
    name: { description: 'name content of product' },
    regularPrice: { description: 'regular price content of product' },
    salePrice: { description: 'sale price content of product' },
    savePrice: { description: 'save price content of product' },
    discountPercent: { description: 'discount percent content of product' },
    contentBadge: { description: 'content percent content of product' }
  }
} as Meta

type Story = StoryObj<typeof CardProduct>

export const Default: Story = {
  args: {
    imageUrl: img1,
    alt: 'phone',
    name: 'Galaxy S22 Ultra',
    salePrice: 32999,
    regularPrice: 74999,
    savePrice: 74999,
    discountPercent: '56%'
  }
}
