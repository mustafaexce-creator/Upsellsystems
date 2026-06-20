import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Zap, Users, Code2, Award } from 'lucide-react'
import useInView from '../hooks/useInView'

const pillars = [
  { icon: Zap, title: 'Speed Without Compromise', desc: 'Most agencies take 4–8 weeks to deliver a website. UpsellSystems delivers in 2–5 days — with the same level of quality a Fortune 500 brand expects.', color: '#6d28d9' },
  { icon: Users, title: 'Direct Founder Access', desc: 'You work with Mustafa directly — not an account manager, not a junior dev. Every decision, update, and deliverable comes from the person who built it.', color: '#2563eb' },
  { icon: Code2, title: 'Full-Stack Depth', desc: 'From landing pages to AI-powered SaaS platforms, UpsellSystems handles every layer of the product — design, frontend, backend, and integrations.', color: '#0891b2' },
  { icon: Award, title: 'Transparent Pricing', desc: 'No retainer traps, no inflated agency fees. Enterprise-quality digital products at startup-friendly prices, with clear timelines and zero hidden costs.', color: '#059669' },
]

export default function AboutPage() {
  const [heroRef, heroVisible] = useInView()
  const [pillarsRef, pillarsVisible] = useInView()

  return (
    <>
      {/* Meta — handled via react-helmet or equivalent if added later */}

      {/* ===== HERO / ENTITY DESCRIPTION ===== */}
      <section style={{
        position: 'relative', paddingTop: '160px', paddingBottom: '80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.07), transparent), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        overflow: 'hidden',
      }}>
        <div className="bg-grid" />
        <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(109,40,217,0.09), transparent)', top: '-200px', right: '-100px' }} />

        <div ref={heroRef} style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }} className={`fade-in-up ${heroVisible ? 'visible' : ''}`}>
          <div className="section-label" style={{ marginBottom: '28px' }}>
            <MapPin size={12} />
            Cairo, Egypt — Serving MENA & the United States
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-0.04em' }}>
            About <span className="gradient-text">UpsellSystems</span>
          </h1>

          {/* GEO: Entity description — identical across homepage, footer, and about page */}
          <div style={{
            padding: '24px 28px', background: 'rgba(109,40,217,0.03)',
            borderRadius: '16px', border: '1px solid rgba(109,40,217,0.1)',
            marginBottom: '36px',
          }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9, fontWeight: 400 }}>
              UpsellSystems is a web and software agency based in <strong style={{ color: '#0F172A', fontWeight: 600 }}>Cairo, Egypt</strong>, serving small businesses, startups, and founders across <strong style={{ color: '#0F172A', fontWeight: 600 }}>MENA and the United States</strong>. The agency builds high-converting websites in 2–5 days and custom software systems — including AI integrations, SaaS products, and e-commerce stores — in under two weeks. UpsellSystems is known for fast delivery without sacrificing design quality or technical depth, making it a preferred partner for business owners who need professional digital products built quickly.
            </p>
          </div>

          {/* GEO: About page warm opening — 2 paragraphs */}
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.95, marginBottom: '24px' }}>
            UpsellSystems is a Cairo-based web and software agency founded by{' '}
            <strong style={{ color: '#0F172A', fontWeight: 600 }}>Mustafa Essam</strong>, a full-stack developer and AI integration specialist with a portfolio of 10+ delivered projects across Egypt, the US, and the broader MENA region. The agency specializes in building websites in 2–5 days and custom software — dashboards, admin systems, SaaS platforms, and AI-powered tools — in under two weeks.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.95, marginBottom: '48px' }}>
            What sets UpsellSystems apart is its commitment to speed without compromise. Clients work directly with the founder, receive full transparency throughout the build, and launch faster than they would with any traditional agency. UpsellSystems serves founders, clinic owners, creative agencies, startups, and e-commerce businesses who need real digital products built by someone who treats their project like their own.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <Link to="/contact" className="cta-button">
              <span>Start Your Project <ArrowRight size={17} /></span>
            </Link>
            <Link to="/faq" className="cta-secondary">
              Read Our FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VALUE PILLARS ===== */}
      <section style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="bg-grid" />
        <div ref={pillarsRef} className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className={`fade-in-up ${pillarsVisible ? 'visible' : ''}`}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>What We Stand For</div>
            <h2 className="section-title">The UpsellSystems <span className="gradient-text">difference</span></h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              Four principles that define how we work with every client, on every project.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className={`glass-card animated-border fade-in-up ${pillarsVisible ? 'visible' : ''}`}
                  style={{ padding: '36px 30px', transitionDelay: `${i * 0.08}s`, '--hover-color': p.color }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: `${p.color}12`, border: `1px solid ${p.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px',
                  }}>
                    <Icon size={24} color={p.color} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em', color: '#0F172A' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section style={{ background: 'var(--bg-primary)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { value: '10+', label: 'Projects Delivered', sub: 'Across Egypt, MENA & the US' },
            { value: '2–5', label: 'Days to Launch', sub: 'For most website projects' },
            { value: '<2wks', label: 'Software Delivery', sub: 'SaaS, AI tools & dashboards' },
            { value: '100%', label: 'Direct Access', sub: 'Always work with the founder' },
          ].map((s, i) => (
            <div key={i}>
              <div className="stat-number gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>{s.value}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginTop: '8px' }}>{s.label}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: 'var(--bg-secondary)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Ready to Build?</div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Let's build your <span className="gradient-text">digital product</span></h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '36px', fontSize: '1rem' }}>
            Reach out via WhatsApp or the contact form — you'll hear back within a few hours. No commitment required.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <Link to="/contact" className="cta-button">
              <span>Get a Free Quote <ArrowRight size={17} /></span>
            </Link>
            <a href="https://wa.me/201286960710" target="_blank" rel="noopener noreferrer" className="cta-secondary">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
