// service images
import specialist from '../assets/icons/ic-specialist.png';
import remote from '../assets/icons/ic-remote.png';
import dental from '../assets/icons/ic-dental.png';
import general from '../assets/icons/ic-general.png';
import medicalTest from '../assets/icons/ic-medical-tests.png';
import mentealHeath from '../assets/icons/ic-mental-health.png';

// specicalist images
import musculoskeletal from '../assets/icons/ic-musculoskeletal.png';
import nerve from '../assets/icons/ic-nerve.png';
import digestion from '../assets/icons/ic-digestion.png';
import heart from '../assets/icons/ic-heart.png';
import earNoseThroat from '../assets/icons/ic-ear-nose-throat.png';
import spine from '../assets/icons/ic-spine.png';
import traditional from '../assets/icons/ic-traditional-medicine.png';
import acupuncture from '../assets/icons/ic-acupincture.png';

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
import { IListLink } from '@components/ListLink/ItemLink/ItemLink';


export const LIST_LINK: IListLink[] = [
  {
    items: [
      {
        imagePath: specialist,
        title: 'Specialist Examnination',
        onClick: () => {}
      },
      {
        imagePath: remote,
        title: 'Remote Examnination',
        onClick: () => {}
      },
      {
        imagePath: dental,
        title: 'Dental Examnination',
        onClick: () => {}
      },
      {
        imagePath: general,
        title: 'General Examnination',
        onClick: () => {}
      },
      {
        imagePath: medicalTest,
        title: 'Medical tests',
        onClick: () => {}
      },
      {
        imagePath: mentealHeath,
        title: 'Mental heath',
        onClick: () => {}
      }
    ],
    type: 'service'
  },
  {
    items: [
      {
        imagePath: musculoskeletal,
        title: 'Musculoskeletal'
      },
      {
        imagePath: nerve,
        title: 'Nerve'
      },
      {
        imagePath: digestion,
        title: 'Digestion'
      },
      {
        imagePath: heart,
        title: 'Heart'
      },
      {
        imagePath: spine,
        title: 'Spine'
      },
      {
        imagePath: earNoseThroat,
        title: 'Ear, nose, throat'
      },
      {
        imagePath: traditional,
        title: 'Traditional medicine'
      },
      {
        imagePath: acupuncture,
        title: 'Acupuncture'
      }
    ],
    type: 'specialist'
  },
  {
    items: [
      {
        imagePath: vietduc,
        title: 'Viet Duc Friendship Hosptital'
      },
      {
        imagePath: choray,
        title: 'Cho Ray Hospital'
      },
      {
        imagePath: doctorcheck,
        title: 'Doctor Check - Screeing for Diseases to Live Longer'
      },
      {
        imagePath: medicineAndPharmacy,
        title: 'Clinic of University of Midicine and Pharmacy Hospital'
      },
      {
        imagePath: hungviet,
        title: 'Hung Viet Oncology Hospital'
      },
      {
        imagePath: medlatec,
        title: 'MEDLATEC medical system'
      },
      {
        imagePath: diag,
        title: 'Diag Laboratories testing center'
      },
      {
        imagePath: thucuc,
        title: 'Thu Cuc TCI Health System'
      },
      {
        imagePath: centalMilitary,
        title:
          'Center for Periodic Health Examnination, 108 Cental Military Hospital'
      }
    ],
    type: 'facilities'
  }
];
