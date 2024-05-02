import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import styles from '@/components/blog/article-date.module.scss'

import React, { useEffect, useRef } from 'react'

const en = {
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm aa',
  firstDay: 0,
}

function AirDatepickerReact(props) {
  let $input = useRef(null)
  let dp = useRef(null)

  useEffect(() => {
    dp.current = new AirDatepicker($input.current, { ...props, locale: en })
  }, [])

  useEffect(() => {
    dp.current.update({ ...props, locale: en })
  }, [props])

  return (
    <input
      className={styles[`input-style`]}
      placeholder="請選擇日期區間"
      ref={$input}
    />
  )
}

export default AirDatepickerReact
