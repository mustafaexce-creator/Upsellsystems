import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroVisual from './HeroVisual'

const heroHighlights = ['2-5 day launch', 'SEO-ready structure', 'Mobile-first design']

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
    }}>
      <div className="bg-grid" />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '160px 24px 120px',
        position: 'relative', zIndex: 2, width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '48px',
      }} className="hero-grid">
        {/* Left — Copy */}
        <div style={{ maxWidth: '560px' }}>
          <div className="section-label" style={{ marginBottom: '28px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669', display: 'inline-block', animation: 'pulse-wa 2s infinite' }} />
            Available for new projects
          </div>

          <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.06, marginBottom: '22px', letterSpacing: '-0.035em' }}>
            Professional
            <br />
            <span className="gradient-text">Website Design in Cairo</span>
          </h1>

          {/* GEO: Entity description — above the fold, identical across homepage, about, and footer */}
          <p style={{ fontSize: '1.02rem', color: '#334155', marginBottom: '16px', fontWeight: 450, lineHeight: 1.8, maxWidth: '540px' }}>
            We design and build clean, SEO-ready websites for Cairo businesses, clinics, and ecommerce brands that need to look credible and get more inquiries.
          </p>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '22px', maxWidth: '500px' }}>
            Launch your website or online store in 2-5 days with strategy, design, code, and support handled by our senior-led team.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '34px' }}>
            {heroHighlights.map(item => (
              <span key={item} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 12px',
                borderRadius: '999px',
                background: 'rgba(109,40,217,0.055)',
                border: '1px solid rgba(109,40,217,0.1)',
                color: '#475569',
                fontSize: '0.78rem',
                fontWeight: 650,
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} />
                {item}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <Link to="/contact" className="cta-button">
              <span>Start Your Project <ArrowRight size={17} /></span>
            </Link>
            <Link to="/portfolio" className="cta-secondary">
              See Our Work
            </Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            We reply on WhatsApp within a few hours.
          </p>

          {/* Social proof */}
          <div style={{ marginTop: '44px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex' }}>
              {['#6d28d9', '#2563eb', '#0891b2', '#059669'].map((c, i) => (
                <div key={i} style={{
                  width: '30px', height: '30px', borderRadius: '50%', background: c,
                  border: '2px solid var(--bg-primary)', marginLeft: i > 0 ? '-8px' : '0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', fontWeight: 700, color: 'white',
                }}>
                  {['M', 'P', 'R', 'S'][i]}
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Trusted by <strong style={{ color: '#0F172A' }}>10+ businesses</strong> in Cairo
              </p>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>5.0 early client rating</p>
            </div>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="hero-visual-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <HeroVisual />
        </div>
      </div>

    </section>
  )
}
