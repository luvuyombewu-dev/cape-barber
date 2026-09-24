const SHOP_NAME = 'Cape Barber'
const SHOP_LOCATION = 'Cape Town, Western Cape'
const SHOP_DESCRIPTION =
  'Cape Barber appointment. Professional cuts, fades and grooming services.'

function formatGoogleDate(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function createDateTime(dateString, timeString) {
  return new Date(`${dateString}T${timeString}:00`)
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60 * 1000)
}

export function createCalendarData({
  service,
  barber,
  date,
  time,
}) {
  const startDate = createDateTime(date, time)

  const endDate = addMinutes(startDate, service.duration)

  const title = `${service.name} — ${SHOP_NAME}`

  const details = [
    SHOP_DESCRIPTION,
    `Service: ${service.name}`,
    `Barber: ${barber.name}`,
    `Duration: ${service.duration} minutes`,
    `Price: R${service.price}`,
  ].join('\n')

  return {
    title,
    details,
    location: SHOP_LOCATION,
    startDate,
    endDate,
  }
}

export function openGoogleCalendar({
  title,
  details,
  location,
  startDate,
  endDate,
}) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`,
    details,
    location,
  })

  window.open(
    `https://calendar.google.com/calendar/render?${params.toString()}`,
    '_blank',
    'noopener,noreferrer',
  )
}

export function downloadAppleCalendarFile({
  title,
  details,
  location,
  startDate,
  endDate,
}) {
  const formatICSDate = (date) =>
    date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

  const escapeICS = (value) =>
    String(value)
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;')

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Cape Barber//Booking//EN',
    'BEGIN:VEVENT',
    `DTSTART:${formatICSDate(startDate)}`,
    `DTEND:${formatICSDate(endDate)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(details)}`,
    `LOCATION:${escapeICS(location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([icsContent], {
    type: 'text/calendar;charset=utf-8',
  })

  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'cape-barber-appointment.ics'

  document.body.appendChild(link)
  link.click()
  link.remove()

  URL.revokeObjectURL(url)
}