export interface IDoctor {
  id: string
  name: string
  description?: string
  schedule?: string[]
  address?: string
  price?: string
  overview?: string[]
  examination?: string[]
}

const DOCTOR: IDoctor = {
  id: '1',
  name: 'Thạc sĩ, Bác sĩ Đoàn Thị Lan',
  description:
    'Bác sĩ tư vấn dinh dưỡng cho phụ nữ mang thai và trẻ em, Nhiều năm kinh nghiệm trong lĩnh vực Tư vấn dinh dưỡng',
  schedule: ['07:30 - 08:30', '9:30 - 10:30', '11:30 - 12:30', '13:30 - 14:30']
}

export default DOCTOR
