const moment = require('moment')
const slugify = require('slug')

export const capitalize = (val) => val.charAt(0).toUpperCase() + val.slice(1)

export const currency = (val) => val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

export const date = (val, locale = 'en') => {
  moment.locale(locale)
  return moment(val).format('Do MMMM YYYY')
}

export const time = (val) => val ? moment(val).format('hh:mm') : ''

export const dateTime = (val) => val ? moment(val).format('HH:mm DD-MM-YYYY') : ''

export const slug = (val) => slugify(val)