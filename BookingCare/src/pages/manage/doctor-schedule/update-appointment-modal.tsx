import { Button, Heading } from '@components/common'
import { Appointment } from '@services/models/appointment'
import { FC } from 'react'
import { useUpdateAppointment } from './use-update-appointment'
import { RHFSelect } from '@components/HookFormFields/Select'
import { AppointmentStatus } from '@services/models/appointment-status'
import { RHFTextField } from '@components/HookFormFields/RHFTextField'
import { FormProvider } from '@components/HookFormFields/FormProvider'
export interface UpdateAppointmentModalProps {
  appointment: Appointment
  onClose: VoidFunction
  onSubmitData: (data: Appointment) => void
}

const UpdateAppointmentModal: FC<UpdateAppointmentModalProps> = ({
  appointment,
  onClose,
  onSubmitData
}) => {
  const { methods, handleUpdate } = useUpdateAppointment(appointment, onClose)
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods

  return (
    <div className='overlay'>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleUpdate)}>
        <div className='booking-form'>
          <Heading content='QUẢN LÍ LỊCH KHÁM BỆNH' />
          <RHFSelect name='status' label='Trạng thái'>
            {Object.values(AppointmentStatus).map((status) => (
              <option key={status} value={status}>
                {status === 'PENDING'
                  ? 'Chờ duyệt'
                  : status === 'APPROVED'
                    ? 'Đã duyệt'
                    : status === 'CANCELLED'
                      ? 'Từ chối'
                      : 'Đã khám'}
              </option>
            ))}
          </RHFSelect>
          <RHFTextField
            name='diagnosis'
            label='Chuẩn đoán'
            placeholder='Nhập chuẩn đoán'
          />
          <RHFTextField
            name='prescription'
            label='Đơn thuốc'
            placeholder='Nhập đơn thuốc'
          />
          <RHFTextField
            name='description'
            label='Chi tiết'
            placeholder='Nhập chi tiết'
          />

          <div style={{ marginLeft: 'auto' }}>
            <Button
              title='Hủy'
              type='button'
              onClick={onClose}
              style={{ marginRight: 16 }}
            />
            <Button
              title='Cập nhật'
              disabled={isSubmitting}
              onClick={() => {
                const data = methods.getValues()

                const newData: Appointment = {
                  status: data.status as AppointmentStatus,
                  date: appointment.date,
                  diagnosis: data.diagnosis,
                  prescription: data.prescription,
                  description: data.description,
                  patientId: appointment.patientId,
                  patient: appointment.patient,
                  reasonForMedicalExam: appointment.reasonForMedicalExam
                }

                onSubmitData(newData)
              }}
              type='submit'
              variant='secondary'
            />
          </div>
        </div>
      </FormProvider>
    </div>
  )
}

export default UpdateAppointmentModal
