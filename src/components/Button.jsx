import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-[#159A9C] text-white hover:bg-[#117F81] focus:ring-[#159A9C]',
    secondary:
      'border border-[#12304A] bg-white text-[#12304A] hover:bg-[#EAF4F8] focus:ring-[#12304A]',
    dark:
      'bg-[#12304A] text-white hover:bg-[#1B4667] focus:ring-[#12304A]',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button