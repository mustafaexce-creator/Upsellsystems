import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import { ArrowRight, X, ExternalLink, Laptop, CheckCircle } from 'lucide-react'

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
  }
]

export default function PortfolioPreview() {
  const [ref, visible] = useInView()
  const [selectedProject, setSelectedProject] = useState(null)

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

  return (
    <section id="portfolio" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="bg-grid" />
      <div ref={ref} className="section-container">
        <div style={{ textAlign: 'center' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Our Work</div>
          <h2 className="section-title">Real projects. <span className="gradient-text">Real results.</span></h2>
          <p className="section-subtitle" style={{ margin: '16px auto 60px', textAlign: 'center' }}>
            Every project here started as an idea. We made it real. Click any card to explore.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {projects.map((p, i) => (
            <div key={i} className={`glass-card fade-in-up ${visible ? 'visible' : ''} animated-border`}
              onClick={() => setSelectedProject(p)}
              style={{ 
                padding: '36px 30px', 
                display: 'flex', 
                flexDirection: 'column', 
                transitionDelay: `${i * 0.1}s`,
                cursor: 'pointer',
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge">{p.category}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 500 }}>{p.client}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px', letterSpacing: '-0.01em', color: '#0F172A' }}>{p.name}</h3>
              <p style={{ fontFamily: "'Space Grotesk Variable'", color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '16px' }}>{p.nameEn}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '20px', flex: 1 }}>{p.summary}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-3)', fontSize: '0.85rem', fontWeight: 600, marginTop: 'auto' }}>
                Explore Project Details <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '52px' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <Link to="/portfolio" className="cta-secondary">See All Projects <ArrowRight size={16} /></Link>
        </div>
      </div>

      {/* PROJECT POPUP MODAL */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          animation: 'fadeIn 0.3s ease'
        }} onClick={() => setSelectedProject(null)}>
          <div className="glass-card" style={{
            width: '100%',
            maxWidth: '880px',
            maxHeight: '90vh',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98))',
            border: '1px solid rgba(109,40,217,0.15)',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.15)',
            animation: 'scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            padding: '8px'
          }} onClick={(e) => e.stopPropagation()}>
            
            <div style={{ overflowY: 'auto', padding: '32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(0,0,0,0.03)',
                border: '1px solid rgba(109,40,217,0.1)',
                color: '#0F172A',
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
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(109,40,217,0.1)'; e.currentTarget.style.borderColor = 'var(--accent-1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'rgba(109,40,217,0.1)'; }}
            >
              <X size={18} />
            </button>

            {/* Header Section */}
            <div style={{ marginBottom: '32px', paddingRight: '48px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span className="badge">{selectedProject.category}</span>
                <span style={{
                  padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600,
                  background: 'rgba(5, 150, 105, 0.08)', color: '#059669', border: '1px solid rgba(5, 150, 105, 0.15)'
                }}>{selectedProject.client}</span>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '4px', letterSpacing: '-0.02em' }}>{selectedProject.name}</h2>
              <p style={{ fontFamily: "'Space Grotesk Variable'", color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{selectedProject.nameEn}</p>
            </div>

            {/* Live Device Frame Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.05em' }}>
                  <Laptop size={14} /> LIVE INTERACTIVE DESKTOP VIEW
                </span>
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: 'var(--accent-3)', 
                    textDecoration: 'none', 
                    fontSize: '0.85rem', 
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#0F172A'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-3)'}
                >
                  Open Live Site <ExternalLink size={14} />
                </a>
              </div>

              {/* Browser Mockup Frame */}
              <div style={{
                width: '100%',
                height: '420px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(109,40,217,0.15)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                background: '#F1F5F9'
              }}>
                {/* Browser Address Bar Header */}
                <div style={{
                  background: 'rgba(0,0,0,0.03)',
                  borderBottom: '1px solid rgba(109,40,217,0.08)',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 16px',
                  gap: '12px',
                  flexShrink: 0
                }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <div style={{
                    background: 'rgba(0,0,0,0.06)',
                    borderRadius: '8px',
                    flex: 1,
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.02em',
                    border: '1px solid rgba(0,0,0,0.04)'
                  }}>
                    {selectedProject.link}
                  </div>
                </div>
                
                {/* Embedded live iframe with desktop resolution scale trick */}
                <div style={{ flex: 1, overflow: 'hidden', background: 'white', position: 'relative' }}>
                  <iframe 
                    src={selectedProject.link} 
                    title={`${selectedProject.name} Live Preview`} 
                    style={{ 
                      width: '166.66%', 
                      height: '166.66%', 
                      border: 'none', 
                      background: 'white',
                      transform: 'scale(0.6)',
                      transformOrigin: 'top left',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Details Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              borderTop: '1px solid rgba(109,40,217,0.06)',
              paddingTop: '32px'
            }}>
              {/* Left Column: Project Overview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700 }}>Project Overview</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>{selectedProject.desc}</p>
              </div>

              {/* Right Column: Tech & Outcome */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '12px' }}>Tech Stack</h4>
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
                  background: 'rgba(5, 150, 105, 0.04)', 
                  border: '1px solid rgba(5, 150, 105, 0.1)', 
                  padding: '20px', 
                  borderRadius: '16px',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start'
                }}>
                  <CheckCircle size={20} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#059669', marginBottom: '4px' }}>Outcome & Impact</h5>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{selectedProject.result}</p>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}
