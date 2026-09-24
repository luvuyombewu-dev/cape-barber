import { Menu, Scissors, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Cape Barber Home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#12304A] text-white">
            <Scissors size={22} strokeWidth={2} />
          </div>

          <div>
            <span className="block text-lg font-bold tracking-wide text-[#12304A]">
              CAPE BARBER
            </span>
            <span className="hidden text-xs font-medium tracking-[0.2em] text-[#159A9C] sm:block">
              SHARP CUTS. FRESH CONFIDENCE.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#159A9C]'
                    : 'text-[#263746] hover:text-[#159A9C]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Button to="/booking">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-[#12304A] hover:bg-[#EAF4F8] md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[#E5E7EB] bg-white md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-[#E5E7EB] py-4 text-sm font-medium ${
                    isActive
                      ? 'text-[#159A9C]'
                      : 'text-[#263746]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Button
              to="/booking"
              className="mt-4 w-full"
              onClick={closeMenu}
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header