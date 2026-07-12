import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 15}s`,
    size: `${1.5 + Math.random() * 2.5}px`,
  }))

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.08), transparent), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
    }}>
      <div className="bg-grid" />

      {/* Orbs */}
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(109,40,217,0.1), transparent)', top: '-200px', right: '-100px' }} />
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent)', bottom: '-150px', left: '-100px', animationDelay: '4s' }} />
      <div className="glow-orb" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(8,145,178,0.06), transparent)', top: '30%', left: '60%', animationDelay: '8s' }} />

      {particles.map(p => (
        <div key={p.id} className="particle" style={{ left: p.left, bottom: '-10px', animationDelay: p.delay, animationDuration: p.duration, width: p.size, height: p.size }} />
      ))}

      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '160px 24px 120px',
        position: 'relative', zIndex: 2, width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '48px',
      }} className="hero-grid">
        {/* Left — Copy */}
        <div>
          <div className="section-label" style={{ marginBottom: '28px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669', display: 'inline-block', animation: 'pulse-wa 2s infinite' }} />
            Available for new projects
          </div>

          <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.04em' }}>
            Your idea today.
            <br />
            <span className="gradient-text">Your website tomorrow.</span>
          </h1>

          {/* GEO: Entity description — above the fold, identical across homepage, about, and footer */}
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', fontWeight: 400, lineHeight: 1.85, maxWidth: '520px', padding: '14px 18px', background: 'rgba(109,40,217,0.03)', borderRadius: '12px', border: '1px solid rgba(109,40,217,0.08)' }}>
            UpsellSystems is a web and software agency based in <strong style={{ color: '#0F172A', fontWeight: 600 }}>Cairo, Egypt</strong>, serving small businesses, startups, and founders across <strong style={{ color: '#0F172A', fontWeight: 600 }}>MENA and the United States</strong>. The agency builds high-converting websites in 2–5 days and custom software systems — including AI integrations, SaaS products, and e-commerce stores — in under two weeks.
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '40px', maxWidth: '480px' }}>
            Fast delivery without sacrificing design quality or technical depth — the preferred partner for business owners who need professional digital products built quickly.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <Link to="/contact" className="cta-button">
              <span>Start Your Project <ArrowRight size={17} /></span>
            </Link>
            <Link to="/portfolio" className="cta-secondary">
              <Play size={16} /> See Our Work
            </Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            No commitment needed — we reply on WhatsApp within a few hours.
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
                Trusted by <strong style={{ color: '#0F172A' }}>10+ clients</strong> worldwide
              </p>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>★★★★★ 5.0 average rating</p>
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
