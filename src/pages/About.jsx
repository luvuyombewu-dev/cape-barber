import { Award, Scissors, Users } from 'lucide-react'

import barbers from '../data/barbers'

function About() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="bg-[#EAF4F8]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
              About Cape Barber
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#12304A] sm:text-5xl">
              More than a haircut. It&apos;s your confidence.
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526574]">
              Cape Barber is a modern Cape Town barbershop built around
              precision, consistency and great customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#12304A] sm:text-4xl">
              Built for Cape Town.
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-[#526574]">
              <p>
                Cape Barber was created with one simple idea: a great
                barbershop should combine skilled craftsmanship with a
                welcoming experience.
              </p>

              <p>
                Whether you want a classic cut, a sharp fade or a complete
                grooming session, our team takes the time to understand your
                style and deliver a clean, detailed finish.
              </p>

              <p>
                We believe every appointment should leave you looking sharp
                and feeling confident.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#E5E7EB] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
                <Scissors size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#12304A]">
                Precision
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#526574]">
                Every cut receives careful attention to detail.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
                <Award size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#12304A]">
                Quality
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#526574]">
                Professional grooming with a consistent finish.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4F8] text-[#159A9C]">
                <Users size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#12304A]">
                Community
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#526574]">
                A welcoming space where clients know their barber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Barbers */}
      <section className="bg-[#F8FAFB] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159A9C]">
              Meet The Team
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#12304A] sm:text-4xl">
              Skilled barbers. Personal service.
            </h2>

            <p className="mt-4 leading-7 text-[#526574]">
              Our team combines experience, technical skill and attention to
              detail to give every client a great experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {barbers.map((barber) => (
              <article
                key={barber.id}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#12304A] text-2xl font-bold text-white">
                  {barber.name.charAt(0)}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#12304A]">
                  {barber.name}
                </h3>

                <p className="mt-1 font-semibold text-[#159A9C]">
                  {barber.role}
                </p>

                <div className="mt-5 space-y-2 text-sm text-[#526574]">
                  <p>
                    <span className="font-semibold text-[#263746]">
                      Experience:
                    </span>{' '}
                    {barber.experience}
                  </p>

                  <p>
                    <span className="font-semibold text-[#263746]">
                      Specialty:
                    </span>{' '}
                    {barber.specialty}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About