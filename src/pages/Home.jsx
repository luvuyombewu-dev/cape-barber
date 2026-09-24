import { useState } from 'react'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Scissors,
  Star,
  X,
} from 'lucide-react'

import services from '../data/services'
import Button from '../components/Button'

function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <main className="bg-white">
      {/* Welcome Popup */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#12304A]/70 px-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              aria-label="Close popup"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#526574] transition hover:bg-[#EAF4F8] hover:text-[#12304A]"
            >
              <X size={20} />
            </button>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
              <Scissors size={23} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#159A9C]">
              First Visit?
            </p>

            <h2
              id="welcome-title"
              className="mt-2 text-2xl font-bold text-[#12304A]"
            >
              Start with the right cut.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#667784]">
              Choose your service and preferred barber online. Your appointment
              details can also be added directly to your calendar after
              booking.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                to="/booking"
                onClick={() => setShowWelcome(false)}
              >
                Book Now
              </Button>

              <button
                type="button"
                onClick={() => setShowWelcome(false)}
                className="rounded-lg border border-[#12304A] px-5 py-3 text-sm font-semibold text-[#12304A] transition hover:bg-[#EAF4F8]"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=85"
            alt="Professional barber working with a client"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#12304A]/75" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FE3E4]">
              Cape Town&apos;s Modern Barbershop
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Sharp cuts.
              <br />
              Fresh confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#EAF4F8] sm:text-xl">
              Professional haircuts, fades and grooming services delivered by
              experienced barbers in a modern Cape Town setting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/booking">
                Book Your Appointment
                <ArrowRight className="ml-2" size={18} />
              </Button>

              <Button
                to="/services"
                variant="primary"
              >
                Explore Services
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#EAF4F8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#7FE3E4]" />
                Professional Barbers
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#7FE3E4]" />
                Easy Online Booking
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#7FE3E4]" />
                Quality Grooming
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
                The Cape Barber Standard
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl">
                More than a haircut.
              </h2>

              <p className="mt-5 leading-7 text-[#526574]">
                Cape Barber combines modern grooming with traditional barbering
                standards. Every appointment is focused on precision,
                consistency and making sure you leave feeling confident.
              </p>

              <div className="mt-8">
                <Button to="/about">
                  Discover Our Story
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#EAF4F8] p-6">
                <Scissors className="text-[#159A9C]" size={25} />

                <h3 className="mt-5 font-bold text-[#12304A]">
                  Precision
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667784]">
                  Clean lines and detailed finishes.
                </p>
              </div>

              <div className="rounded-2xl bg-[#EAF4F8] p-6">
                <Star className="text-[#159A9C]" size={25} />

                <h3 className="mt-5 font-bold text-[#12304A]">
                  Quality
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667784]">
                  Professional grooming from start to finish.
                </p>
              </div>

              <div className="rounded-2xl bg-[#EAF4F8] p-6">
                <CalendarCheck className="text-[#159A9C]" size={25} />

                <h3 className="mt-5 font-bold text-[#12304A]">
                  Convenience
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667784]">
                  Simple online appointment booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-[#F8FAFB] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
                Our Services
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl">
                Built around your style.
              </h2>
            </div>

            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <Scissors className="text-[#159A9C]" size={24} />

                <h3 className="mt-5 font-bold text-[#12304A]">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667784]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-5">
                  <span className="font-bold text-[#159A9C]">
                    R{service.price}
                  </span>

                  <span className="text-xs font-medium text-[#667784]">
                    {service.duration} min
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#12304A] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7FE3E4]">
            Your Next Look Starts Here
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Ready for a sharper look?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#D9E6ED]">
            Book your appointment online and choose the service, barber, date
            and time that works for you.
          </p>

          <div className="mt-8">
            <Button to="/booking">
              Book an Appointment
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home