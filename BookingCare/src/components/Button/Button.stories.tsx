import type { Meta, StoryObj } from '@storybook/react';

import specialist from '../../assets/icons/ic-specialist.png';
import remote from '../../assets/icons/ic-remote.png';
import dental from '../../assets/icons/ic-dental.png';
import general from '../../assets/icons/ic-general.png';
import medicalTest from '../../assets/icons/ic-medical-tests.png';
import mentealHeath from '../../assets/icons/ic-mental-health.png';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    items: [
      {
        imagePath: specialist,
        title: 'Specialist Examnination'
      },
      {
        imagePath: remote,
        title: 'Remote Examnination'
      },
      {
        imagePath: dental,
        title: 'Dental Examnination'
      },
      {
        imagePath: general,
        title: 'General Examnination'
      },
      {
        imagePath: medicalTest,
        title: 'Medical tests'
      },
      {
        imagePath: mentealHeath,
        title: 'Mental heath'
      }
    ]
  }
};
