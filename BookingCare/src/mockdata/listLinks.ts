import { IItemLinkProps, TItemLinkType } from '@components/ItemLink/ItemLink';
import image1 from '@assets/icons/ic-general.png';
import image2 from '@assets/icons/ic-mental-health.png';
import image3 from '@assets/icons/ic-general.png';
import image4 from '@assets/icons/ic-acupincture.png';
import image5 from '@assets/icons/ic-digestion.png';
import image6 from '@assets/icons/ic-ear-nose-throat.png';
import image7 from '@assets/facilities/cental-military.jpg';
import image8 from '@assets/facilities/doctor-check.png';
import image9 from '@assets/facilities/medicine-and-pharmacy.jpg';
import image10 from '@assets/doctors/hua-thuy-vi.jpg';
import image11 from '@assets/doctors/kieu-dinh.png';
import image12 from '@assets/doctors/nguyen-tien-lang.png';
import image13 from '@assets/handbook/dark-eye.png';
import image14 from '@assets/handbook/dark-eye2.png';
import image15 from '@assets/handbook/hifu-upgrade2.png';

export const LIST_LINKS: Record<TItemLinkType, IItemLinkProps[]> = {
  service: [
    {
      image: image1,
      title: 'Service 1',
      description: 'Description 1 for Service 1'
    },
    {
      image: image2,
      title: 'Service 2',
      description: 'Description 2 for Service 2'
    },
    {
      image: image3,
      title: 'Service 3',
      description: 'Description 3 for Service 3'
    }
  ],
  specialist: [
    {
      image: image4,
      title: 'Specialist 1',
      description: 'Description 1 for Specialist 1'
    },
    {
      image: image5,
      title: 'Specialist 2',
      description: 'Description 2 for Specialist 2'
    },
    {
      image: image6,
      title: 'Specialist 3',
      description: 'Description 3 for Specialist 3'
    }
  ],
  facilities: [
    {
      image: image7,
      title: 'Facility 1',
      description: 'Description 1 for Facility 1',
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
