import { Link } from 'react-router-dom'
import { Mail, MessageCircle, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#F8FAFC', borderTop: '1px solid rgba(109,40,217,0.06)', padding: '72px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px' }}>
        <div>
          <div style={{ marginBottom: '18px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" style={{ height: '44px', width: '176px' }}>
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
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '320px', marginBottom: '18px' }}>
            UpsellSystems is a web design and website development agency in Cairo, Egypt. We build fast, high-converting websites and ecommerce online stores in 2–5 days for businesses and clinics.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={14} color="var(--accent-1)" />
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Cairo, Egypt</span>
            </div>
            <a href="https://wa.me/201286960710" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-1)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              <MessageCircle size={14} /> +20 128 696 0710
            </a>
            <a href="mailto:upsellsystems@gmail.com" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-1)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              <Mail size={14} /> upsellsystems@gmail.com
            </a>
          </div>
        </div>

        <div>
          <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '20px', color: '#0F172A', letterSpacing: '-0.01em' }}>Services</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/website-design-cairo" className="nav-link">Website Design</Link>
            <Link to="/website-development-cairo" className="nav-link">Website Development</Link>
            <Link to="/website-redesign-cairo" className="nav-link">Website Redesign</Link>
            <Link to="/ecommerce-website-design-cairo" className="nav-link">Ecommerce Websites</Link>
          </div>
        </div>

        <div>
          <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '20px', color: '#0F172A', letterSpacing: '-0.01em' }}>Industries</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/website-design-for-dentists-cairo" className="nav-link">Web Design for Dentists</Link>
            <Link to="/website-design-for-doctors-cairo" className="nav-link">Web Design for Doctors</Link>
            <Link to="/clinic-website-design-cairo" className="nav-link">Clinic Website Design</Link>
          </div>
        </div>

        <div>
          <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '20px', color: '#0F172A', letterSpacing: '-0.01em' }}>Areas Served</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/website-design-new-cairo" className="nav-link">Web Design New Cairo</Link>
            <Link to="/website-design-maadi" className="nav-link">Web Design Maadi</Link>
            <Link to="/website-design-heliopolis" className="nav-link">Web Design Heliopolis</Link>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px', margin: '48px auto 0', paddingTop: '24px',
        borderTop: '1px solid rgba(109,40,217,0.06)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>© 2026 UpsellSystems. All rights reserved.</p>
          <span style={{ color: 'rgba(109,40,217,0.2)', fontSize: '0.8rem' }}>•</span>
          <Link to="/" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Home</Link>
          <Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>About</Link>
          <Link to="/portfolio" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Work</Link>
          <Link to="/faq" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>FAQ</Link>
          <Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Contact</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Privacy Policy</Link>
          <span style={{ color: 'rgba(109,40,217,0.2)', fontSize: '0.8rem' }}>•</span>
          <Link to="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#0F172A'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
