import {
    Clock3,
    Mail,
    MapPin,
    Phone,
  } from 'lucide-react'
  import { Link } from 'react-router-dom'
  
  import Button from '../components/Button'
  
  function Contact() {
    return (
      <main className="bg-white">
        {/* Page Header */}
        <section className="bg-[#EAF4F8]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
                Contact Cape Barber
              </p>
  
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#12304A] sm:text-5xl">
                Let&apos;s get you looking sharp.
              </h1>
  
              <p className="mt-5 text-lg leading-8 text-[#526574]">
                Have a question about our services or want to book your next
                appointment? Get in touch with the Cape Barber team.
              </p>
            </div>
          </div>
        </section>
  
        {/* Contact Information */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
  
              {/* Address */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
                  <MapPin size={22} />
                </div>
  
                <h2 className="mt-6 text-lg font-bold text-[#12304A]">
                  Visit Us
                </h2>
  
                <p className="mt-3 text-sm leading-6 text-[#667784]">
                  Cape Barber
                  <br />
                  Cape Town, Western Cape
                  <br />
                  South Africa
                </p>
              </div>
  
              {/* Phone & Email */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
                  <Phone size={22} />
                </div>
  
                <h2 className="mt-6 text-lg font-bold text-[#12304A]">
                  Contact Us
                </h2>
  
                <div className="mt-3 space-y-2 text-sm text-[#667784]">
                  <p>
                    <a
                      href="tel:+27210000000"
                      className="font-medium hover:text-[#159A9C]"
                    >
                      +27 21 000 0000
                    </a>
                  </p>
  
                  <p>
                    <a
                      href="mailto:hello@capebarber.co.za"
                      className="font-medium hover:text-[#159A9C]"
                    >
                      hello@capebarber.co.za
                    </a>
                  </p>
                </div>
              </div>
  
              {/* Hours */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
                  <Clock3 size={22} />
                </div>
  
                <h2 className="mt-6 text-lg font-bold text-[#12304A]">
                  Opening Hours
                </h2>
  
                <div className="mt-3 space-y-2 text-sm text-[#667784]">
                  <p>
                    <span className="font-semibold text-[#263746]">
                      Monday – Friday:
                    </span>{' '}
                    09:00 – 18:00
                  </p>
  
                  <p>
                    <span className="font-semibold text-[#263746]">
                      Saturday:
                    </span>{' '}
                    09:00 – 16:00
                  </p>
  
                  <p>
                    <span className="font-semibold text-[#263746]">
                      Sunday:
                    </span>{' '}
                    Closed
                  </p>
                </div>
              </div>
  
            </div>
          </div>
        </section>
  
        {/* Booking CTA */}
        <section className="pb-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#12304A] px-6 py-12 text-center sm:px-12">
              <Mail
                size={28}
                className="mx-auto text-[#159A9C]"
              />
  
              <h2 className="mt-5 text-3xl font-bold text-white">
                Ready for your next cut?
              </h2>
  
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#D9E6ED]">
                Choose your service, barber and preferred time through our
                online booking system.
              </p>
  
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button to="/booking">
                  Book an Appointment
                </Button>
  
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-[#159A9C] bg-[#159A9C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#117F81]"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
  export default Contact