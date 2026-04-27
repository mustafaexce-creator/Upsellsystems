import { useState } from 'react'
import useInView from '../hooks/useInView'
import { Send, Phone, Mail, ExternalLink, Zap, Lock, MessageCircle, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [heroRef, heroVisible] = useInView()
  const [formRef, formVisible] = useInView()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000) }

  return (
    <>
      <section style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.1), transparent), linear-gradient(180deg, #05070E, #080B16)',
        paddingTop: '150px', paddingBottom: '60px', position: 'relative',
      }}>
        <div className="bg-grid" />
        <div ref={heroRef} className={`section-container fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ padding: '0 24px', textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Get in Touch</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.04em' }}>
            Let's talk about <span className="gradient-text">your project</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Your first consultation is free. Tell us your idea — we'll handle the rest.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', position: 'relative' }}>
        <div ref={formRef} className="section-container" style={{ paddingTop: '40px' }}>
          <div className={`fade-in-up ${formVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            {/* Form */}
            <div className="glass-card" style={{ padding: '40px 34px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <CheckCircle size={56} color="#34D399" style={{ marginBottom: '22px' }} />
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', letterSpacing: '-0.01em' }}>Message sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '28px', letterSpacing: '-0.01em' }}>Send us a message</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Your Name *</label>
                      <input name="name" required className="form-input" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Email Address *</label>
                      <input name="email" type="email" required className="form-input" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>WhatsApp Number</label>
                      <input name="phone" type="tel" className="form-input" placeholder="+1 234 567 8900" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Project Type</label>
                      <select name="type" className="form-input" value={formData.type} onChange={handleChange} style={{ cursor: 'pointer' }}>
                        <option value="">Select a type...</option>
                        <option value="website">Website</option>
                        <option value="software">Custom Software</option>
                        <option value="ecommerce">E-Commerce Store</option>
                        <option value="ai">AI Integration</option>
                        <option value="saas">SaaS Product</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Estimated Budget</label>
                      <select name="budget" className="form-input" value={formData.budget} onChange={handleChange} style={{ cursor: 'pointer' }}>
                        <option value="">Select a range...</option>
                        <option value="<500">Under $500</option>
                        <option value="500-1000">$500 – $1,000</option>
                        <option value="1000-3000">$1,000 – $3,000</option>
                        <option value=">3000">$3,000+</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Tell us about your project *</label>
                      <textarea name="message" required className="form-input" rows="5" placeholder="Describe your idea, goals, and timeline..." value={formData.message} onChange={handleChange} style={{ resize: 'vertical', minHeight: '120px' }} />
                    </div>
                    <button type="submit" className="cta-button" style={{ justifyContent: 'center', width: '100%', padding: '16px', fontSize: '1rem', marginTop: '6px' }}>
                      <span>Send Your Request <Send size={17} /></span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '4px' }}>Or reach out directly</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px', lineHeight: 1.7 }}>
                Prefer a quick chat? Pick the channel that works best for you.
              </p>
              {[
                { icon: Mail, label: 'Email', value: 'contact@upsellsystems.com', href: 'mailto:contact@upsellsystems.com', color: '#6366F1' },
                { icon: ExternalLink, label: 'Facebook', value: 'UpsellSystems', href: 'https://facebook.com/UpsellSystems', color: '#1877F2' },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="glass-card"
                  style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', gap: '18px', textDecoration: 'none', color: 'white' }}>
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    background: `${item.color}12`, border: `1px solid ${item.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <item.icon size={20} color={item.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ fontWeight: 600, fontSize: '0.92rem' }}>{item.value}</p>
                  </div>
                </a>
              ))}
              <div className="glass-card" style={{ padding: '22px 24px', marginTop: '4px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  ⏰ We typically respond within 24 hours — usually much faster 😉
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className={`fade-in-up ${formVisible ? 'visible' : ''}`} style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '14px', marginTop: '60px', transitionDelay: '0.3s',
          }}>
            {[
              { icon: Zap, label: 'Fast Delivery' },
              { icon: Lock, label: 'Total Confidentiality' },
              { icon: MessageCircle, label: 'Direct Communication' },
              { icon: CheckCircle, label: 'Free Consultation' },
            ].map((b, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '18px 14px', borderRadius: '14px',
                background: 'rgba(12,17,32,0.4)', border: '1px solid var(--border)',
              }}>
                <b.icon size={17} color="var(--accent-1)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
