import type { Meta, StoryObj } from '@storybook/react'

import SearchBar from '@components/SearchBar/index'

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {}
} as Meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {}
}
