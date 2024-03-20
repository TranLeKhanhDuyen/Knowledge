import { IItemLinkProps, TItemLinkType } from '@components/ItemLink/ItemLink';
import image1 from '@assets/icons/ic-general.png';
import image2 from '@assets/icons/ic-mental-health.png';
import image3 from '@assets/icons/ic-general.png';
import image7 from '@assets/facilities/cental-military.jpg';
import image8 from '@assets/facilities/doctor-check.png';
import image9 from '@assets/facilities/medicine-and-pharmacy.jpg';
import image10 from '@assets/doctors/hua-thuy-vi.jpg';
import image11 from '@assets/doctors/kieu-dinh.png';
import image12 from '@assets/doctors/nguyen-tien-lang.png';
import image13 from '@assets/handbook/dark-eye.png';
import image14 from '@assets/handbook/dark-eye2.png';
import image15 from '@assets/handbook/hifu-upgrade2.png';

import banner1 from '@assets/banners/banner-1.png';
import banner2 from '@assets/banners/banner-2.jpg';
import banner3 from '@assets/banners/banner-3.png';
import banner4 from '@assets/banners/banner-4.png';
import banner5 from '@assets/banners/banner-5.png';
import banner6 from '@assets/banners/banner-6.jpg';

import specialist from '../assets/icons/ic-specialist.png';
import remote from '../assets/icons/ic-remote.png';
import dental from '../assets/icons/ic-dental.png';
import general from '../assets/icons/ic-general.png';
import medicalTest from '../assets/icons/ic-medical-tests.png';
import mentealHeath from '../assets/icons/ic-mental-health.png';

export const LIST_LINKS: Record<TItemLinkType, IItemLinkProps[]> = {
  banner: [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
    { image: banner5 },
    { image: banner6 }
  ],
  service: [
    {
      image: specialist,
      title: 'Specialist Examnination',
      onClick: () => {}
    },
    {
      image: remote,
      title: 'Remote Examnination',
      onClick: () => {}
    },
    {
      image: dental,
      title: 'Dental Examnination',
      onClick: () => {}
    },
    {
      image: general,
      title: 'General Examnination',
      onClick: () => {}
    },
    {
      image: medicalTest,
      title: 'Medical tests',
      onClick: () => {}
    },
    {
      image: mentealHeath,
      title: 'Mental heath',
      onClick: () => {}
    }
  ],
  specialist: [
    {
      image: image1,
      title: 'Title 1',
      description: 'Description 1',
      variant: 'primary',
      width: '329px',
      height: '157px'
    },
    {
      image: image2,
      title: 'Title 2',
      description: 'Description 2',
      variant: 'primary',
      width: '329px',
      height: '157px'
    },
    {
      image: image3,
      title: 'Title 3',
      description: 'Description 3',
      variant: 'primary',
      width: '329px',
      height: '157px'
    },
    {
      image: image2,
      title: 'Title 3',
      description: 'Description 3',
      variant: 'primary',
      width: '329px',
      height: '157px'
    },
    {
      image: image1,
      title: 'Title 3',
      description: 'Description 3',
      variant: 'primary',
      width: '329px',
      height: '157px'
    },
    {
      image: image1,
      title: 'Title 3',
      description: 'Description 3',
      variant: 'primary',
      width: '329px',
      height: '157px'
    }
  ],
  facilities: [
    {
      image: image7,
      title: 'Facility 1',
      description: 'Description 1 for Facility 1'
    },
    {
      image: image8,
      title: 'Facility 2',
      description: 'Description 2 for Facility 2'
    },
    {
      image: image9,
      title: 'Facility 3',
      description: 'Description 3 for Facility 3'
    }
  ],
  doctor: [
    {
      image: image10,
      title: 'Doctor 1',
      description: 'Description 1 for Doctor 1'
    },
    {
      image: image11,
      title: 'Doctor 2',
      description: 'Description 2 for Doctor 2'
    },
    {
      image: image12,
      title: 'Doctor 3',
      description: 'Description 3 for Doctor 3'
    }
  ],
  handbook: [
    {
      image: image13,
      title: 'Handbook 1',
      description: 'Description 1 for Handbook 1'
    },
    {
      image: image14,
      title: 'Handbook 2',
      description: 'Description 2 for Handbook 2'
    },
    {
      image: image15,
      title: 'Handbook 3',
      description: 'Description 3 for Handbook 3'
    }
  ]
};
