import Card from '@components/Card'
import TableBody from '@components/Table/TableBody'
import TableCell from '@components/Table/TableCell'
import TableHead, { XTable } from '@components/Table/TableHead'
import TableRow from '@components/Table/TableRow'
import { Appointment } from '@services/models/appointment'
import { IPagination } from '@services/responses/pagination'
import { FC } from 'react'
import AppointmentTableRow from './appointment-table-row'
import Pagination from '@components/Pagination'

export interface AppointmentTableProps {
  appointments: Array<Appointment>
  pagination: IPagination
  onPageChange(page: number): void
  onEdit?(appointment: Appointment): void
}

const AppointmentTable: FC<AppointmentTableProps> = ({
  appointments,
  pagination,
  onPageChange,
  onEdit
}) => {
  return (
    <Card style={{ overflowX: 'auto' }}>
      <XTable
        style={{
          width: '100%',
          borderBottom: 'solid 1px gray'
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell elType='th'>Tên người khám</TableCell>
            <TableCell elType='th'>Email</TableCell>
            <TableCell elType='th'>Số điện thoại</TableCell>
            <TableCell elType='th'>Ngày sinh</TableCell>
            <TableCell elType='th'>Lý do khám bệnh</TableCell>
            <TableCell elType='th'>Ngày hẹn</TableCell>
            <TableCell elType='th' textAlign='center'>
              Trạng thái
            </TableCell>
            <TableCell elType='th'>Chẩn đoán</TableCell>
            <TableCell elType='th'>Đơn thuốc</TableCell>
            <TableCell elType='th'>Chi tiết</TableCell>
            <TableCell elType='th'>Chỉnh sửa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <AppointmentTableRow
              key={appointment.id}
              appointment={appointment}
              onEdit={() => {
                onEdit?.(appointment)
              }}
            />
          ))}
        </TableBody>
      </XTable>
      <div
        style={{
          width: '100%',
          margin: '16px',
          position: 'relative'
        }}
      >
        <Pagination
          page={pagination.currentPage}
          totalPage={pagination.lastPage}
          onPageChange={onPageChange}
        />
      </div>
    </Card>
  )
}

export default AppointmentTable
