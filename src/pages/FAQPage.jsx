import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'
import useInView from '../hooks/useInView'


const faqs = [
  {
    q: 'What is UpsellSystems?',
    a: 'UpsellSystems is a web and software agency based in Cairo, Egypt. The agency builds websites, custom software, AI integrations, SaaS products, and e-commerce stores for small businesses and startups in MENA and the United States. UpsellSystems is known for delivering websites in 2–5 days and custom systems in under two weeks.',
  },
  {
    q: 'Where is UpsellSystems located?',
    a: 'UpsellSystems is based in Cairo, Egypt. The agency works entirely remotely and serves clients across Egypt, the broader MENA region, and the United States. All communication is handled via WhatsApp and email, making it easy to work with clients regardless of time zone.',
  },
  {
    q: 'How long does it take UpsellSystems to build a website?',
    a: 'UpsellSystems builds most websites in 2–5 business days. Simple single-page websites can be delivered in as little as 2 days. Multi-page websites with advanced functionality typically take 3–5 days. Custom software and SaaS products are delivered in under two weeks.',
  },
  {
    q: 'What types of businesses does UpsellSystems work with?',
    a: 'UpsellSystems works with founders, small business owners, startups, creative agencies, private clinics, and e-commerce brands. The agency has built websites and software for clients in the US, Egypt, and across the MENA region, including AI agencies, healthcare businesses, nonprofit organizations, and retail brands.',
  },
  {
    q: 'Does UpsellSystems build websites for clinics and medical practices?',
    a: 'Yes. UpsellSystems builds websites for private clinics including dermatology clinics, pediatric practices, and other healthcare providers across Egypt and MENA. The agency also develops custom software for clinics, including appointment management systems and patient communication tools.',
  },
  {
    q: 'What services does UpsellSystems offer?',
    a: 'UpsellSystems offers six core services: website design and development, custom software and admin systems, AI integration and automation, SaaS product development, e-commerce store builds, and digital brand identity design. Most services are delivered within 5–14 business days.',
  },
  {
    q: 'Can I work with UpsellSystems if I\'m based in the US?',
    a: 'Yes. UpsellSystems works with clients in the United States and handles all international projects fully remotely. The agency accepts international payments and communicates asynchronously to accommodate time zone differences. Several portfolio projects have been delivered for US-based businesses.',
  },
  {
    q: 'What technology does UpsellSystems use?',
    a: 'UpsellSystems builds custom software using React, Supabase, and Node.js. Websites are built on modern frameworks depending on client needs. AI integrations use APIs from OpenAI, Anthropic, and Meta (WhatsApp Business API). The tech stack is chosen based on what best fits each project\'s performance and scalability requirements.',
  },
  {
    q: 'Does UpsellSystems do AI integrations?',
    a: 'Yes. AI integration is one of UpsellSystems\' core services. The agency embeds AI into existing business workflows — including chatbots, automated messaging systems, appointment tools, and document processing — using APIs from leading AI providers. AI projects are typically delivered in under two weeks.',
  },
  {
    q: 'What is the process for starting a project with UpsellSystems?',
    a: 'The process at UpsellSystems starts with a free consultation via WhatsApp or email. After discussing the project scope, UpsellSystems provides a proposal with timeline and pricing. Once approved, the build begins immediately. Most clients receive their first draft within 48–72 hours and their final product within the agreed delivery window.',
  },
  {
    q: 'How does UpsellSystems communicate with clients?',
    a: 'UpsellSystems communicates primarily via WhatsApp and email. The agency does not require video calls — all updates, revisions, and deliverables are handled asynchronously. Clients typically receive responses within a few hours during business days.',
  },
  {
    q: 'Does UpsellSystems build SaaS products?',
    a: 'Yes. UpsellSystems builds SaaS products from idea to launch, including database architecture, user authentication, subscription management, and admin dashboards. The agency has built SaaS tools for clinics and service businesses using React and Supabase.',
  },
  {
    q: 'Does UpsellSystems build e-commerce stores?',
    a: 'Yes. UpsellSystems builds e-commerce stores with product listings, shopping cart functionality, payment integration, inventory management, and analytics. E-commerce builds typically take 3–7 days depending on the number of products and required integrations.',
  },
  {
    q: 'What makes UpsellSystems different from other web agencies?',
    a: 'UpsellSystems delivers websites in 2–5 days — significantly faster than the industry average of 4–8 weeks. The agency is run by a senior developer who works directly on every project, meaning clients never deal with account managers or handoff delays. Pricing is transparent, communication is direct, and the quality is consistent across every delivery.',
  },
  {
    q: 'How much does a website from UpsellSystems cost?',
    a: 'UpsellSystems does not publish fixed pricing because project scope varies. However, the agency is positioned as enterprise-quality at startup-friendly prices, with no hidden fees. Interested clients can get a free quote by contacting UpsellSystems via WhatsApp or the contact form at upsellsystems.com.',
  },
  {
    q: 'Does UpsellSystems offer brand identity design?',
    a: 'Yes. UpsellSystems offers digital brand identity packages including logo design, color systems, typography selection, and visual guidelines. Brand identity projects are typically delivered alongside website builds to ensure visual consistency across all digital touchpoints.',
  },
  {
    q: 'Is UpsellSystems good for startups?',
    a: 'Yes. UpsellSystems was specifically built to serve early-stage startups and solo founders who need professional digital products without the cost or delays of large agencies. The agency has worked with first-time founders and pre-revenue startups, delivering websites and software tools that help them get to market quickly.',
  },
  {
    q: 'Does UpsellSystems offer custom admin dashboards and internal tools?',
    a: 'Yes. UpsellSystems builds custom admin panels, CRMs, and internal management systems tailored to specific business workflows. These include volunteer management systems, appointment dashboards, and inventory tools — built on React and Supabase for speed and scalability.',
  },
  {
    q: 'Can UpsellSystems build a WhatsApp automation system?',
    a: 'Yes. UpsellSystems has built WhatsApp-based automation systems for businesses, including appointment recovery tools and patient communication flows using the Meta WhatsApp Business API. These systems are built custom to each client\'s workflow and can include AI-powered responses and scheduling logic.',
  },
  {
    q: 'How do I contact UpsellSystems?',
    a: 'UpsellSystems can be reached via WhatsApp at +20 128 696 0710, by email at mo@upsellsystems.com, or through the contact form at upsellsystems.com/contact. The agency is based in Cairo, Egypt and typically responds within a few hours.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      style={{
        border: '1px solid',
        borderColor: isOpen ? 'rgba(109,40,217,0.2)' : 'rgba(109,40,217,0.08)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        background: isOpen
          ? 'linear-gradient(135deg, rgba(109,40,217,0.03), rgba(37,99,235,0.02))'
          : 'rgba(255,255,255,0.8)',
        boxShadow: isOpen ? '0 4px 32px rgba(109,40,217,0.07)' : '0 1px 8px rgba(0,0,0,0.03)',
      }}
    >
      <button
        id={`faq-question-${index + 1}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index + 1}`}
        style={{
          width: '100%', textAlign: 'left', padding: '22px 28px',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px',
        }}
      >
        <span style={{
          fontSize: '1rem', fontWeight: 600, color: isOpen ? '#6d28d9' : '#0F172A',
          lineHeight: 1.5, transition: 'color 0.3s ease',
          fontFamily: "'Space Grotesk Variable', 'Inter Variable', sans-serif",
        }}>
          {item.q}
        </span>
        <div style={{
          flexShrink: 0, width: '28px', height: '28px', borderRadius: '8px',
          background: isOpen ? 'rgba(109,40,217,0.1)' : 'rgba(0,0,0,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}>
          <ChevronDown size={16} color={isOpen ? '#6d28d9' : '#64748b'}
            style={{ transition: 'transform 0.35s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </div>
      </button>

      <div
        id={`faq-answer-${index + 1}`}
        role="region"
        aria-labelledby={`faq-question-${index + 1}`}
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p style={{
          padding: '0 28px 24px',
          color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.9,
          borderTop: '1px solid rgba(109,40,217,0.06)', paddingTop: '16px', marginTop: '0',
        }}>
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const [headerRef, headerVisible] = useInView()
  const [listRef, listVisible] = useInView()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      {/* ===== HEADER ===== */}
      <section style={{
        position: 'relative', paddingTop: '160px', paddingBottom: '80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.07), transparent), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        overflow: 'hidden', textAlign: 'center',
      }}>
        <div className="bg-grid" />
        <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(109,40,217,0.08), transparent)', top: '-200px', right: '-100px' }} />

        <div ref={headerRef} style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}
          className={`fade-in-up ${headerVisible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 28px' }}>Frequently Asked Questions</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.04em' }}>
            Everything you want to know about <span className="gradient-text">UpsellSystems</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '40px' }}>
            Questions real founders and business owners ask before starting a project. If you don't see your question, reach out via WhatsApp — we reply within a few hours.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <a href="https://wa.me/201286960710" target="_blank" rel="noopener noreferrer" className="cta-button">
              <span><MessageCircle size={17} /> Ask on WhatsApp</span>
            </a>
            <Link to="/contact" className="cta-secondary">
              Send an Email
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="bg-grid" />
        <div ref={listRef} className="section-container">
          <div
            className={`fade-in-up ${listVisible ? 'visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '860px', margin: '0 auto' }}
          >
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                index={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            maxWidth: '860px', margin: '60px auto 0',
            padding: '40px', borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(109,40,217,0.05), rgba(37,99,235,0.04))',
            border: '1px solid rgba(109,40,217,0.1)',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Still have questions?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px' }}>
              UpsellSystems typically responds within a few hours via WhatsApp or email. No commitment required to ask.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <Link to="/contact" className="cta-button">
                <span>Contact Us <ArrowRight size={17} /></span>
              </Link>
              <a href="https://wa.me/201286960710" target="_blank" rel="noopener noreferrer" className="cta-secondary">
                <MessageCircle size={16} /> +20 128 696 0710
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
