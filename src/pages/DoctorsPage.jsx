import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import useInView from '../hooks/useInView'
import { ArrowRight, UserPlus, Clipboard, ShieldCheck, Heart, Check } from 'lucide-react'

export default function DoctorsPage() {
  const [heroRef, heroVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  return (
    <>
      <PageMeta
        title="Website Design for Doctors Cairo | Medical Web Design Egypt"
        description="Premium website design for doctors and medical consultants in Cairo, Egypt. Custom medical website design, doctor profiles, and booking integrations."
      />

      <section style={{
        position: 'relative', paddingTop: '160px', paddingBottom: '80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.07), transparent), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        overflow: 'hidden',
      }}>
        <div className="bg-grid" />
        <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(109,40,217,0.09), transparent)', top: '-200px', right: '-100px' }} />

        <div ref={heroRef} style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, textAlign: 'center' }} className={`fade-in-up ${heroVisible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Medical Web Design</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.04em' }}>
            Website Design for <span className="gradient-text">Doctors in Cairo</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}>
            Establish a professional medical presence in Egypt. We design custom clinic website development solutions for private consultants, doctors, and specialists.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-button">
              <span>Start Your Doctor Website <ArrowRight size={17} /></span>
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
            <h2 className="section-title">Professional Medical <span className="gradient-text">Websites</span></h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              We build secure, informative, and patient-centered websites that list your credentials and make booking clinical consultations straightforward.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }} className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(109,40,217,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <UserPlus size={20} color="var(--accent-1)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Doctor Portfolio & CV</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Highlight your medical qualifications, fellowships, medical board certifications, clinical research publications, and years of practice.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <Clipboard size={20} color="var(--accent-2)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Clinical Symptoms & Treatments</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Educate patients on medical diagnoses, outpatient clinic operating schedules, treatment options, and disease prevention guidelines.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(8,145,178,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={20} color="var(--accent-3)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Patient Reviews & Trust</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Display patient reviews, healthcare blog articles, medical FAQs, and official clinic details to reassure prospective patients.
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
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', textAlign: 'center' }}>Medical Web Site Features</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {[
                'Detailed clinical doctor profiles',
                'Treatment categories list modules',
                'Patient appointment inquiry forms',
                'Patient success story & review sections',
                'Google maps branch locators',
                'Fast responsive medical page layouts'
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Are you a doctor looking to build a professional medical clinic website?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.95rem' }}>Partner with a professional web design company in Egypt to launch your doctor portal website.</p>
            <Link to="/contact" className="cta-button">
              <span>Book a Medical Web Design Consultation <ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
