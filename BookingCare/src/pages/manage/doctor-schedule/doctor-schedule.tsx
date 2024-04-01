import { Heading } from "@components/common"

const DoctorSchedule = () => {
  return (
    <div className=' container user-manage-container'>
      <Heading
        variant='h1'
        content='LỊCH KHÁM BỆNH'
        className='text-3xl text-turquoise'
        style={{
          margin: '30px 0',
          textAlign: 'center',
          color: 'var(--turquoise-color)',
          fontSize: 'var(--font-3xl)'
        }}
      />


    </div>
  )
}

export default DoctorSchedule
