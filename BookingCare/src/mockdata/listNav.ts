import supportIcon from '@assets/icons/ic-support.svg';
import { IHeaderProps } from '@components/Header/Header';

export const LIST_NAV: IHeaderProps = {
  items: [
    {
      id: '1',
      title: 'Chuyên khoa',
      subsTitle: 'Tìm bác sĩ theo chuyên khoa'
    },
    {
      id: '2',
      title: 'Cơ sở y tế',
      subsTitle: 'Choose a hospital or clinic'
    },
    {
      id: '3',
      title: 'Bác sĩ',
      subsTitle: 'Chọn bác sĩ'
    },
    {
      id: '4',
      title: 'Cẩm nang',
      subsTitle: 'Tham khảo cẩm nang'
    }
  ],
  icon: supportIcon
};
