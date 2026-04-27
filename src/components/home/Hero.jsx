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
      background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.12), transparent), linear-gradient(180deg, #05070E 0%, #080B16 100%)',
    }}>
      <div className="bg-grid" />

      {/* Orbs */}
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent)', top: '-200px', right: '-100px' }} />
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent)', bottom: '-150px', left: '-100px', animationDelay: '4s' }} />
      <div className="glow-orb" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(34,211,238,0.08), transparent)', top: '30%', left: '60%', animationDelay: '8s' }} />

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
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399', display: 'inline-block', animation: 'pulse-wa 2s infinite' }} />
            Available for new projects
          </div>

          <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.04em' }}>
            Your idea today.
            <br />
            <span className="gradient-text">Your website tomorrow.</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: 400, lineHeight: 1.8, maxWidth: '520px' }}>
            We build <strong style={{ color: 'white', fontWeight: 600 }}>stunning websites in 2–5 days</strong> and custom software in under two weeks — at prices that don't punish ambition.
          </p>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '40px', maxWidth: '480px' }}>
            UpsellSystems is the agency founders call when they need speed without sacrificing craft.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="cta-button">
              <span>Start Your Project <ArrowRight size={17} /></span>
            </a>
            <Link to="/portfolio" className="cta-secondary">
              <Play size={16} /> See Our Work
            </Link>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: '44px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex' }}>
              {['#6366F1', '#8B5CF6', '#22D3EE', '#34D399'].map((c, i) => (
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
                Trusted by <strong style={{ color: 'white' }}>10+ clients</strong> worldwide
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

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { gridTemplateColumns: 1fr !important; grid-template-columns: 1fr !important; }
          .hero-visual-wrapper { display: none !important; }
        }
      `}</style>
    </section>
  )
}
