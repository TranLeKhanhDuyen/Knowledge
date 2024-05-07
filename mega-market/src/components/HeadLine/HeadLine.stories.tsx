import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Headline } from '@components'

export default {
  title: 'Components/HeadLine',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    title: { description: 'The title of headline' },
    subTitle: { description: 'The sub title of headline' }
  }
} as Meta

type Story = StoryObj<typeof Headline>

export const Primary: Story = {
  args: {
    title: 'Grab the best deal on\t',
    subTitle: 'Smartphones',
    additionalClass: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    title: 'Most Popular Categories\t',
    additionalClass: 'secondary'
  }
}
