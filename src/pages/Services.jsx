import { Clock3, Scissors } from 'lucide-react'
import { Link } from 'react-router-dom'

import services from '../data/services'

function Services() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="bg-[#EAF4F8]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
              Our Services
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#12304A] sm:text-5xl">
              Professional grooming, done right.
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526574]">
              From sharp fades to complete grooming packages, our barbers
              deliver clean, precise results every time.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
                  <Scissors size={23} />
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-[#12304A]">
                    {service.name}
                  </h2>

                  <span className="whitespace-nowrap text-xl font-bold text-[#159A9C]">
                    R{service.price}
                  </span>
                </div>

                <p className="mt-3 flex-1 leading-7 text-[#526574]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[#E5E7EB] pt-5 text-sm text-[#667784]">
                  <Clock3 size={17} className="text-[#159A9C]" />
                  {service.duration} minutes
                </div>

                <Link
                  to={`/booking?service=${service.id}`}
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#159A9C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#117F81]"
                >
                  Book This Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12304A]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready for your next cut?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#D9E6ED]">
            Choose your service and reserve a time that works for you.
          </p>

          <Link
            to="/booking"
            className="mt-8 inline-flex rounded-lg bg-[#159A9C] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#117F81]"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Services