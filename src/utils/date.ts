import { format, parseISO } from 'date-fns'

const default_date_format = 'yyyy-MM-dd HH:mm'

export const formatDate = (date: string, formatStr = default_date_format) => {
  return format(parseISO(date), formatStr)
}
