import vtv1 from '../assets/media/vtv1.png';
import ictnews from '../assets/media/ictnews.png';
import vnexpress from '../assets/media/vnexpress.png';
import vtcnews from '../assets/media/vtcnews.png';
import cuccntt from '../assets/media/cuccntt.png';
import infonet from '../assets/media/infonet.png';
import dantri from '../assets/media/dantri.png';
import { IListMedia } from '@components/Media/ItemMedia/ItemMedia';
import { IVideoMedia } from '@components/Media/Video/Video';

export const LIST_MEDIA: IListMedia[] = [
  {
    items: [
      {
        link: 'https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.html',
        imagePath: vtv1,
        title: 'vtv1'
      },
      {
        link: 'https://vietnamnet.vn/thong-tin-truyen-thong',
        imagePath: ictnews,
        title: 'ictnews'
      },
      {
        link: 'https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html',
        imagePath: vnexpress,
        title: 'vnexpress'
      },
      {
        link: 'https://vtcnews.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html',
        imagePath: vtcnews,
        title: 'vtcnews'
      },
      {
        link: 'https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm',
        imagePath: cuccntt,
        title: 'cuccntt'
      },
      {
        link: 'https://infonet.vietnamnet.vn/da-co-hon-20000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html',
        imagePath: infonet,
        title: 'infonet'
      },
      {
        link: 'https://dantri.com.vn/nhan-tai-dat-viet/san-pham-nen-tang-dat-kham-booking-care-201908201625624751.htm',
        imagePath: dantri,
        title: 'dantri'
      },
      {
        link: 'https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.html',
        imagePath: vtv1,
        title: 'vtv1'
      }
    ]
  }
];

export const MEDIA_VIDEO: IVideoMedia[] = [
  {
    link: 'https://www.youtube.com/embed/FyDQljKtWnI?si=mg6VMSm1mRjSxFhg',
    title: 'vtv1'
  }
];
