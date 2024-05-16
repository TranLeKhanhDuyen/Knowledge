import { Meta, StoryObj } from '@storybook/react'
import Select from '.'

export default {
  title: 'Components/Select',
  component: Select
} as Meta

type Story = StoryObj<typeof Select>

const options = [
  { value: 'groceries', label: 'Groceries' },
  { value: 'groceriesA', label: 'Groceries A' },
  { value: 'groceriesB', label: 'Groceries B' },
  { value: 'groceriesC', label: 'Groceries C' },
  { value: 'groceriesD', label: 'Groceries D' }
]

export const Default: Story = {
  args: {
    options: options
  }
}
