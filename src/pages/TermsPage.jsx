import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Scale, FileText, FileSignature, AlertCircle, Mail, ArrowLeft } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function TermsPage() {
  const [heroRef, heroVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      desc: 'By accessing or using the services provided by UpsellSystems, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not access or use our services.'
    },
    {
      icon: FileSignature,
      title: 'Services & Project Agreements',
      desc: 'UpsellSystems offers custom web development, design, and system integration services. The specific scope, deliverables, timeline, and payment schedules for each project will be outlined in a separate, written proposal or contract mutually agreed upon by both parties.'
    },
    {
      icon: Scale,
      title: 'Intellectual Property Ownership',
      desc: 'Upon final and complete payment of all project fees, ownership of custom designs, source code, and assets developed specifically for your project will be transferred to you. UpsellSystems retains the right to display the completed work in our public portfolio and marketing materials unless agreed otherwise.'
    },
    {
      icon: AlertCircle,
      title: 'Limitation of Liability',
      desc: 'UpsellSystems provides digital services on an "as-is" and "as-available" basis. While we strive for absolute excellence, we make no warranties of any kind and shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.'
    }
  ]

  return (
    <>
      <section style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.1), transparent), linear-gradient(180deg, #05070E, #080B16)',
        paddingTop: '160px', paddingBottom: '60px', position: 'relative',
      }}>
        <div className="bg-grid" />
        <div ref={heroRef} className={`section-container fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ padding: '0 24px', textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Legal</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.04em' }}>
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Last Updated: May 2026. Please read our guidelines and agreement rules for working with UpsellSystems.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', position: 'relative', paddingBottom: '120px' }}>
        <div ref={contentRef} className={`section-container fade-in-up ${contentVisible ? 'visible' : ''}`} style={{ paddingTop: '0' }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {sections.map((section, idx) => {
              const Icon = section.icon
              return (
                <div key={idx} className="glass-card animated-border" style={{
                  padding: '36px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(12, 17, 32, 0.7), rgba(12, 17, 32, 0.3))',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, var(--glow-1), var(--glow-2))',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-3)',
                      flexShrink: 0
                    }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'white' }}>
                        {section.title}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                        {section.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
                Have questions about our project terms or contract models? Reach out directly.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/" className="cta-secondary">
                  <ArrowLeft size={16} /> Back to Home
                </Link>
                <a href="mailto:mo@upsellsystems.com" className="cta-button" style={{ textDecoration: 'none' }}>
                  <span><Mail size={16} /> mo@upsellsystems.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
