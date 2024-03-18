import { IHeaderProps } from '@types';
import logo from '../assets/logo-v3.png';
import { IHeader } from '@types';

export const LIST_NAV: IHeader = {

    width: 200,
    height: 43,
    image: logo,
    alt: 'Logo',
    items: [
      {
        id: '1',
        title: 'Specialist',
        subtitle: 'Find doctors by specialty'
      },
      {
        id: '2',
        title: 'Health facilities',
        subtitle: 'Choose a hospital or clinic'
      },
      {
        id: '3',
        title: 'Doctor',
        subtitle: 'Choose a doctor'
      },
      {
        id: '4',
        title: 'Examination package',
        subtitle: 'General examination'
      }
    ]

};
