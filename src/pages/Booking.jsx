import { useState } from 'react'
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Scissors,
} from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import services from '../data/services'
import barbers from '../data/barbers'
import {
  createCalendarData,
  openGoogleCalendar,
  downloadAppleCalendarFile,
} from '../utils/calendar'

const WEEKDAY_TIMES = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
]

const SATURDAY_TIMES = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
]

function getDayOfWeek(dateString) {
  if (!dateString) {
    return null
  }

  return new Date(`${dateString}T00:00:00`).getDay()
}

function getAvailableTimes(dateString, selectedService) {
  const day = getDayOfWeek(dateString)

  if (day === 0 || !selectedService) {
    return []
  }

  const times = day === 6 ? SATURDAY_TIMES : WEEKDAY_TIMES

  return times.filter((time) => {
    const start = new Date(`${dateString}T${time}:00`)

    const end = new Date(
      start.getTime() + selectedService.duration * 60 * 1000,
    )

    const closingHour = day === 6 ? 16 : 18

    const closingTime = new Date(
      `${dateString}T${String(closingHour).padStart(2, '0')}:00:00`,
    )

    return end <= closingTime
  })
}

function formatBookingDate(dateString) {
  if (!dateString) {
    return ''
  }

  return new Date(`${dateString}T00:00:00`).toLocaleDateString(
    'en-ZA',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  )
}

function Booking() {
  const [searchParams] = useSearchParams()

  const serviceFromUrl = Number(searchParams.get('service'))

  const [formData, setFormData] = useState({
    service: serviceFromUrl || '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const selectedService = services.find(
    (service) => service.id === Number(formData.service),
  )

  const selectedBarber = barbers.find(
    (barber) => barber.id === Number(formData.barber),
  )

  const selectedDay = getDayOfWeek(formData.date)

  const availableTimes = getAvailableTimes(
    formData.date,
    selectedService,
  )

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => {
      const updated = {
        ...current,
        [name]: value,
      }

      if (name === 'date' || name === 'service') {
        updated.time = ''
      }

      return updated
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !selectedService ||
      !selectedBarber ||
      !formData.date ||
      !formData.time
    ) {
      return
    }

    if (!availableTimes.includes(formData.time)) {
      return
    }

    setSubmitted(true)
  }

  const handleGoogleCalendar = () => {
    if (!selectedService || !selectedBarber) {
      return
    }

    const calendarData = createCalendarData({
      service: selectedService,
      barber: selectedBarber,
      date: formData.date,
      time: formData.time,
    })

    openGoogleCalendar(calendarData)
  }

  const handleAppleCalendar = () => {
    if (!selectedService || !selectedBarber) {
      return
    }

    const calendarData = createCalendarData({
      service: selectedService,
      barber: selectedBarber,
      date: formData.date,
      time: formData.time,
    })

    downloadAppleCalendarFile(calendarData)
  }

  if (submitted) {
    return (
      <main className="bg-white">
        <section className="flex min-h-[650px] items-center justify-center px-4 py-20">
          <div className="w-full max-w-2xl rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4F8] text-[#159A9C]">
              <CheckCircle2 size={34} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
              Booking Confirmed
            </p>

            <h1 className="mt-3 text-3xl font-bold text-[#12304A] sm:text-4xl">
              You&apos;re booked, {formData.name}.
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#526574]">
              Your Cape Barber appointment has been successfully recorded.
              Add it to your calendar so you don&apos;t miss your appointment.
            </p>

            <div className="mt-8 rounded-xl bg-[#F8FAFB] p-6 text-left">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[#667784]">Service</p>
                  <p className="mt-1 font-bold text-[#12304A]">
                    {selectedService?.name}
                  </p>
                </div>

                <div>
                  <p className="text-[#667784]">Barber</p>
                  <p className="mt-1 font-bold text-[#12304A]">
                    {selectedBarber?.name}
                  </p>
                </div>

                <div>
                  <p className="text-[#667784]">Date</p>
                  <p className="mt-1 font-bold text-[#12304A]">
                    {formatBookingDate(formData.date)}
                  </p>
                </div>

                <div>
                  <p className="text-[#667784]">Time</p>
                  <p className="mt-1 font-bold text-[#12304A]">
                    {formData.time}
                  </p>
                </div>

                <div>
                  <p className="text-[#667784]">Duration</p>
                  <p className="mt-1 font-bold text-[#12304A]">
                    {selectedService?.duration} minutes
                  </p>
                </div>

                <div>
                  <p className="text-[#667784]">Price</p>
                  <p className="mt-1 font-bold text-[#159A9C]">
                    R{selectedService?.price}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#E5E7EB] p-6">
              <div className="flex items-center justify-center gap-2">
                <CalendarDays
                  size={21}
                  className="text-[#159A9C]"
                />

                <h2 className="font-bold text-[#12304A]">
                  Add to Calendar
                </h2>
              </div>

              <p className="mt-2 text-sm leading-6 text-[#667784]">
                Save your appointment to your preferred calendar.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleGoogleCalendar}
                  className="rounded-lg bg-[#159A9C] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#117F81]"
                >
                  Add to Google Calendar
                </button>

                <button
                  type="button"
                  onClick={handleAppleCalendar}
                  className="rounded-lg border border-[#12304A] bg-white px-5 py-3 text-sm font-bold text-[#12304A] transition hover:bg-[#EAF4F8]"
                >
                  Add to Apple Calendar
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-lg border border-[#12304A] bg-white px-6 py-3 text-sm font-semibold text-[#12304A] transition hover:bg-[#EAF4F8]"
            >
              Make Another Booking
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="bg-white">
      <section className="bg-[#EAF4F8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
              Book Your Appointment
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#12304A] sm:text-5xl">
              Reserve your next cut.
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526574]">
              Choose your service, barber, date and time, then provide your
              contact details to complete your booking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4F8] text-[#159A9C]">
                  <Scissors size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-[#12304A]">
                    Appointment Details
                  </h2>

                  <p className="text-sm text-[#667784]">
                    Choose your service and preferred barber.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-[#263746]"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-[#CBD5DC] bg-white px-4 py-3 text-sm text-[#263746] outline-none focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20"
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} — R{service.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="barber"
                    className="block text-sm font-semibold text-[#263746]"
                  >
                    Barber
                  </label>

                  <select
                    id="barber"
                    name="barber"
                    value={formData.barber}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-[#CBD5DC] bg-white px-4 py-3 text-sm text-[#263746] outline-none focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20"
                  >
                    <option value="">Select a barber</option>

                    {barbers.map((barber) => (
                      <option key={barber.id} value={barber.id}>
                        {barber.name} — {barber.specialty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-[#E5E7EB] pt-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4F8] text-[#159A9C]">
                  <CalendarDays size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-[#12304A]">
                    Date & Time
                  </h2>

                  <p className="text-sm text-[#667784]">
                    Select when you would like to visit.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-semibold text-[#263746]"
                  >
                    Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-2 w-full rounded-lg border border-[#CBD5DC] bg-white px-4 py-3 text-sm text-[#263746] outline-none focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20"
                  />

                  {selectedDay === 0 && (
                    <p className="mt-2 text-sm font-medium text-red-600">
                      Cape Barber is closed on Sundays. Please select another
                      date.
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-semibold text-[#263746]"
                  >
                    Time
                  </label>

                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    disabled={
                      !formData.date ||
                      selectedDay === 0 ||
                      !selectedService
                    }
                    className="mt-2 w-full rounded-lg border border-[#CBD5DC] bg-white px-4 py-3 text-sm text-[#263746] outline-none disabled:cursor-not-allowed disabled:bg-[#F3F5F6] focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20"
                  >
                    <option value="">
                      {!formData.date
                        ? 'Select a date first'
                        : selectedDay === 0
                          ? 'Closed on Sunday'
                          : !selectedService
                            ? 'Select a service first'
                            : 'Select a time'}
                    </option>

                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>

                  {selectedDay === 6 && selectedService && (
                    <p className="mt-2 text-xs leading-5 text-[#667784]">
                      Saturday hours: 09:00 – 16:00. Last appointment time
                      depends on the service duration.
                    </p>
                  )}

                  {selectedDay !== null &&
                    selectedDay !== 0 &&
                    selectedService &&
                    availableTimes.length === 0 && (
                      <p className="mt-2 text-sm font-medium text-red-600">
                        No available times for this service on the selected
                        date.
                      </p>
                    )}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-[#E5E7EB] pt-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4F8] text-[#159A9C]">
                  <Clock3 size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-[#12304A]">
                    Your Details
                  </h2>

                  <p className="text-sm text-[#667784]">
                    Tell us how we can contact you.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#263746]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-lg border border-[#CBD5DC] px-4 py-3 text-sm outline-none focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#263746]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-[#CBD5DC] px-4 py-3 text-sm outline-none focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#263746]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+27 82 123 4567"
                    className="mt-2 w-full rounded-lg border border-[#CBD5DC] px-4 py-3 text-sm outline-none focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20"
                  />
                </div>
              </div>
            </div>

            {selectedService && (
              <div className="mt-10 rounded-xl bg-[#EAF4F8] p-5">
                <p className="text-sm font-bold text-[#12304A]">
                  Selected Service
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-semibold text-[#263746]">
                    {selectedService.name}
                  </span>

                  <span className="font-bold text-[#159A9C]">
                    R{selectedService.price} · {selectedService.duration} min
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={
                selectedDay === 0 ||
                !availableTimes.includes(formData.time)
              }
              className="mt-8 w-full rounded-lg bg-[#159A9C] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#117F81] disabled:cursor-not-allowed disabled:bg-[#AAB7BE] focus:outline-none focus:ring-2 focus:ring-[#159A9C] focus:ring-offset-2"
            >
              Confirm Booking
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#667784]">
              By confirming your booking, you agree to Cape Barber&apos;s
              Terms & Conditions.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Booking