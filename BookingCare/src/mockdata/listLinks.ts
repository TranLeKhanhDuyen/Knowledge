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

//doctor outstanding

import doctor1 from '@assets/doctors/kieu-dinh.png';
import doctor2 from '@assets/doctors/tra-anh-duy.jpg';
import doctor3 from '@assets/doctors/pham-chi-lang.jpg';
import doctor4 from '@assets/doctors/nguyen-van-lieu.jpg';
import doctor5 from '@assets/doctors/nguyen-tien-lang.png';
import doctor6 from '@assets/doctors/hua-thuy-vi.jpg';
import doctor7 from '@assets/doctors/nguyen-tien-thanh.png';
import doctor8 from '@assets/doctors/vu-thai-ha.jpg';
import doctor9 from '@assets/doctors/le-hong-anh.jpg';
import doctor10 from '@assets/doctors/nguyen-tuong-vu.png';
import doctor11 from '@assets/doctors/phan-vuong-huy.jpg';
import doctor12 from '@assets/doctors/nguyen-trong-hung.jpg';

//facilities images
import centalMilitary from '../assets/facilities/cental-military.jpg';
import choray from '../assets/facilities/cho-ray.jpg';
import diag from '../assets/facilities/diag.png';
import doctorcheck from '../assets/facilities/doctor-check.png';
import hungviet from '../assets/facilities/hung-viet.jpg';
import medicineAndPharmacy from '../assets/facilities/medicine-and-pharmacy.jpg';
import medlatec from '../assets/facilities/medlatec.png';
import thucuc from '../assets/facilities/thu-cuc.png';
import vietduc from '../assets/facilities/viet-duc.jpg';

//media
import vtv1 from '../assets/media/vtv1.png';
import ictnews from '../assets/media/ictnews.png';
import vnexpress from '../assets/media/vnexpress.png';
import vtcnews from '../assets/media/vtcnews.png';
import cuccntt from '../assets/media/cuccntt.png';
import infonet from '../assets/media/infonet.png';
import dantri from '../assets/media/dantri.png';

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
      variant: 'primary'
    },
    {
      image: nerve,
      variant: 'primary',
      title: 'Nerve'
    },
    {
      image: digestion,
      variant: 'primary',
      title: 'Digestion'
    },
    {
      image: heart,
      variant: 'primary',
      title: 'Heart'
    },
    {
      image: spine,
      variant: 'primary',
      title: 'Spine'
    },
    {
      image: earNoseThroat,
      variant: 'primary',
      title: 'Ear, nose, throat'
    },
    {
      image: traditional,
      variant: 'primary',
      title: 'Traditional medicine'
    },
    {
      image: acupuncture,
      variant: 'primary',
      title: 'Acupuncture'
    }
  ],

  facilities: [
    {
      image: vietduc,
      title: 'Viet Duc Friendship Hosptital'
    },
    {
      image: choray,
      title: 'Cho Ray Hospital'
    },
    {
      image: doctorcheck,
      title: 'Doctor Check - Screeing for Diseases to Live Longer'
    },
    {
      image: medicineAndPharmacy,
      title: 'Clinic of University of Midicine and Pharmacy Hospital'
    },
    {
      image: hungviet,
      title: 'Hung Viet Oncology Hospital'
    },
    {
      image: medlatec,
      title: 'MEDLATEC medical system'
    },
    {
      image: diag,
      title: 'Diag Laboratories testing center'
    },
    {
      image: thucuc,
      title: 'Thu Cuc TCI Health System'
    },
    {
      image: centalMilitary,
      title:
        'Center for Periodic Health Examnination, 108 Cental Military Hospital'
    }
  ],

  doctor: [
    {
      image: doctor1,
      title: 'Associate Professor, Dr. Kieu Dinh Hung',
      description: 'Neurology, Spine, Neurosurgery'
    },
    {
      image: doctor2,
      title: 'Doctor, SpeciaList II Tra Anh Duy',
      description: 'Andrology, Nephrology - Urology'
    },
    {
      image: doctor3,
      title: 'Doctor, Doctor Pham Chi Lang',
      description: 'Musculoskeletal, Orthopedic trauma'
    },
    {
      image: doctor4,
      title: 'Associate Professor, PhD, Doctor Nguyen Van Lieu',
      description: 'Nerve'
    },
    {
      image: doctor5,
      title: 'Excellent Physicican, Doctor CKII Nguyen Tien Lang',
      description: 'Diabetes - Endocrinilogy, Oncology, Thyroid'
    },
    {
      image: doctor6,
      title: 'Master, Doctor Hua Thuy Vi',
      description: 'Digestion, hepatitis'
    },
    {
      image: doctor7,
      title: 'Specialist II Doctor Nguyen Tien Thanh',
      description: 'Dermatology, Cosmetic dermatology'
    },
    {
      image: doctor8,
      title: 'Doctor, Doctor Vu Thai Ha',
      description: 'Dermatology, Cosmetic dermatology'
    },
    {
      image: doctor9,
      title: 'Specialist Doctor I Nguyen Tuong Vu',
      description: 'Neurology, Neurosurgery'
    },
    {
      image: doctor10,
      title: 'SpeciaList Doctor I Phan Vuong Huy Dong',
      description: 'Musculoskeletal, Orthopedic trauma'
    },
    {
      image: doctor11,
      title: 'Associate Professor, PhD, Doctor Nguyen Trong Hung',
      description: 'Nerve'
    },
    {
      image: doctor12,
      title: 'Doctor, SpeciaList II Tra Anh Duy',
      description: 'Andrology, Nephrology - Urology'
    }
  ],

  handbook: [],
  media: [
    {
      variant: 'quaternary',
      image: vtv1
    },
    {
      variant: 'quaternary',
      image: ictnews
    },
    {
      variant: 'quaternary',
      image: vnexpress
    },
    {
      variant: 'quaternary',
      image: vtcnews
    },
    {
      variant: 'quaternary',
      image: cuccntt
    },
    {
      variant: 'quaternary',
      image: infonet
    },
    {
      variant: 'quaternary',
      image: dantri
    },
    {
      variant: 'quaternary',
      image: vtv1
    }
  ]
};
