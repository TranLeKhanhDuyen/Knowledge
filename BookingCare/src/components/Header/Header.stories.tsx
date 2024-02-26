import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Contact',
    items: [
      {
        title: 'Specialist',
        subsTitle: 'Find doctors by specialty'
      },
      {
        title: 'Health facilities',
        subsTitle: 'Choose a hospital or clinic'
      },
      {
        title: 'Doctor',
        subsTitle: 'Choose a doctor'
      },
      {
        title: 'Examination package',
        subsTitle: 'General examination'
      }
    ]
  }
};
