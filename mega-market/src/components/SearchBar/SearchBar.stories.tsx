import type { Meta, StoryObj } from '@storybook/react'

import SearchBar from '@components/SearchBar/index'

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    icon: { description: 'The icon source.' },
    placeholder: { description: 'Content of search bar.' }
  }
} as Meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    placeholder: 'Search essentials, groceries and more...'
  }
}
