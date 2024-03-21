import supportIcon from '@assets/icons/ic-support.svg';
import { IHeaderProps } from '@components/Header/Header';

export const LIST_NAV: IHeaderProps = {
  items: [
    {
      id: '1',
      title: 'Specialist',
      subsTitle: 'Find doctors by specialty'
    },
    {
      id: '2',
      title: 'Health facilities',
      subsTitle: 'Choose a hospital or clinic'
    },
    {
      id: '3',
      title: 'Doctor',
      subsTitle: 'Choose a doctor'
    },
    {
      id: '4',
      title: 'Examination package',
      subsTitle: 'General examination'
    }
  ],
  icon: supportIcon
};
