import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#F8FAFC', borderTop: '1px solid rgba(109,40,217,0.06)', padding: '72px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px' }}>
        <div>
          <div style={{ marginBottom: '18px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" style={{ height: '44px', width: 'auto' }}>
              <defs>
                <linearGradient id="upsellGradFooter" x1="0%" y1="100%" x2="100%" y2="0%">
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
                  stroke="url(#upsellGradFooter)" 
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
              >Upsell<tspan fill="url(#upsellGradFooter)">Systems</tspan></text>
            </svg>
          </div>
          {/* GEO: Entity description — identical across homepage, about, and footer */}
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.9, maxWidth: '320px' }}>
            UpsellSystems is a web and software agency based in Cairo, Egypt, building websites, custom software, and AI integrations for small businesses and startups in MENA and the United States. The agency delivers websites in 2–5 days and custom systems in under two weeks.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
            <MapPin size={13} color="var(--accent-1)" />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>Cairo, Egypt — Serving MENA & the US</span>
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '20px', color: '#0F172A', letterSpacing: '-0.01em' }}>Navigate</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/portfolio" className="nav-link">Our Work</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '20px', color: '#0F172A', letterSpacing: '-0.01em' }}>Get in Touch</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/contact" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={15} /> Contact Us
            </Link>
            <a href="https://wa.me/201286960710" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageCircle size={15} /> +20 128 696 0710
            </a>
            <a href="mailto:mo@upsellsystems.com" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={15} /> mo@upsellsystems.com
            </a>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px', margin: '48px auto 0', paddingTop: '24px',
        borderTop: '1px solid rgba(109,40,217,0.06)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>© 2026 UpsellSystems. All rights reserved.</p>
          <span style={{ color: 'rgba(109,40,217,0.2)', fontSize: '0.8rem' }}>•</span>
          <Link to="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</Link>
          <span style={{ color: 'rgba(109,40,217,0.2)', fontSize: '0.8rem' }}>•</span>
          <Link to="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Cairo, Egypt · Made with ❤️</p>
      </div>
    </footer>
  )
}
