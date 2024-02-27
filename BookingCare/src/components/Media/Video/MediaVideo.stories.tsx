import type { Meta, StoryObj } from '@storybook/react';
import { MediaVideo } from './index';

export default {
  title: 'Components/MediaVideo',
  component: MediaVideo
} as Meta;

type Story = StoryObj<typeof MediaVideo>;

export const Media: Story = {
  args: {
    link: 'https://youtu.be/FyDQljKtWnI',
    title: 'vtv1'
  }
};
