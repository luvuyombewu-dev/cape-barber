import {
    Clock3,
    Mail,
    MapPin,
    Phone,
  } from 'lucide-react'
  import { Link } from 'react-router-dom'
  
  function Footer() {
    return (
      <footer className="bg-[#12304A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
  
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="text-xl font-bold tracking-wide"
              >
                CAPE BARBER
              </Link>
  
              <p className="mt-4 max-w-sm text-sm leading-6 text-[#D9E6ED]">
                Professional cuts, fades and grooming services
                in a modern Cape Town barbershop.
              </p>
  
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-[#159A9C] hover:text-white"
              >
                Instagram
              </a>
            </div>
  
            {/* Navigation */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Quick Links
              </h2>
  
              <nav className="mt-5 flex flex-col gap-3 text-sm text-[#D9E6ED]">
                <Link className="hover:text-white" to="/">
                  Home
                </Link>
  
                <Link className="hover:text-white" to="/services">
                  Services
                </Link>
  
                <Link className="hover:text-white" to="/about">
                  About
                </Link>
  
                <Link className="hover:text-white" to="/contact">
                  Contact
                </Link>
  
                <Link className="hover:text-white" to="/terms">
                  Terms & Conditions
                </Link>
              </nav>
            </div>
  
            {/* Contact */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Contact
              </h2>
  
              <div className="mt-5 space-y-4 text-sm text-[#D9E6ED]">
  
                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 shrink-0 text-[#159A9C]"
                    size={18}
                  />
                  <span>Cape Town, Western Cape</span>
                </div>
  
                <div className="flex gap-3">
                  <Phone
                    className="mt-0.5 shrink-0 text-[#159A9C]"
                    size={18}
                  />
                  <a
                    href="tel:+27210000000"
                    className="hover:text-white"
                  >
                    +27 21 000 0000
                  </a>
                </div>
  
                <div className="flex gap-3">
                  <Mail
                    className="mt-0.5 shrink-0 text-[#159A9C]"
                    size={18}
                  />
                  <a
                    href="mailto:Marcus@capebarber.co.za"
                    className="break-all hover:text-white"
                  >
                    Marcus@capebarber.co.za
                  </a>
                </div>
  
              </div>
            </div>
  
            {/* Opening Hours */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Opening Hours
              </h2>
  
              <div className="mt-5 space-y-3 text-sm text-[#D9E6ED]">
  
                <div className="flex gap-3">
                  <Clock3
                    className="mt-0.5 shrink-0 text-[#159A9C]"
                    size={18}
                  />
                  <div>
                    <p>Monday – Friday</p>
                    <p className="text-white">09:00 – 18:00</p>
                  </div>
                </div>
  
                <div className="flex gap-3">
                  <Clock3
                    className="mt-0.5 shrink-0 text-[#159A9C]"
                    size={18}
                  />
                  <div>
                    <p>Saturday</p>
                    <p className="text-white">09:00 – 16:00</p>
                  </div>
                </div>
  
                <div className="flex gap-3">
                  <Clock3
                    className="mt-0.5 shrink-0 text-[#159A9C]"
                    size={18}
                  />
                  <div>
                    <p>Sunday</p>
                    <p className="text-white">Closed</p>
                  </div>
                </div>
  
              </div>
  
              <Link
                to="/booking"
                className="mt-6 inline-flex rounded-lg bg-[#159A9C] px-5 py-3 text-sm font-semibold transition hover:bg-[#117F81]"
              >
                Book an Appointment
              </Link>
            </div>
  
          </div>
  
          {/* Bottom */}
          <div className="mt-12 border-t border-[#31536B] pt-6 text-center text-sm text-[#BFD1DC]">
            <p>
              © {new Date().getFullYear()} Cape Barber. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer