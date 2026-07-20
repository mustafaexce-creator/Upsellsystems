import useInView from '../hooks/useInView'
import PageMeta from '../components/PageMeta'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  const [heroRef, heroVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  return (
    <>
      <PageMeta
        title="Privacy Policy | UpsellSystems"
        description="UpsellSystems privacy policy: how we collect, use, and protect your data. Learn about your rights and our data handling practices."
      />
      <section style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(109,40,217,0.06), transparent), linear-gradient(180deg, #FFFFFF, #F8FAFC)',
        paddingTop: '150px', paddingBottom: '60px', position: 'relative',
      }}>
        <div className="bg-grid" />
        <div ref={heroRef} className={`section-container fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ padding: '0 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(109,40,217,0.08)', border: '1px solid rgba(109,40,217,0.15)', marginBottom: '24px' }}>
            <Shield size={28} color="#6d28d9" />
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.04em' }}>
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Last updated: October 15, 2023. We believe in transparency and protecting your data.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', position: 'relative' }}>
        <div ref={contentRef} className="section-container" style={{ paddingTop: '40px', paddingBottom: '100px', maxWidth: '800px' }}>
          <div className={`glass-card fade-in-up ${contentVisible ? 'visible' : ''}`} style={{ padding: '50px 60px', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.8))' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1.05rem' }}>
              
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>1. Information We Collect</h2>
                <p>We only collect information that is necessary to provide our services. This includes:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Contact Information:</strong> Name, email address, and phone number when you fill out our contact form.</li>
                  <li><strong>Project Details:</strong> Information you provide about your business, budget, and project requirements.</li>
                  <li><strong>Usage Data:</strong> Anonymous data about how you navigate our website (via standard analytics tools) to help us improve the user experience.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>2. How We Use Your Information</h2>
                <p>We use the information we collect strictly for business purposes:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>To communicate with you regarding your project inquiry.</li>
                  <li>To deliver the services, websites, or software you have requested.</li>
                  <li>To send administrative information, such as invoices or project updates.</li>
                  <li>To improve our website and services based on user feedback.</li>
                </ul>
                <p style={{ marginTop: '12px' }}><strong>We will never sell, rent, or lease your personal information to third parties.</strong></p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>3. Data Security</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>4. Cookies</h2>
                <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>5. Third-Party Links</h2>
                <p>Our website may contain links to third-party sites (such as our portfolio items). These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>6. Contacting Us</h2>
                <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(109,40,217,0.04)', borderRadius: '12px', border: '1px solid rgba(109,40,217,0.1)' }}>
                  <p style={{ fontWeight: 600, color: '#0F172A', marginBottom: '4px' }}>UpsellSystems</p>
                  <p>Email: <a href="mailto:upsellsystems@gmail.com" style={{ color: 'var(--accent-2)', textDecoration: 'none' }}>upsellsystems@gmail.com</a></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .glass-card {
            padding: 30px 24px !important;
          }
        }
      `}</style>
    </>
  )
}
