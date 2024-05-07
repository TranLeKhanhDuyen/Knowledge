import type { Meta, StoryObj } from '@storybook/react'

import { IconSvg } from '@components'

export default {
  title: 'Components/IconSvg',
  component: IconSvg,
  tags: ['autodocs'],
  argTypes: {}
} as Meta
type Story = StoryObj<typeof IconSvg>
export const Default: Story = {
  args: {
    name: 'arrow-down-white'
  }
}
export const IconMenu: Story = {
  args: {
    name: 'menu'
  }
}
