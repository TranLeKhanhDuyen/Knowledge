import { IItemLinkProps, TItemLinkType } from '@components/ItemLink/ItemLink'

//banner
import banner1 from '@assets/banners/banner-1.png'
import banner2 from '@assets/banners/banner-2.jpg'
import banner3 from '@assets/banners/banner-3.png'
import banner4 from '@assets/banners/banner-4.png'
import banner5 from '@assets/banners/banner-5.png'
import banner6 from '@assets/banners/banner-6.jpg'

//service
import specialist from '@assets/icons/ic-specialist.png'
import remote from '@assets/icons/ic-remote.png'
import dental from '@assets/icons/ic-dental.png'
import general from '@assets/icons/ic-general.png'
import medicalTest from '@assets/icons/ic-medical-tests.png'
import mentealHeath from '@assets/icons/ic-mental-health.png'

// specicalist images
import musculoskeletal from '@assets/icons/ic-musculoskeletal.png'
import nerve from '@assets/icons/ic-nerve.png'
import digestion from '@assets/icons/ic-digestion.png'
import heart from '@assets/icons/ic-heart.png'
import earNoseThroat from '@assets/icons/ic-ear-nose-throat.png'
import spine from '@assets/icons/ic-spine.png'
import traditional from '@assets/icons/ic-traditional-medicine.png'
import acupuncture from '@assets/icons/ic-acupincture.png'

//doctor outstanding
import doctor1 from '@assets/doctors/kieu-dinh.png'
import doctor2 from '@assets/doctors/tra-anh-duy.jpg'
import doctor3 from '@assets/doctors/pham-chi-lang.jpg'
import doctor4 from '@assets/doctors/nguyen-van-lieu.jpg'
import doctor5 from '@assets/doctors/nguyen-tien-lang.png'
import doctor6 from '@assets/doctors/hua-thuy-vi.jpg'
import doctor7 from '@assets/doctors/nguyen-tien-thanh.png'
import doctor8 from '@assets/doctors/vu-thai-ha.jpg'
import doctor9 from '@assets/doctors/le-hong-anh.jpg'
import doctor10 from '@assets/doctors/nguyen-tuong-vu.png'
import doctor11 from '@assets/doctors/phan-vuong-huy.jpg'
import doctor12 from '@assets/doctors/nguyen-trong-hung.jpg'

//facilities images
import centalMilitary from '@assets/facilities/cental-military.jpg'
import choray from '@assets/facilities/cho-ray.jpg'
import diag from '@assets/facilities/diag.png'
import doctorcheck from '@assets/facilities/doctor-check.png'
import hungviet from '@assets/facilities/hung-viet.jpg'
import medicineAndPharmacy from '@assets/facilities/medicine-and-pharmacy.jpg'
import medlatec from '@assets/facilities/medlatec.png'
import thucuc from '@assets/facilities/thu-cuc.png'
import vietduc from '@assets/facilities/viet-duc.jpg'

//hanbook
import handbook1 from '@assets/handbook/dark-eye.png'
import handbook2 from '@assets/handbook/melasmacost.png'
import handbook3 from '@assets/handbook/injection.png'
import handbook4 from '@assets/handbook/dark-eye2.png'
import handbook5 from '@assets/handbook/hifu-upgrade.png'
import handbook6 from '@assets/handbook/hifu-upgrade2.png'
import handbook7 from '@assets/handbook/skin-rejuvenation.png'
import handbook8 from '@assets/handbook/top7-melasma.png'
import handbook9 from '@assets/handbook/top7-rejuvenation.png'

//media
import vtv1 from '@assets/media/vtv1.png'
import ictnews from '@assets/media/ictnews.png'
import vnexpress from '@assets/media/vnexpress.png'
import vtcnews from '@assets/media/vtcnews.png'
import cuccntt from '@assets/media/cuccntt.png'
import infonet from '@assets/media/infonet.png'
import dantri from '@assets/media/dantri.png'

//footer
import tiktok from '@assets/icons/ic-tiktok.svg'
import facebook from '@assets/icons/ic-facebook.svg'
import youtube from '@assets/icons/ic-youtube.svg'

export const LIST_LINKS: Record<TItemLinkType, IItemLinkProps[]> = {
  banner: [
    { image: banner1, path: '', type: 'banner' },
    { image: banner2, path: '', type: 'banner' },
    { image: banner3, path: '', type: 'banner' },
    { image: banner4, path: '', type: 'banner' },
    { image: banner5, path: '', type: 'banner' },
    { image: banner6, path: '', type: 'banner' }
  ],
  service: [
    {
      image: specialist,
      headingProps: {
        content: 'Specialist Examnination'
      },
      path: 'service'
    },
    {
      image: remote,
      headingProps: {
        content: 'Remote Examnination'
      },
      path: 'service'
    },
    {
      image: dental,
      headingProps: {
        content: 'Dental Examnination'
      },
      path: 'service'
    },
    {
      image: general,
      headingProps: {
        content: 'General Examnination'
      },
      path: 'service'
    },
    {
      image: medicalTest,
      headingProps: {
        content: 'Medical tests'
      },
      path: 'service'
    },
    {
      image: mentealHeath,
      headingProps: {
        content: 'Mental heath'
      },
      path: 'service'
    }
  ],

  specialist: [
    {
      image: musculoskeletal,
      headingProps: {
        content: 'Musculoskeletal'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: nerve,
      headingProps: {
        content: 'Nerve'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: digestion,
      headingProps: {
        content: 'Digestion'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: heart,
      headingProps: {
        content: 'Heart'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: spine,
      headingProps: {
        content: 'Spine'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: earNoseThroat,
      headingProps: {
        content: 'Ear, nose, throat'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: traditional,
      headingProps: {
        content: 'Traditional medicine'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: acupuncture,
      headingProps: {
        content: 'Acupuncture'
      },
      type: 'specialist',
      path: ''
    }
  ],

  facilities: [
    {
      image: vietduc,
      headingProps: {
        content: 'Viet Duc Friendship Hosptital'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: choray,
      headingProps: {
        content: 'Cho Ray Hospital'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: doctorcheck,
      headingProps: {
        content: 'Doctor Check - Screeing for Diseases to Live Longer'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: medicineAndPharmacy,
      headingProps: {
        content: 'Clinic of University of Midicine and Pharmacy Hospital'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: hungviet,
      headingProps: {
        content: 'Hung Viet Oncology Hospital'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: medlatec,
      headingProps: {
        content: 'MEDLATEC medical system'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: diag,
      headingProps: {
        content: 'Diag Laboratories testing center'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: thucuc,
      headingProps: {
        content: 'Thu Cuc TCI Health System'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: centalMilitary,
      headingProps: {
        content:
          'Center for Periodic Health Examnination, 108 Cental Military Hospital'
      },
      type: 'facilities',
      path: ''
    }
  ],

  doctor: [
    {
      image: doctor1,
      headingProps: {
        content: 'Associate Professor, Dr. Kieu Dinh Hung'
      },
      textProps: {
        content: 'Neurology, Spine, Neurosurgery'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor2,
      headingProps: {
        content: 'Doctor, SpeciaList II Tra Anh Duy'
      },
      textProps: {
        content: 'Andrology, Nephrology - Urology'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor3,
      headingProps: {
        content: 'Doctor, Doctor Pham Chi Lang'
      },
      textProps: {
        content: 'Musculoskeletal, Orthopedic trauma'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor4,
      headingProps: {
        content: 'Associate Professor, PhD, Doctor Nguyen Van Lieu'
      },
      textProps: {
        content: 'Nerve'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor5,
      headingProps: {
        content: 'Excellent Physicican, Doctor CKII Nguyen Tien Lang'
      },
      textProps: {
        content: 'Diabetes - Endocrinilogy, Oncology, Thyroid'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor6,
      headingProps: {
        content: 'Master, Doctor Hua Thuy Vi'
      },
      textProps: {
        content: 'Digestion, hepatitis'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor7,
      headingProps: {
        content: 'Specialist II Doctor Nguyen Tien Thanh'
      },
      textProps: {
        content: 'Dermatology, Cosmetic dermatology'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor8,
      headingProps: {
        content: 'Doctor, Doctor Vu Thai Ha'
      },
      textProps: {
        content: 'Dermatology, Cosmetic dermatology'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor9,
      headingProps: {
        content: 'Specialist Doctor I Nguyen Tuong Vu'
      },
      textProps: {
        content: 'Neurology, Neurosurgery'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor10,
      headingProps: {
        content: 'SpeciaList Doctor I Phan Vuong Huy Dong'
      },
      textProps: {
        content: 'Musculoskeletal, Orthopedic trauma'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor11,
      headingProps: {
        content: 'Associate Professor, PhD, Doctor Nguyen Trong Hung'
      },
      textProps: {
        content: 'Nerve'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor12,
      headingProps: {
        content: 'Doctor, SpeciaList II Tra Anh Duy'
      },
      textProps: {
        content: 'Andrology, Nephrology - Urology'
      },
      type: 'doctor',
      path: 'doctor'
    }
  ],
  icon: [],
  handbook: [
    {
      image: handbook1,
      headingProps: {
        content:
          'How much does it cost to permanently remove dark eye circles? Service price list of 5 good addresses in Hanoi'
      },
      type: 'handbook'
    },
    {
      image: handbook2,
      headingProps: {
        content:
          'How much does laser treatment of melasma cost? Price list at 6 reputable addresses in Hanoi'
      },
      type: 'handbook'
    },
    {
      image: handbook3,
      headingProps: {
        content:
          'How much does Profhilo injection cost? Cost of Profhilo injection at 3 reputable addresses in Hanoi'
      },
      type: 'handbook'
    },
    {
      image: handbook4,
      headingProps: {
        content:
          'How much does it cost to remove dark eye circles in Ho Chi Minh City?'
      },
      type: 'handbook'
    },
    {
      image: handbook5,
      headingProps: {
        content:
          'Is HiFu facelift expensive? HiFu upgrade costs at 5 reputable addresses in Hanoi'
      },
      type: 'handbook'
    },
    {
      image: handbook6,
      headingProps: {
        content:
          'How much does Hifu lift cost? Costs at 6 reputable addresses in Ho Chi Minh City'
      },
      type: 'handbook'
    },
    {
      image: handbook7,
      headingProps: {
        content: 'Top 6 reputable skin rejuvenation addresses in Hanoi'
      },
      type: 'handbook'
    },
    {
      image: handbook8,
      headingProps: {
        content: 'Top 7 good places to treat melasma in Hanoi'
      },
      type: 'handbook'
    },
    {
      image: handbook9,
      headingProps: {
        content:
          'Top 7 reputable skin rejuvenation addresses in Ho Chi Minh City'
      },
      type: 'handbook'
    }
  ],

  footer: [
    {
      type: 'footer',
      image: tiktok,
      path: ''
    },
    {
      type: 'footer',
      image: facebook,
      path: ''
    },
    {
      type: 'footer',
      image: youtube,
      path: ''
    }
  ],
  media: [
    {
      type: 'media',
      image: vtv1,
      path: ''
    },
    {
      type: 'media',
      image: ictnews,
      path: ''
    },
    {
      type: 'media',
      image: vnexpress,
      path: ''
    },
    {
      type: 'media',
      image: vtcnews,
      path: ''
    },
    {
      type: 'media',
      image: cuccntt,
      path: ''
    },
    {
      type: 'media',
      image: infonet,
      path: ''
    },
    {
      type: 'media',
      image: dantri,
      path: ''
    },
    {
      type: 'media',
      image: vtv1,
      path: ''
    }
  ]
}
