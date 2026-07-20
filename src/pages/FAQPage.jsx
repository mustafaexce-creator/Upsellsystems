import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import useInView from '../hooks/useInView'
import PageMeta from '../components/PageMeta'

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is UpsellSystems?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems is a professional web design company in Cairo, Egypt. We build responsive custom websites, e-commerce stores, and high-converting landing pages for businesses, doctors, private clinics, and retail brands in Cairo. We are known for fast delivery (2–5 days) and direct developer communication.' },
    },
    {
      '@type': 'Question',
      name: 'Where in Cairo is UpsellSystems located?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems is located in Cairo, Egypt. We serve clients across Cairo, including New Cairo, Maadi, and Heliopolis, working remotely via WhatsApp and email to deliver speed and clarity on every project.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to design and develop a website?',
      acceptedAnswer: { '@type': 'Answer', text: 'We design and launch most custom business websites in Cairo within 2–5 business days. Landing pages and simple websites take 2–3 days, while complex multi-page websites or ecommerce stores take 3–7 business days.' },
    },
    {
      '@type': 'Question',
      name: 'Does UpsellSystems work with clients outside Cairo?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems primarily serves businesses in Cairo, Egypt. All projects are handled remotely via WhatsApp and email, so communication is seamless.' },
    },
  ],
}


const faqs = [
  {
    q: 'What is UpsellSystems?',
    a: 'UpsellSystems is a professional web design company in Cairo, Egypt. We build responsive custom websites, e-commerce stores, and high-converting landing pages for businesses, doctors, private clinics, and retail brands in Cairo. We are known for fast delivery (2–5 days) and direct developer communication.',
  },
  {
    q: 'Where in Cairo is UpsellSystems located?',
    a: 'UpsellSystems is located in Cairo, Egypt. We serve clients across Cairo, including New Cairo, Maadi, and Heliopolis, working remotely via WhatsApp and email to deliver speed and clarity on every project.',
  },
  {
    q: 'How long does it take to design and develop a website?',
    a: 'We design and launch most custom business websites in Cairo within 2–5 business days. Landing pages and simple websites take 2–3 days, while complex multi-page websites or ecommerce stores take 3–7 business days.',
  },
  {
    q: 'What technologies do you use for website development in Cairo?',
    a: 'We build websites using modern web standards including React, Vite, Node.js, and Supabase. This guarantees ultra-fast page speeds, mobile responsiveness, and clean codebase architectures that rank high on search engines.',
  },
  {
    q: 'Do you offer website redesign services in Cairo?',
    a: 'Yes. We specialize in website redesign in Cairo. We audit your existing low-performing site, upgrade the UI/UX design, optimize loading speed, and resolve technical issues to turn it into a modern, lead-generating asset without losing your search rankings.',
  },
  {
    q: 'Do you build clinic websites for doctors and dentists in Cairo?',
    a: 'Yes, clinic website design is one of our primary specialties. We create custom website design solutions for dentists, doctors, and multi-specialty medical clinics in Egypt. These include patient booking forms, clinical service lists, doctor profiles, and clinic location maps.',
  },
  {
    q: 'Can you build an ecommerce online store?',
    a: 'Yes. We design and develop custom ecommerce websites in Cairo. We set up product listings, shopping cart flows, local payments (Paymob, Fawry, cash on delivery), and custom admin panels to manage your store inventory easily.',
  },
  {
    q: 'How much does website design in Cairo cost?',
    a: 'Since every custom website has different goals, page counts, and features, we provide tailored quotes. We offer startup-friendly pricing with zero hidden fees and clear timelines. Contact us via WhatsApp to get a quote within hours.',
  },
  {
    q: 'How do I start my project with UpsellSystems?',
    a: 'You can reach us directly via WhatsApp at +20 128 696 0710, email us at upsellsystems@gmail.com, or fill out the contact form. We will discuss your website design requirements and provide a visual proposal and quote.',
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
      <PageMeta
        title="Website & Software Project FAQs | UpsellSystems"
        description="Get answers to frequently asked questions about UpsellSystems: project timelines, pricing, international collaboration, and what makes the agency different."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
      </Helmet>
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
