import { Meta, StoryObj } from '@storybook/react'
import Toast, { showToast } from '.'

export default {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    message: { description: 'Message of toast' },
    type: {
      description: 'Type of toast',
      control: {
        type: 'select',
        options: ['success', 'error', 'info', 'warning']
      }
    }
  }
} as Meta

type Story = StoryObj<typeof Toast>

export const ShowToastSuccess: Story = {
  render() {
    showToast('Add to cart successfully', 'success')
    return <Toast />
  }
}

export const ShowToastError: Story = {
  render() {
    showToast('Error', 'error')
    return <Toast />
  }
}

export const ShowToastInfo: Story = {
  render() {
    showToast('Info', 'info')
    return <Toast />
  }
}

export const ShowToastWarning: Story = {
  render() {
    showToast('Warning', 'warning')
    return <Toast />
  }
}
