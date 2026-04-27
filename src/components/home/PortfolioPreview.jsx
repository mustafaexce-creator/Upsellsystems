import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  { name: 'Mamoon AI Agency', flag: '🇺🇸', category: 'Website · US Client', desc: 'A world-class single-page site for an American AI chatbot agency — designed to establish instant credibility in a crowded market.', result: 'Launched in days. Client was blown away on first look.' },
  { name: 'Egyptian Red Crescent System', flag: '🏥', category: 'Custom System · Nonprofit', desc: 'A full volunteer mission tracking system with automatic hour calculations and printable certificates of appreciation.', result: 'Eliminated hours of manual work. Made the process official.' },
  { name: 'Prismark Agency Website', flag: '🎨', category: 'Website · Creative Agency', desc: 'A multi-page website that captures the spirit of a creative agency — professional, attractive, and perfectly on-brand.', result: '"Exceeded our expectations" — direct client feedback.' },
  { name: 'Retail Store + Admin Dashboard', flag: '🛒', category: 'Website + System · Retail', desc: 'A 4-page retail site with a full database and an admin panel that lets the owner manage products without any technical skill.', result: 'Total independence for the client to run their own site.' },
]

export default function PortfolioPreview() {
  const [ref, visible] = useInView()
  return (
    <section id="portfolio" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="bg-grid" />
      <div ref={ref} className="section-container">
        <div style={{ textAlign: 'center' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Our Work</div>
          <h2 className="section-title">Real projects. <span className="gradient-text">Real results.</span></h2>
          <p className="section-subtitle" style={{ margin: '16px auto 60px', textAlign: 'center' }}>Every project here started as an idea. We made it real.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {projects.map((p, i) => (
            <div key={i} className={`glass-card fade-in-up ${visible ? 'visible' : ''}`}
              style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', transitionDelay: `${i * 0.1}s` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span className="badge">{p.category}</span>
                <span style={{ fontSize: '1.4rem' }}>{p.flag}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em' }}>{p.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '18px', flex: 1 }}>{p.desc}</p>
              <p style={{ color: '#34D399', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px', lineHeight: 1.6 }}>✦ {p.result}</p>
              <Link to="/portfolio" style={{
                color: 'var(--accent-1)', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem',
                display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#A78BFA'}
                onMouseLeave={e => e.currentTarget.style.color = '#6366F1'}>
                View Details <ExternalLink size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '52px' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <Link to="/portfolio" className="cta-secondary">See All Projects <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
