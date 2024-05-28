import type { Meta, StoryObj } from '@storybook/react'

import { IconSvg } from '@components'

export default {
  title: 'Components/IconSvg',
  component: IconSvg,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

type Story = StoryObj<typeof IconSvg>

export const ArrowDownWhite: Story = {
  args: {
    name: 'arrowDownWhite'
  }
}

export const ArrowLeft: Story = {
  args: {
    name: 'arrowLeft'
  }
}

export const Buy: Story = {
  args: {
    name: 'buy'
  }
}

export const Call: Story = {
  args: {
    name: 'call'
  }
}

export const CallOutLined: Story = {
  args: {
    name: 'callOutlined'
  }
}

export const Discount: Story = {
  args: {
    name: 'discount'
  }
}

export const List: Story = {
  args: {
    name: 'list'
  }
}

export const Location: Story = {
  args: {
    name: 'location'
  }
}

export const Menu: Story = {
  args: {
    name: 'menu'
  }
}

export const Search: Story = {
  args: {
    name: 'search'
  }
}

export const Truck: Story = {
  args: {
    name: 'truck'
  }
}

export const User: Story = {
  args: {
    name: 'user'
  }
}
