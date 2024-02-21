import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Contact',
    items:[
      {
        title: 'Specialist',
        subsTitle: 'Find doctors by specialty'
      },
      {
        title: 'Specialist',
        subsTitle: 'Find doctors by specialty'
      },
      {
        title: 'Specialist',
        subsTitle: 'Find doctors by specialty'
      },
    ]
  },
};
