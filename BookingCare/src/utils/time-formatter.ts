import { format, formatDistanceToNow, getTime } from 'date-fns'
import moment from 'moment'

export const fDate = (date: Date) => {
  return moment(date).format('DD/MM/YYYY')
}

export const fDateTime = (date: Date) => {
  return moment(date).format('DD/MM/YYYY HH:mm:ss')
}

export const fTimestamp = (date: Date) => {
  return getTime(new Date(date))
}

export const fDateTimeSuffix = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}

export const fToNow = (date: Date) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  })
}
