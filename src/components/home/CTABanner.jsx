import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTABanner() {
  const [ref, visible] = useInView()
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.08), transparent), linear-gradient(180deg, var(--bg-primary), var(--bg-secondary))',
    }}>
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent)', top: '-200px', left: '50%', transform: 'translateX(-50%)' }} />
      <div ref={ref} className={`section-container fade-in-up ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', padding: '120px 24px' }}>
        <div className="section-label" style={{ margin: '0 auto 24px' }}>Ready to Start?</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.03em' }}>
          Let's turn your idea into <span className="gradient-text">something real</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '44px', maxWidth: '480px', margin: '0 auto 44px', lineHeight: 1.8 }}>
          Your first consultation is completely free. No pressure, no obligation — just a conversation about what's possible.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            <span><MessageCircle size={18} /> Chat on WhatsApp <ArrowRight size={16} /></span>
          </a>
        </div>
        <Link to="/contact" style={{
          color: 'var(--text-muted)', marginTop: '20px', display: 'inline-block', fontSize: '0.9rem',
          textDecoration: 'none', transition: 'color 0.3s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#A78BFA'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
          Or fill out our contact form →
        </Link>
      </div>
    </section>
  )
}
