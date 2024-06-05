import { Meta, StoryObj } from '@storybook/react'
import Spinner from '.'

export default {
  title: 'Components/Spinner',
  component: Spinner
} as Meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  render: () => <Spinner />
}
