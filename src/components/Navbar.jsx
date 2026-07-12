import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Work' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(109,40,217,0.08)' : '1px solid transparent',
    }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" aria-label="UpsellSystems — Home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" style={{ height: '50px', width: 'auto' }}>
            <defs>
              <linearGradient id="upsellGradNav" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6d28d9" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
            <g transform="translate(10, 5) scale(0.7)">
              <path 
                d="M 32 30 
                   L 32 58 
                   C 32 70, 44 72, 50 72 
                   C 56 72, 68 70, 68 58 
                   L 68 26 
                   M 58 36 
                   L 68 26 
                   L 78 36" 
                fill="none" 
                stroke="url(#upsellGradNav)" 
                strokeWidth="8.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle cx="68" cy="13" r="4" fill="#0891b2" />
            </g>
            <text 
              x="80" 
              y="49" 
              fontFamily="'Space Grotesk Variable', 'Inter Variable', -apple-system, sans-serif" 
              fontWeight="800" 
              fontSize="28" 
              letterSpacing="-0.03em"
              fill="#0F172A"
            >Upsell<tspan fill="url(#upsellGradNav)">Systems</tspan></text>
          </svg>
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {links.map(link => (
            <Link key={link.path} to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="cta-button" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
            <span>Start a Project <ArrowRight size={15} /></span>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'transparent', border: 'none', color: '#0F172A', cursor: 'pointer', padding: '8px' }}
          aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column', padding: '20px 24px 30px', gap: '20px',
          background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(109,40,217,0.1)',
        }}>
          {links.map(link => (
            <Link key={link.path} to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ fontSize: '1.1rem' }}>{link.label}</Link>
          ))}
          <Link to="/contact" className="cta-button" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <span>Start a Project</span>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
