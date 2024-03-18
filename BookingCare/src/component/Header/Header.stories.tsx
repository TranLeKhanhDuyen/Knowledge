import Header from './Header';
import { Meta, Story } from '@storybook/react';
import logo from '../../assets/logo_v3.png';

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
    width: 200,
    height: 43,
    image: logo,
    alt: 'Logo',
    items: [
      {
        title: 'Specialist',
        subtitle: 'Find doctors by specialty',
      },
      {
        title: 'Health facilities',
        subtitle: 'Choose a hospital or clinic',
      },
      {
        title: 'Doctor',
        subtitle: 'Choose a doctor',
      },
      {
        title: 'Examination package',
        subtitle: 'General examination',
      },
    ],
  },
};
