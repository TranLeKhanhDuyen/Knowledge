import { IItemLinkProps, TItemLinkType } from '@components/ItemLink/ItemLink';

//banner
import banner1 from '@assets/banners/banner-1.png';
import banner2 from '@assets/banners/banner-2.jpg';
import banner3 from '@assets/banners/banner-3.png';
import banner4 from '@assets/banners/banner-4.png';
import banner5 from '@assets/banners/banner-5.png';
import banner6 from '@assets/banners/banner-6.jpg';

//service
import specialist from '@assets/icons/ic-specialist.png';
import remote from '@assets/icons/ic-remote.png';
import dental from '@assets/icons/ic-dental.png';
import general from '@assets/icons/ic-general.png';
import medicalTest from '@assets/icons/ic-medical-tests.png';
import mentealHeath from '@assets/icons/ic-mental-health.png';

// specicalist images
import musculoskeletal from '@assets/icons/ic-musculoskeletal.png';
import nerve from '@assets/icons/ic-nerve.png';
import digestion from '@assets/icons/ic-digestion.png';
import heart from '@assets/icons/ic-heart.png';
import earNoseThroat from '@assets/icons/ic-ear-nose-throat.png';
import spine from '@assets/icons/ic-spine.png';
import traditional from '@assets/icons/ic-traditional-medicine.png';
import acupuncture from '@assets/icons/ic-acupincture.png';

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
      image: musculoskeletal,
      title: 'Musculoskeletal',
      variant: 'secondary'
    },
    {
      image: nerve,
      variant: 'secondary',
      title: 'Nerve'
    },
    {
      image: digestion,
      variant: 'secondary',
      title: 'Digestion'
    },
    {
      image: heart,
      variant: 'secondary',
      title: 'Heart'
    },
    {
      image: spine,
      variant: 'secondary',
      title: 'Spine'
    },
    {
      image: earNoseThroat,
      variant: 'secondary',
      title: 'Ear, nose, throat'
    },
    {
      image: traditional,
      variant: 'secondary',
      title: 'Traditional medicine'
    },
    {
      image: acupuncture,
      variant: 'secondary',
      title: 'Acupuncture'
    }
  ],

  facilities: [],

  doctor: [],

  handbook: []
};
