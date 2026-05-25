import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Eye, Lock, UserCheck, Mail, ArrowLeft } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function PrivacyPage() {
  const [heroRef, heroVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      desc: 'When you use our contact form, we collect information you voluntarily provide to help us scope your project. This includes your name, email address, phone number, project type, budget range, and any message or files you share with us.'
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      desc: 'We use the collected information solely to understand your project requirements, prepare proposals, and contact you regarding our web development services. Your contact form submissions are safely appended to a secure Google Sheet and delivered as an email notification to our team at mo@upsellsystems.com.'
    },
    {
      icon: Shield,
      title: 'Data Security & Protection',
      desc: 'Your privacy is paramount to us. We implement industry-standard administrative, technical, and physical security measures to safeguard your personal data. We do not sell, trade, or otherwise transfer your information to outside parties.'
    },
    {
      icon: UserCheck,
      title: 'Your Rights & Control',
      desc: 'You have complete control over your data. You may contact us at any time at mo@upsellsystems.com to request access to the information we have saved, ask for corrections, or request complete deletion of your records from our systems.'
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
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Last Updated: May 2026. Learn how we handle and protect your personal information at UpsellSystems.
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
                Have questions about our privacy practices? Reach out directly.
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
