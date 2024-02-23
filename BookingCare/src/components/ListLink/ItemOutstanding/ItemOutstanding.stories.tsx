import type { Meta, StoryObj } from '@storybook/react';
import ItemOutstanding from './index';

import doctor1 from '../../../assets/doctors/KieuDing.png';
import doctor2 from '../../../assets/doctors/TraAnhDuy.jpg';
import doctor3 from '../../../assets/doctors/PhamChiLang.jpg';
import doctor4 from '../../../assets/doctors/NguyenVanLieu.jpg';
import doctor5 from '../../../assets/doctors/NguyenTienLang.png';
import doctor6 from '../../../assets/doctors/HuaThuyVi.jpg';
import doctor7 from '../../../assets/doctors/NguyenTienLang.png';
import doctor8 from '../../../assets/doctors/VuThaiha.jpg';
import doctor9 from '../../../assets/doctors/LeHongAnh.jpg';
import doctor10 from '../../../assets/doctors/NguyenTuongVu.png';
import doctor11 from '../../../assets/doctors/PhanVuongHuy.jpg';
import doctor12 from '../../../assets/doctors/NguyenTrongHung.jpg';

// service images

export default {
  title: 'Components/ItemOutstanding',
  component: ItemOutstanding
} as Meta;

type Story = StoryObj<typeof ItemOutstanding>;

export const DoctorOutstanding: Story = {
  args: {
    items: [
      {
        imagePath: doctor1,
        title: 'Associate Professor, Dr. Kieu Dinh Hung',
        describe: 'Neurology, Spine, Neurosurgery'
      },
      {
        imagePath: doctor2,
        title: 'Doctor, SpeciaList II Tra Anh Duy',
        describe: 'Andrology, Nephrology - Urology'
      },
      {
        imagePath: doctor3,
        title: 'Doctor, Doctor Pham Chi Lang',
        describe: 'Musculoskeletal, Orthopedic trauma'
      },
      {
        imagePath: doctor4,
        title: 'Associate Professor, PhD, Doctor Nguyen Van Lieu',
        describe: 'Nerve'
      },
      {
        imagePath: doctor5,
        title: 'Excellent Physicican, Doctor CKII Nguyen Tien Lang',
        describe: 'Diabetes - Endocrinilogy, Oncology, Thyroid'
      },
      {
        imagePath: doctor6,
        title: 'Master, Doctor Hua Thuy Vi',
        describe: 'Digestion, hepatitis'
      },
      {
        imagePath: doctor7,
        title: 'Specialist II Doctor Nguyen Tien Thanh',
        describe: 'Dermatology, Cosmetic dermatology'
      },
      {
        imagePath: doctor8,
        title: 'Doctor, Doctor Vu Thai Ha',
        describe: 'Dermatology, Cosmetic dermatology'
      },
      {
        imagePath: doctor9,
        title: 'Specialist Doctor I Nguyen Tuong Vu',
        describe: 'Neurology, Neurosurgery'
      },
      {
        imagePath: doctor10,
        title: 'SpeciaList Doctor I Phan Vuong Huy Dong',
        describe: 'Musculoskeletal, Orthopedic trauma'
      },
      {
        imagePath: doctor11,
        title: 'Associate Professor, PhD, Doctor Nguyen Trong Hung',
        describe: 'Nerve'
      },
      {
        imagePath: doctor12,
        title: 'Doctor, SpeciaList II Tra Anh Duy',
        describe: 'Andrology, Nephrology - Urology'
      }
    ]
  }
};
