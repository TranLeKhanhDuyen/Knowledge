import { IHeaderProps } from '@types';
import logo from '../assets/logo-v3.png'

export const LIST_HEADER: IHeaderProps[] ={
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
}

