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
    { path: '/portfolio', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      background: scrolled ? 'rgba(5, 7, 14, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(99,102,241,0.08)' : '1px solid transparent',
    }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'white',
            boxShadow: '0 0 20px rgba(99,102,241,0.3)',
          }}>U</div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem',
            color: 'white', letterSpacing: '-0.5px',
          }}>UpsellSystems</span>
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
          style={{ display: 'none', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: '8px' }}
          aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column', padding: '20px 24px 30px', gap: '20px',
          background: 'rgba(5, 7, 14, 0.98)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(99,102,241,0.1)',
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
