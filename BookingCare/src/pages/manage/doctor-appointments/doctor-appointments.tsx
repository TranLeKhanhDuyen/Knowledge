import { usePagination } from '@hooks/use-pagination'
import { useGetDoctorAppointments } from './use-get-doctor-appointments'
import AppointmentTable from './appointment-table'
import { Heading } from '@components/common'
import { useState } from 'react'
import { Appointment } from '@services/models/appointment'
import { useToggle } from '@hooks/use-toggle'
import UpdateAppointmentModal from '../doctor-schedule/update-appointment-modal'

const DoctorAppointments = () => {
  const { page, limit, onPageChange } = usePagination()
  const { data, pagination ,setData} = useGetDoctorAppointments({ page, limit })
  const [openModal, toggleModal] = useToggle()
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment>()

  const updateAppointmentInList = (updatedAppointment: Appointment) => {
    setData(
      data.map((appointment: Appointment) => {
        if (appointment.patientId === updatedAppointment.patientId) {
          return updatedAppointment
        }
        return appointment
      })
    )
  }

  return (
    <div className='container'>
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
      <AppointmentTable
        appointments={data}
        pagination={pagination}
        onPageChange={onPageChange}
        onEdit={(appointment) => {
          setSelectedAppointment(appointment)
          toggleModal()
        }}
      />
      {openModal && selectedAppointment && (
        <UpdateAppointmentModal
          appointment={selectedAppointment!}
          onClose={toggleModal}
          onSubmitData={(updatedData) => {
            console.log('data => ', updatedData)
            updateAppointmentInList(updatedData)
          }}
        />
      )}
    </div>
  )
}

export default DoctorAppointments
