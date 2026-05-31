import useInView from '../hooks/useInView'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  const [heroRef, heroVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  return (
    <>
      <section style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(109,40,217,0.06), transparent), linear-gradient(180deg, #FFFFFF, #F8FAFC)',
        paddingTop: '150px', paddingBottom: '60px', position: 'relative',
      }}>
        <div className="bg-grid" />
        <div ref={heroRef} className={`section-container fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ padding: '0 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(109,40,217,0.08)', border: '1px solid rgba(109,40,217,0.15)', marginBottom: '24px' }}>
            <FileText size={28} color="#6d28d9" />
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.04em' }}>
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Last updated: October 15, 2023. The rules of engagement for our services.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', position: 'relative' }}>
        <div ref={contentRef} className="section-container" style={{ paddingTop: '40px', paddingBottom: '100px', maxWidth: '800px' }}>
          <div className={`glass-card fade-in-up ${contentVisible ? 'visible' : ''}`} style={{ padding: '50px 60px', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.8))' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1.05rem' }}>
              
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>1. Agreement to Terms</h2>
                <p>By accessing or using the services provided by UpsellSystems ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>2. Services Provided</h2>
                <p>UpsellSystems provides custom web development, software development, AI integration, and digital design services. The specific scope, timeline, and deliverables for any project will be outlined in a separate Statement of Work (SOW) or project agreement.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>3. Payment Terms</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>A deposit (typically 50%) is required before work begins on any custom project.</li>
                  <li>The remaining balance is due upon project completion and before final handover or deployment.</li>
                  <li>All invoices are due within 14 days of receipt unless otherwise specified.</li>
                  <li>We reserve the right to halt work or suspend services if payments are delayed.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>4. Intellectual Property</h2>
                <p>Upon full payment, you will receive all agreed-upon deliverables and the intellectual property rights associated with the final product (excluding any open-source libraries or third-party tools used). UpsellSystems retains the right to display the completed work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) has been explicitly signed.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>5. Revisions and Scope Creep</h2>
                <p>Projects include a specified number of revision rounds as defined in your project agreement. Requests that fall outside the original scope of work will be considered "scope creep" and will be quoted and billed separately.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>6. Limitation of Liability</h2>
                <p>UpsellSystems shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services or the final delivered products.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>7. Termination</h2>
                <p>Either party may terminate a project with written notice. In the event of termination by the client, UpsellSystems will retain the initial deposit and bill for any completed work that exceeds the deposit value.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>8. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(109,40,217,0.04)', borderRadius: '12px', border: '1px solid rgba(109,40,217,0.1)' }}>
                  <p style={{ fontWeight: 600, color: '#0F172A', marginBottom: '4px' }}>UpsellSystems</p>
                  <p>Email: <a href="mailto:mo@upsellsystems.com" style={{ color: 'var(--accent-2)', textDecoration: 'none' }}>mo@upsellsystems.com</a></p>
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
