import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/channel-list', label: 'Channels' },
  { path: '/buy-iptv-subscription', label: 'Pricing' },
  { path: '/setup-guides', label: 'Installation' },
  { path: '/iptv-reseller-panel', label: 'Reseller' },
  { path: '/faq', label: 'FAQ' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${mobileOpen ? 'navbar--open' : ''}`} id="main-nav">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" id="nav-logo" aria-label="Zyminex Logo">
          <span className="navbar__logo-icon material-icons-outlined" aria-hidden="true">play_circle</span>
          <span className="navbar__logo-text">Zyminex</span>
        </Link>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/iptv-free-trial" className="btn btn-primary btn-sm navbar__cta" id="nav-trial-btn">
            Free Trial
          </Link>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          id="nav-hamburger"
          aria-label="Toggle menu"
        >
          <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
          <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
          <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  )
}

