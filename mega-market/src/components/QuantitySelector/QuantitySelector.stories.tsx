import { Meta, StoryObj } from '@storybook/react'
import QuantitySelector from '.'

export default {
  title: 'Components/QuantitySelector',
  component: QuantitySelector,
  argTypes: {
    onIncrease: { action: 'increase clicked' },
    onDecrease: { action: 'decrease clicked' }
  }
} as Meta

type Story = StoryObj<typeof QuantitySelector>

export const Default: Story = {
  args: {
    quantity: 1
  }
}
