import facebook from '../assets/icons/ic-facebook.svg';
import tiktok from '../assets/icons/ic-tiktok.svg';
import youtube from '../assets/icons/ic-youtube.svg';
import { IListFooter } from '@components/Footer';

export const LIST_FOOTER: IListFooter = {
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
};
