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
    title: 'abc',
    textField: 'Find doctors by specialty'
  }
};
