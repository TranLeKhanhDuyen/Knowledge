import Header from './Header';
import { Meta, Story } from '@storybook/react';
import logo from '../../assets/logo-v3.png';

export default {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: {
        type: 'string',
      },
    },
    title: {
      defaultValue: '',
      description: 'Change title of the navbar item',
    },
    subsTitle: {
      defaultValue: '',
      description: 'Change title of the navbar item',
    },
  },
} as Meta;

type StoryType = Story<typeof Header>;

export const Default: StoryType = (args) => <Header {...args} />;

Default.args = {
  header: {
    image: logo,
    alt: 'Logo',
    items: [
      {
        id: '1',
        title: 'Specialist',
        subtitle: 'Find doctors by specialty',
      },
      {
        id: '2',
        title: 'Health facilities',
        subtitle: 'Choose a hospital or clinic',
      },
      {
        id: '3',
        title: 'Doctor',
        subtitle: 'Choose a doctor',
      },
      {
        id: '4',
        title: 'Examination package',
        subtitle: 'General examination',
      },
    ],
  },
};
