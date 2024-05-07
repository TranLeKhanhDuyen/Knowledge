import type { Meta, StoryObj } from '@storybook/react'
// Components
import TextField from '@components/TextField'

export default {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    isShowLabel: {
      description: 'One boolean to test for open or close label of input.'
    },
    label: { description: 'Content of label.' },
    validate: { description: 'Validation of input.' },
    additionalClass: {
      description: 'Adds the additional class to the text filed.'
    },
    placeholder: { description: 'Content of text field.' }
  }
} as Meta

type Story = StoryObj<typeof TextField>

export const InputText: Story = {
  args: {
    additionalClass: 'input-search',
    placeholder: 'Search ...'
  }
}

export const InputSearch: Story = {
  ...InputText,
  args: {
    ...InputText.args,
    isShowLabel: true,
    label: 'Email',
    placeholder: 'Enter email',
    additionalClass: 'input-text',
    iconLeft: 'search',
    iconRight: 'list'
  }
}
