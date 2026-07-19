import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
      }
    }
    requestAnimationFrame(() => {
      handleScroll()
    })
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileIndustriesOpen(false)
    setActiveDropdown(null)
  }, [location])

  const services = [
    { path: '/website-design-cairo', label: 'Website Design' },
    { path: '/website-development-cairo', label: 'Website Development' },
    { path: '/website-redesign-cairo', label: 'Website Redesign' },
    { path: '/ecommerce-website-design-cairo', label: 'Ecommerce Websites' },
  ]

  const industries = [
    { path: '/website-design-for-dentists-cairo', label: 'Website Design for Dentists' },
    { path: '/website-design-for-doctors-cairo', label: 'Website Design for Doctors' },
    { path: '/clinic-website-design-cairo', label: 'Clinic Website Design' },
  ]

  const normalLinks = [
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" style={{ height: '50px', width: '200px' }}>
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

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className={`nav-link`}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                padding: '8px 0',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit'
              }}
            >
              Services <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            {activeDropdown === 'services' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-20px',
                width: '240px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(109, 40, 217, 0.1)',
                borderRadius: '12px',
                padding: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                animation: 'navFadeIn 0.2s ease forwards'
              }}>
                {services.map(s => (
                  <Link 
                    key={s.path} 
                    to={s.path} 
                    className={`nav-dropdown-item ${location.pathname === s.path ? 'active' : ''}`}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'all 0.2s'
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className={`nav-link`}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                padding: '8px 0',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit'
              }}
            >
              Industries <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeDropdown === 'industries' ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            {activeDropdown === 'industries' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-20px',
                width: '260px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(109, 40, 217, 0.1)',
                borderRadius: '12px',
                padding: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                animation: 'navFadeIn 0.2s ease forwards'
              }}>
                {industries.map(ind => (
                  <Link 
                    key={ind.path} 
                    to={ind.path} 
                    className={`nav-dropdown-item ${location.pathname === ind.path ? 'active' : ''}`}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'all 0.2s'
                    }}
                  >
                    {ind.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {normalLinks.map(link => (
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

      {/* Mobile Drawer Nav */}
      {mobileOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column', padding: '20px 24px 30px', gap: '16px',
          background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(109,40,217,0.1)',
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto'
        }}>
          <Link key="mobile-home" to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} style={{ fontSize: '1.1rem' }}>
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '6px 0',
                fontFamily: 'inherit',
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              <span style={{ flex: 1 }}>Services</span>
              <ChevronDown size={18} style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            {mobileServicesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '16px', marginTop: '8px', borderLeft: '1px solid var(--border)' }}>
                {services.map(s => (
                  <Link 
                    key={s.path} 
                    to={s.path} 
                    style={{ textDecoration: 'none', color: location.pathname === s.path ? 'var(--accent-1)' : 'var(--text-secondary)', fontSize: '0.95rem', padding: '4px 0' }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Industries Accordion */}
          <div>
            <button 
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '6px 0',
                fontFamily: 'inherit',
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              <span style={{ flex: 1 }}>Industries</span>
              <ChevronDown size={18} style={{ transition: 'transform 0.2s', transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            {mobileIndustriesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '16px', marginTop: '8px', borderLeft: '1px solid var(--border)' }}>
                {industries.map(ind => (
                  <Link 
                    key={ind.path} 
                    to={ind.path} 
                    style={{ textDecoration: 'none', color: location.pathname === ind.path ? 'var(--accent-1)' : 'var(--text-secondary)', fontSize: '0.95rem', padding: '4px 0' }}
                  >
                    {ind.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {normalLinks.map(link => (
            <Link key={link.path} to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ fontSize: '1.1rem' }}>{link.label}</Link>
          ))}
          <Link to="/contact" className="cta-button" style={{ textAlign: 'center', justifyContent: 'center', marginTop: '8px' }}>
            <span>Start a Project</span>
          </Link>
        </div>
      )}

      <style>{`
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-dropdown-item:hover {
          background: rgba(109, 40, 217, 0.05);
          color: var(--accent-1) !important;
          padding-left: 16px !important;
        }
        .nav-dropdown-item.active {
          background: rgba(109, 40, 217, 0.08);
          color: var(--accent-1) !important;
        }
      `}</style>
    </header>
  )
}

