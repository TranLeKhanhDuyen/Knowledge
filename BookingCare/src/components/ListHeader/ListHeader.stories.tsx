import type { Meta, StoryObj } from '@storybook/react';
import ItemHeader from './index';

export default {
  title: 'Components/ListHeader',
  component: ItemHeader
} as Meta;

type Story = StoryObj<typeof ItemHeader>;

export const Service: Story = {
  name: 'Specialist',
  args: {
    items: [
      {
        title: 'Specialist Examnination'
      }
    ],
    type: 'specialist'
  }
};

export const Facilities: Story = {
  name: 'Facilities',
  args: {
    items: [
      {
        title: 'Health facilities'
      }
    ],
    type: 'facilities'
  }
};

export const Oustanding: Story = {
  name: 'Oustanding',
  args: {
    items: [
      {
        title: 'Oustanding doctor'
      }
    ],
    type: 'oustanding'
  }
};

export const Handbook: Story = {
  name: 'Handbook',
  args: {
    items: [
      {
        title: 'Handbook'
      }
    ],
    type: 'handbook'
  }
};
