import { useState } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { ArrowRight, MessageCircle } from 'lucide-react'

const projects = [
  { name: 'Mamoon AI Agency', nameEn: 'Mamoon AI Agency Website', type: 'Websites', category: 'Single-Page Website', client: 'US AI Agency', desc: 'We designed and developed a single-page website for Mamoon, an American agency specializing in AI chatbots. The goal was to create a world-class digital identity that matches the caliber of their services in a hyper-competitive market.', result: 'A site that precisely reflects the brand and speaks directly to their American audience.', techs: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'] },
  { name: 'Red Crescent Volunteer System', nameEn: 'Egyptian Red Crescent — Menoufia Branch', type: 'Systems', category: 'Custom System', client: 'Government / Nonprofit', desc: 'We built an end-to-end system that logs volunteer mission details in Google Sheets, automatically calculates hours, and generates professional certificates of appreciation for volunteers exceeding 200 annual hours — complete with mission names, dates, and durations.', result: 'Eliminated hours of manual work and brought a professional, official feel to the volunteering process.', techs: ['React', 'Google Apps Script', 'Google Sheets', 'PDF Generation'] },
  { name: 'Prismark Agency', nameEn: 'Prismark Agency Website', type: 'Websites', category: 'Multi-Page Website', client: 'Creative Agency', desc: 'A multi-page website for a creative agency that balances striking visual design with professional functionality — built to represent their brand with pixel-perfect accuracy.', result: '"Exceeded our expectations" — direct quote from the client.', techs: ['React', 'CSS Animations', 'Responsive Design'] },
  { name: 'Fencing Company', nameEn: 'Fencing Business Website', type: 'Websites', category: '3-Page Website', client: 'Local Business', desc: 'A three-page website designed for a fencing company, with a sharp focus on local SEO and organic customer acquisition — no paid ads needed.', result: 'The site still generates free leads today through organic search (SEO).', techs: ['HTML', 'CSS', 'JavaScript', 'Local SEO'] },
  { name: 'Retail Store + Dashboard', nameEn: 'Retail Store with Admin Panel', type: 'Systems', category: 'Website + Admin System', client: 'Retail Business', desc: 'A 4-page retail website with an integrated database and an intuitive admin dashboard that lets the business owner add, edit, and delete products independently — zero technical knowledge required.', result: 'Complete independence for the client to manage their own content.', techs: ['React', 'Node.js', 'Database', 'Admin Panel'] },
]

const filters = ['All', 'Websites', 'Systems']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [heroRef, heroVisible] = useInView()
  const [gridRef, gridVisible] = useInView()

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter)

  return (
    <>
      <section style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.1), transparent), linear-gradient(180deg, #05070E, #080B16)',
        paddingTop: '150px', paddingBottom: '60px', position: 'relative',
      }}>
        <div className="bg-grid" />
        <div ref={heroRef} className={`section-container fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ padding: '0 24px', textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Portfolio</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.04em' }}>
            Work that <span className="gradient-text">speaks for itself</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Every project here started as someone's idea. We turned it into reality.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', position: 'relative' }}>
        <div ref={gridRef} className="section-container" style={{ paddingTop: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '52px', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f} className={`filter-btn ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
            {filtered.map((p, i) => (
              <div key={i} className={`glass-card fade-in-up ${gridVisible ? 'visible' : ''}`}
                style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', transitionDelay: `${i * 0.08}s` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="badge">{p.category}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 500 }}>{p.client}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px', letterSpacing: '-0.01em' }}>{p.name}</h3>
                <p style={{ fontFamily: "'Space Grotesk'", color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '16px' }}>{p.nameEn}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '20px', flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {p.techs.map((t, j) => (
                    <span key={j} style={{
                      padding: '3px 12px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 500,
                      background: 'var(--glow-1)', color: 'var(--text-secondary)', border: '1px solid var(--border)',
                    }}>{t}</span>
                  ))}
                </div>
                <p style={{ color: '#34D399', fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.6 }}>✦ {p.result}</p>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center', marginTop: '72px', padding: '56px 32px', borderRadius: '24px',
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.06), transparent)',
            border: '1px solid var(--border)',
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Want your project here?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1rem' }}>Let's make it happen — starting today.</p>
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="cta-button">
              <span><MessageCircle size={17} /> Start on WhatsApp <ArrowRight size={15} /></span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
