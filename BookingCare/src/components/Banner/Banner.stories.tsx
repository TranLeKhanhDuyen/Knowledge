import type { Meta, StoryObj } from '@storybook/react';

// Components
import Banner from '.';

export default {
  title: 'Components/Banner',
  component: Banner
} as Meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    title: 'HEALTHCARE MEDICAL FOUNDATION',
    textField: 'Find doctors by specialty'
  }
};
