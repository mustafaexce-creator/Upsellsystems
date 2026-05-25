import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { ArrowRight, MessageCircle, X, ExternalLink, Laptop, CheckCircle } from 'lucide-react'

const projects = [
  { 
    name: 'Remedi-X Agency', 
    nameEn: 'Remedi-X Agency Website', 
    type: 'Websites', 
    category: 'Single-Page Website', 
    client: 'US AI Agency', 
    summary: 'A world-class single-page digital identity for an American AI agency.',
    desc: 'We designed and developed a high-converting, single-page website for Remedi-X, an American agency specializing in custom AI chatbots. The goal was to create a world-class digital identity that matches the caliber of their services in a hyper-competitive market.', 
    result: 'A site that precisely reflects the brand and speaks directly to their American audience.', 
    techs: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    link: 'https://remedixsolutions.com'
  },
  { 
    name: 'Red Crescent Volunteer System', 
    nameEn: 'Egyptian Red Crescent — Menoufia Branch', 
    type: 'Systems', 
    category: 'Custom System', 
    client: 'Government / Nonprofit', 
    summary: 'An automated volunteer management system calculating hours and certificates.',
    desc: 'We built an end-to-end system that logs volunteer mission details in Google Sheets, automatically calculates hours, and generates professional certificates of appreciation for volunteers exceeding 200 annual hours — complete with mission names, dates, and durations.', 
    result: 'Eliminated hours of manual work and brought a professional, official feel to the volunteering process.', 
    techs: ['React', 'Google Apps Script', 'Google Sheets', 'PDF Generation'],
    link: 'https://ercmissions.vercel.app'
  },
  { 
    name: 'Prismark Agency', 
    nameEn: 'Prismark Agency Website', 
    type: 'Websites', 
    category: 'Multi-Page Website', 
    client: 'Creative Agency', 
    summary: 'A multi-page website balancing striking design with creative agency workflows.',
    desc: 'A multi-page website for a creative agency that balances striking visual design with professional functionality — built to represent their brand with pixel-perfect accuracy.', 
    result: '"Exceeded our expectations" — direct quote from the client.', 
    techs: ['React', 'CSS Animations', 'Responsive Design'],
    link: 'https://unreal-view-319458.framer.app/'
  },
  { 
    name: 'Everlast Fences', 
    nameEn: 'Everlast Fences Website', 
    type: 'Websites', 
    category: '3-Page Website', 
    client: 'Local Business', 
    summary: 'A local business lead-generation engine with organic SEO positioning.',
    desc: 'A three-page website designed for Everlast Fences, with a sharp focus on local SEO and organic customer acquisition — no paid ads needed.', 
    result: 'The site still generates free leads today through organic search (SEO).', 
    techs: ['HTML', 'CSS', 'JavaScript', 'Local SEO'],
    link: 'https://everlastfences.com'
  },
  { 
    name: 'Buffalo Bargains / Bins & Retail Store', 
    nameEn: 'Retail Store with Admin Panel', 
    type: 'Systems', 
    category: 'Website + Admin System', 
    client: 'Retail Business', 
    summary: 'An independent storefront with full product inventory control dashboard.',
    desc: 'A 4-page retail website with an integrated database and an intuitive admin dashboard that lets the business owner add, edit, and delete products independently — zero technical knowledge required.', 
    result: 'Complete independence for the client to manage their own content.', 
    techs: ['React', 'Node.js', 'Database', 'Admin Panel'],
    link: 'https://www.buffalobargains.com'
  },
]

const filters = ['All', 'Websites', 'Systems']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [heroRef, heroVisible] = useInView()
  const [gridRef, gridVisible] = useInView()

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

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
            Every project here started as someone's idea. We turned it into reality. Click any card to explore.
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
              <div key={i} className={`glass-card fade-in-up ${gridVisible ? 'visible' : ''} animated-border`}
                onClick={() => setSelectedProject(p)}
                style={{ 
                  padding: '36px 30px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  transitionDelay: `${i * 0.08}s`,
                  cursor: 'pointer',
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="badge">{p.category}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 500 }}>{p.client}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px', letterSpacing: '-0.01em', color: 'white' }}>{p.name}</h3>
                <p style={{ fontFamily: "'Space Grotesk'", color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '16px' }}>{p.nameEn}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '20px', flex: 1 }}>{p.summary}</p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-3)', fontSize: '0.85rem', fontWeight: 600, marginTop: 'auto' }}>
                  Explore Project Details <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* PROJECT POPUP MODAL */}
          {selectedProject && (
            <div style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(3, 5, 8, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              animation: 'fadeIn 0.3s ease'
            }} onClick={() => setSelectedProject(null)}>
              <div className="glass-card" style={{
                width: '100%',
                maxWidth: '920px',
                background: 'linear-gradient(135deg, rgba(12, 17, 32, 0.95), rgba(8, 11, 22, 0.95))',
                border: '1px solid rgba(99,102,241,0.18)',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
                animation: 'scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }} onClick={(e) => e.stopPropagation()}>
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(99,102,241,0.1)',
                    color: 'white',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.2)'; e.currentTarget.style.borderColor = 'var(--accent-1)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.1)'; }}
                >
                  <X size={18} />
                </button>

                {/* Left Side: Details */}
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                      <span className="badge">{selectedProject.category}</span>
                      <span style={{
                        padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600,
                        background: 'rgba(52, 211, 153, 0.1)', color: '#34D399', border: '1px solid rgba(52, 211, 153, 0.2)'
                      }}>{selectedProject.client}</span>
                    </div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '4px' }}>{selectedProject.name}</h2>
                    <p style={{ fontFamily: "'Space Grotesk'", color: 'var(--text-muted)', fontSize: '0.85rem' }}>{selectedProject.nameEn}</p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(99,102,241,0.08)', paddingTop: '16px' }}>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '8px' }}>Project Overview</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>{selectedProject.desc}</p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '10px' }}>Tech Stack</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {selectedProject.techs.map((t, j) => (
                        <span key={j} style={{
                          padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 500,
                          background: 'var(--glow-1)', color: 'var(--text-secondary)', border: '1px solid var(--border)'
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ 
                    background: 'rgba(52, 211, 153, 0.05)', 
                    border: '1px solid rgba(52, 211, 153, 0.12)', 
                    padding: '16px 20px', 
                    borderRadius: '16px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}>
                    <CheckCircle size={18} style={{ color: '#34D399', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34D399', marginBottom: '2px' }}>Outcome & Impact</h5>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{selectedProject.result}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Device Frame Web Preview */}
                <div style={{ 
                  background: 'rgba(3, 5, 8, 0.4)', 
                  borderLeft: '1px solid rgba(99,102,241,0.08)', 
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  justifyContent: 'center'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Laptop size={14} /> LIVE INTERACTIVE WEBPAGE
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>Live Preview Frame</h4>
                  </div>

                  {/* Browser Mockup Frame */}
                  <div style={{
                    width: '100%',
                    height: '240px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(99,102,241,0.18)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#070A13'
                  }}>
                    {/* Browser Address Bar Header */}
                    <div style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderBottom: '1px solid rgba(99,102,241,0.1)',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 12px',
                      gap: '8px',
                      flexShrink: 0
                    }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                      </div>
                      <div style={{
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: '6px',
                        flex: 1,
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.62rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'monospace',
                        letterSpacing: '0.02em'
                      }}>
                        {selectedProject.link}
                      </div>
                    </div>
                    
                    {/* Embedded live iframe visual layout */}
                    <div style={{ flex: 1, overflow: 'hidden', background: 'white', position: 'relative' }}>
                      <iframe 
                        src={selectedProject.link} 
                        title={`${selectedProject.name} Live Preview`} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          border: 'none', 
                          background: 'white' 
                        }} 
                      />
                    </div>
                  </div>

                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-button"
                    style={{ 
                      textDecoration: 'none', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      padding: '14px' 
                    }}
                  >
                    <span>Visit Live Website <ExternalLink size={15} /></span>
                  </a>
                </div>

              </div>
            </div>
          )}

          <div style={{
            textAlign: 'center', marginTop: '72px', padding: '56px 32px', borderRadius: '24px',
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.06), transparent)',
            border: '1px solid var(--border)',
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Want your project here?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1rem' }}>Let's make it happen — starting today.</p>
            <Link to="/contact" className="cta-button">
              <span><MessageCircle size={17} /> Get in Touch <ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded CSS Animations for Modal Popup */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  )
}
