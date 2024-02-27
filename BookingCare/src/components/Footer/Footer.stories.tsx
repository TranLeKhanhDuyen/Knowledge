import type { Meta, StoryObj } from '@storybook/react';
import ItemFooter from './index';

import facebook from '@assets/icons/ic-facebook.svg';
import tiktok from '@assets/icons/ic-tiktok.svg';
import youtube from '@assets/icons/ic-youtube.svg';

export default {
  title: 'Components/ItemFooter',
  component: ItemFooter
} as Meta;

type Story = StoryObj<typeof ItemFooter>;

export const Footer: Story = {
  args: {
    items: [
      {
        imagePath: tiktok,
        title: 'tiktok',
        link: 'https://www.tiktok.com/@songkhoesuotdoi'
      },
      {
        imagePath: facebook,
        title: 'facebook',
        link: 'https://www.facebook.com/bookingcare'
      },
      {
        imagePath: youtube,
        title: 'youtube',
        link: 'https://www.youtube.com/channel/UC9l2RhMEPCIgDyGCH8ijtPQ'
      }
    ]
  }
};
