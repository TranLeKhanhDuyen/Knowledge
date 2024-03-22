// import { TItemLinkType } from '@components/ItemLink/ItemLink';
// import { IItemHeaderProps } from '@components/ListHeader/ListHeader';

// export const LIST_HEADER: Record<TItemLinkType, IItemHeaderProps[]> = {
//   banner: [
//     {
//       text: 'Specialist'
//     }
//   ],
//   service: [
//     {
//       text: 'Service'
//     }
//   ],
//   specialist: [
//     {
//       text: 'Specialist'
//     }
//   ],
//   facilities: [
//     {
//       text: 'Facilities'
//     }
//   ],
//   doctor: [
//     {
//       text: 'Doctor'
//     }
//   ],
//   handbook: [
//     {
//       text: 'Handbook'
//     }
//   ],
//   icon: [
//     {
//       text: ''
//     }
//   ],
//   media: [
//     {
//       text: 'Media'
//     }
//   ]
// };


import { TItemLinkType } from '@components/ItemLink/ItemLink';
import { IItemHeaderProps } from '@components/ListHeader/ListHeader';

const headerTexts: Record<TItemLinkType, string> = {
  banner: 'Specialist',
  service: 'Service',
  specialist: 'Specialist',
  facilities: 'Facilities',
  doctor: 'Doctor',
  handbook: 'Handbook',
  icon: '',
  footer: '',
  media: 'Media'
};

export const LIST_HEADER: Record<TItemLinkType, IItemHeaderProps[]> = Object.keys(headerTexts).reduce((acc, key) => {
  acc[key as TItemLinkType] = [{ text: headerTexts[key as TItemLinkType] }];
  return acc;
}, {} as Record<TItemLinkType, IItemHeaderProps[]>);
