import useInView from '../../hooks/useInView'
import { Globe, Settings, Bot, Cloud, ShoppingCart, Palette } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Website Design & Development', desc: 'High-converting sites that look incredible and load fast — designed, built, and launched in as few as 2 days.', color: '#6366F1' },
  { icon: Settings, title: 'Custom Software & Systems', desc: 'Bespoke tools built to your exact workflow. CRMs, dashboards, admin panels — whatever you need, in under 2 weeks.', color: '#8B5CF6' },
  { icon: Bot, title: 'AI Integration', desc: 'We embed the latest AI into your business — from chatbots to automation — so you save hours every single week.', color: '#22D3EE' },
  { icon: Cloud, title: 'SaaS Development', desc: 'We take your software idea from napkin sketch to market-ready product. Full-stack, scalable, and subscription-ready.', color: '#34D399' },
  { icon: ShoppingCart, title: 'E-Commerce Stores', desc: 'Beautiful storefronts with frictionless checkout, inventory management, and analytics built right in.', color: '#F59E0B' },
  { icon: Palette, title: 'Digital Brand Identity', desc: 'Logos, color systems, and visual identities that make your brand impossible to forget.', color: '#EC4899' },
]

export default function Services() {
  const [ref, visible] = useInView()
  return (
    <section id="services" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="bg-grid" />
      <div ref={ref} className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>What We Build</div>
          <h2 className="section-title">Everything you need to <span className="gradient-text">dominate online</span></h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            One agency. Every digital capability. Zero compromises.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className={`glass-card fade-in-up ${visible ? 'visible' : ''}`}
                style={{ padding: '36px 30px', transitionDelay: `${i * 0.08}s`, cursor: 'default' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: `${s.color}12`, border: `1px solid ${s.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px',
                }}>
                  <Icon size={24} color={s.color} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
