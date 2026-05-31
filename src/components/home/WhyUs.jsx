import useInView from '../../hooks/useInView'
import { Zap, Eye, DollarSign, Handshake, Route } from 'lucide-react'

const reasons = [
  { icon: Zap, title: 'Speed That Shocks', desc: 'Websites in 2–5 days. Custom software in under 2 weeks. We move fast because your time is money.', color: '#D97706' },
  { icon: Eye, title: 'Design That Converts', desc: 'We don\'t just make it pretty — we engineer every pixel to turn visitors into customers.', color: '#6d28d9' },
  { icon: DollarSign, title: 'Pricing That\'s Fair', desc: 'Enterprise-grade quality at startup-friendly prices. No bloated quotes, no hidden fees.', color: '#059669' },
  { icon: Handshake, title: 'You\'re a Partner, Not a Ticket', desc: 'Direct communication, full transparency, and zero surprises. We treat your project like our own.', color: '#0891b2' },
  { icon: Route, title: 'Dead-Simple Process', desc: 'Tell us your idea. We handle everything else. No back-and-forth hell, no scope creep, no delays.', color: '#DB2777' },
]

export default function WhyUs() {
  const [ref, visible] = useInView()
  return (
    <section style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent)', top: '0', right: '-100px' }} />
      <div ref={ref} className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Why UpsellSystems</div>
          <h2 className="section-title">Five reasons clients <span className="gradient-text">keep coming back</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className={`glass-card animated-border fade-in-up ${visible ? 'visible' : ''}`}
                style={{
                  display: 'flex', gap: '20px', padding: '28px 26px', borderRadius: '18px',
                  background: 'rgba(255,255,255,0.5)',
                  transitionDelay: `${i * 0.08}s`, cursor: 'default',
                  '--hover-color': r.color
                }}>
                <div style={{
                  minWidth: '46px', height: '46px', borderRadius: '12px',
                  background: `${r.color}12`, border: `1px solid ${r.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Icon size={21} color={r.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', letterSpacing: '-0.01em', color: '#0F172A' }}>{r.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>{r.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
