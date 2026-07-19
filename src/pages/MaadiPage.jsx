import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import useInView from '../hooks/useInView'
import { ArrowRight, MapPin, Coffee, Compass, Anchor, Check } from 'lucide-react'

export default function MaadiPage() {
  const [heroRef, heroVisible] = useInView()
  const [contentRef, contentVisible] = useInView()

  return (
    <>
      <PageMeta
        title="Website Design Maadi | Web Design Maadi Services"
        description="Premium website design in Maadi, Cairo. We are a professional web design company in Maadi helping local businesses, clinics, and boutiques build fast, responsive websites."
      />

      <section style={{
        position: 'relative', paddingTop: '160px', paddingBottom: '80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.07), transparent), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        overflow: 'hidden',
      }}>
        <div className="bg-grid" />
        <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(109,40,217,0.09), transparent)', top: '-200px', right: '-100px' }} />

        <div ref={heroRef} style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, textAlign: 'center' }} className={`fade-in-up ${heroVisible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Local SEO Maadi</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.04em' }}>
            Website Design in <span className="gradient-text">Maadi</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}>
            Attract local and expat clients. We design stunning, responsive websites and ecommerce stores for boutiques, clinics, real estate, and cafes in Maadi, Cairo.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-button">
              <span>Start Your Maadi Project <ArrowRight size={17} /></span>
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
            <h2 className="section-title">Creative Web Solutions for <span className="gradient-text">Maadi Brands</span></h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              We design elegant web experiences that match the unique aesthetic and community-focused vibe of Maadi.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }} className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(109,40,217,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <Coffee size={20} color="var(--accent-1)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Boutiques, Cafes & Retail</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Stunning online menus, product showrooms, and custom ecommerce catalog structures designed to convert foot traffic into online sales.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <Anchor size={20} color="var(--accent-2)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Real Estate & Service Firms</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Clean layout structures, lead capture forms, and fast mobile-optimized pages for local service agencies and expat property finders.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(8,145,178,0.08)', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '20px' }}>
                <Compass size={20} color="var(--accent-3)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Responsive UI & Local SEO</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                We code clean Semantic HTML tags and metadata, making your site load instantly and index perfectly for local searches in Maadi.
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
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', textAlign: 'center' }}>Local Web Services in Maadi</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {[
                'Mobile UX layout styling optimization',
                'Custom responsive web design frameworks',
                'Google Maps profile routing integrations',
                'Fast responsive layouts for phone screen sizes',
                'WhatsApp click-to-contact triggers',
                'Direct senior developer support'
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Need a website for your Maadi clinic, shop, or company?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.95rem' }}>Partner with a local expert web design company to launch in 2–5 business days.</p>
            <Link to="/contact" className="cta-button">
              <span>Request a Maadi Web Quote <ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
