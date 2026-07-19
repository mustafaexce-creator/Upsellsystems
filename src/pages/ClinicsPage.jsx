import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import useInView from '../hooks/useInView'
import { ArrowRight, Layout, Users, ShieldCheck, HeartPulse, Check } from 'lucide-react'

export default function ClinicsPage() {
  const [heroRef, heroVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  return (
    <>
      <PageMeta
        title="Clinic Website Design Egypt | Healthcare Web Design"
        description="Premium clinic website design in Egypt. We design responsive and modern healthcare websites for medical clinics, featuring multi-specialty lists and booking options."
      />

      <section style={{
        position: 'relative', paddingTop: '160px', paddingBottom: '80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.07), transparent), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        overflow: 'hidden',
      }}>
        <div className="bg-grid" />
        <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(109,40,217,0.09), transparent)', top: '-200px', right: '-100px' }} />

        <div ref={heroRef} style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, textAlign: 'center' }} className={`fade-in-up ${heroVisible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Clinic Website</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.04em' }}>
            Clinic Website <span className="gradient-text">Design in Egypt</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}>
            We design high-performance healthcare websites and medical clinic websites in Cairo. Connect with patients through clear doctor lists, operating schedules, and direct appointments.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-button">
              <span>Start Your Clinic Website <ArrowRight size={17} /></span>
            </Link>
            <a href="https://wa.me/201286960710" target="_blank" rel="noopener noreferrer" className="cta-secondary">
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', position: 'relative' }}>
        <div ref={contentRef} className="section-container" style={{ paddingTop: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Elevate Your <span className="gradient-text">Healthcare Facility</span></h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              We design healthcare website structures that look professional, clean, and build patient trust from the very first click.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }} className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(109,40,217,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <Layout size={20} color="var(--accent-1)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Multi-Specialty Directory</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Help patients find the right specialty: Pediatrics, Dermatology, Cardiology, Dental, or General Medicine.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <Users size={20} color="var(--accent-2)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Doctor Profiles</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                List your medical staff, their clinical fellowships, university affiliations, and years of experience.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(8,145,178,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <HeartPulse size={20} color="var(--accent-3)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Patient Intake & Forms</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Reduce clinic congestion by letting patients book outpatient slots, download instructions, or fill intake info online.
              </p>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(109,40,217,0.03), rgba(37,99,235,0.02))',
            border: '1px solid rgba(109,40,217,0.1)',
            borderRadius: '24px',
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto'
          }} className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', textAlign: 'center' }}>Healthcare Web Design Features</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {[
                'Multi-specialty clinics directories',
                'Comprehensive medical staff sections',
                'Outpatient reservation modules',
                'Insurance networks listings & logs',
                'Google maps branch location markers',
                'Mobile-friendly medical layouts'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(5,150,105,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={12} color="#059669" />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '72px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Do you want to establish an authority clinic website in Cairo?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.95rem' }}>Partner with a professional web design company in Egypt to design your clinic website.</p>
            <Link to="/contact" className="cta-button">
              <span>Request a Clinic Web Design Quote <ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
