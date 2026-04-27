import { Link } from 'react-router-dom'
import { Mail, Phone, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#030508', borderTop: '1px solid rgba(99,102,241,0.06)', padding: '72px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: '0.95rem', color: 'white',
            }}>U</div>
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: '1.05rem', color: 'white' }}>UpsellSystems</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.9, maxWidth: '300px' }}>
            We turn ambitious ideas into digital products that convert. Fast delivery. Stunning design. Unmatched value.
          </p>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '20px', color: 'white', letterSpacing: '-0.01em' }}>Navigate</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/portfolio" className="nav-link">Our Work</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '20px', color: 'white', letterSpacing: '-0.01em' }}>Get in Touch</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={15} /> WhatsApp
            </a>
            <a href="mailto:contact@upsellsystems.com" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={15} /> contact@upsellsystems.com
            </a>
            <a href="https://facebook.com/UpsellSystems" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ExternalLink size={15} /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px', margin: '48px auto 0', paddingTop: '24px',
        borderTop: '1px solid rgba(99,102,241,0.06)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>© 2025 UpsellSystems. All rights reserved.</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Made with ❤️ in Egypt</p>
      </div>
    </footer>
  )
}
