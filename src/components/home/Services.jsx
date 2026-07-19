import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import { Globe, Code, RefreshCw, ShoppingCart, ArrowRight } from 'lucide-react'

const services = [
  { 
    icon: Globe, 
    title: 'Website Design Services', 
    desc: 'Get professional website design in Cairo. We create responsive, custom website design solutions that match your brand identity and attract customers. Built for businesses, clinic owners, and startups in Egypt.', 
    color: '#6d28d9',
    path: '/website-design-cairo'
  },
  { 
    icon: Code, 
    title: 'Website Development Services', 
    desc: 'Fast, secure, and clean-code website development in Cairo. We build high-performance custom websites with optimized layouts, fast page speeds, and flawless SEO architectures using React and Vite.', 
    color: '#2563eb',
    path: '/website-development-cairo'
  },
  { 
    icon: RefreshCw, 
    title: 'Website Redesign Cairo', 
    desc: 'Improve website performance and modernize your digital presence. We redesign business websites to improve user experience, increase conversion rates, and boost search rankings without losing traffic.', 
    color: '#0891b2',
    path: '/website-redesign-cairo'
  },
  { 
    icon: ShoppingCart, 
    title: 'Ecommerce Website Design', 
    desc: 'Professional ecommerce website design in Cairo. We build high-converting online stores in Cairo with cart flows, local payments (Paymob, Fawry), order tracking, and inventory management panels.', 
    color: '#059669',
    path: '/ecommerce-website-design-cairo'
  },
]

export default function Services() {
  const [ref, visible] = useInView()
  return (
    <section id="services" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="bg-grid" />
      <div ref={ref} className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>What We Build</div>
          <h2 className="section-title">Professional Web Services to <span className="gradient-text">Dominate Locally</span></h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            One agency. Every website design and development capability in Cairo. Zero compromises.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Link to={s.path} key={i} className={`glass-card animated-border fade-in-up ${visible ? 'visible' : ''}`}
                style={{ 
                  padding: '36px 30px', 
                  transitionDelay: `${i * 0.08}s`, 
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
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
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '20px', flex: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: s.color, fontSize: '0.85rem', fontWeight: 600 }}>
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
