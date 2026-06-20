import useInView from '../../hooks/useInView'
import { Globe, Settings, Bot, Cloud, ShoppingCart, Palette } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Website Design & Development', desc: 'Website design and development at UpsellSystems is the process of building a complete, conversion-optimized website from design to launch — delivered in 2–5 business days. Built for business owners, founders, and agencies in MENA and the US who need a professional online presence quickly.', color: '#6d28d9' },
  { icon: Settings, title: 'Custom Software & Systems', desc: 'Custom software development at UpsellSystems covers bespoke business tools built to a client\'s exact workflow — CRMs, admin dashboards, management systems, and internal automation tools. Delivered in under two weeks using React, Supabase, and Node.js.', color: '#2563eb' },
  { icon: Bot, title: 'AI Integration', desc: 'AI integration at UpsellSystems embeds artificial intelligence into existing businesses — through chatbots, automated messaging, document processing, or workflow automation — using APIs from OpenAI and Anthropic. Delivered in under two weeks for clients across Egypt and internationally.', color: '#0891b2' },
  { icon: Cloud, title: 'SaaS Development', desc: 'SaaS development at UpsellSystems takes a software idea from concept to a market-ready subscription product — including database design, user authentication, billing, and a full admin interface. Built on React and Supabase, delivered in under two weeks.', color: '#059669' },
  { icon: ShoppingCart, title: 'E-Commerce Stores', desc: 'E-commerce development at UpsellSystems produces complete online stores with product management, payment processing, cart functionality, and order tracking — built and launched in 3–7 business days for retail brands in Egypt, MENA, and the US market.', color: '#D97706' },
  { icon: Palette, title: 'Digital Brand Identity', desc: 'Digital brand identity at UpsellSystems covers the visual foundation of a business — logo design, color palette, typography, and usage guidelines — delivered as a complete, ready-to-use design system for founders, startups, and businesses worldwide.', color: '#DB2777' },
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
              <div key={i} className={`glass-card animated-border fade-in-up ${visible ? 'visible' : ''}`}
                style={{ 
                  padding: '36px 30px', 
                  transitionDelay: `${i * 0.08}s`, 
                  cursor: 'default',
                  '--hover-color': s.color
                }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: `${s.color}12`, border: `1px solid ${s.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px',
                }}>
                  <Icon size={24} color={s.color} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em', color: '#0F172A' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
