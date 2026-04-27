import { useState } from 'react'
import useInView from '../hooks/useInView'
import { Send, Mail, Zap, Lock, MessageCircle, CheckCircle, Loader2 } from 'lucide-react'

// Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/a/macros/upsellsystems.com/s/AKfycbynM2Q5Jpkg9wtIasRnLpPhBRABndLpkzyq7kLB7vov6R0nozaLtmsEz3HxwKZJmSuOXw/exec'

export default function ContactPage() {
  const [heroRef, heroVisible] = useInView()
  const [formRef, formVisible] = useInView()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: formData.type,
          budget: formData.budget,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      })

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', type: '', budget: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

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
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <CheckCircle size={56} color="#34D399" style={{ marginBottom: '22px' }} />
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', letterSpacing: '-0.01em' }}>Message sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>We'll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className="cta-secondary" style={{ margin: '0 auto' }}>
                    Send another message
                  </button>
                </div>
              ) : status === 'error' ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚠️</div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', letterSpacing: '-0.01em' }}>Something went wrong</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Please try again or email us directly.</p>
                  <button onClick={() => setStatus('idle')} className="cta-secondary" style={{ margin: '0 auto' }}>
                    Try again
                  </button>
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
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Phone Number</label>
                      <input name="phone" type="tel" className="form-input" placeholder="+1 234 567 8900" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Project Type</label>
                      <select name="type" className="form-input" value={formData.type} onChange={handleChange} style={{ cursor: 'pointer' }}>
                        <option value="">Select a type...</option>
                        <option value="Website">Website</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="SaaS Product">SaaS Product</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Estimated Budget</label>
                      <select name="budget" className="form-input" value={formData.budget} onChange={handleChange} style={{ cursor: 'pointer' }}>
                        <option value="">Select a range...</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,000">$500 – $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                        <option value="$3,000+">$3,000+</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '7px', fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Tell us about your project *</label>
                      <textarea name="message" required className="form-input" rows="5" placeholder="Describe your idea, goals, and timeline..." value={formData.message} onChange={handleChange} style={{ resize: 'vertical', minHeight: '120px' }} />
                    </div>
                    <button type="submit" disabled={status === 'sending'} className="cta-button"
                      style={{ justifyContent: 'center', width: '100%', padding: '16px', fontSize: '1rem', marginTop: '6px', opacity: status === 'sending' ? 0.7 : 1 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {status === 'sending' ? (
                          <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                        ) : (
                          <>Send Your Request <Send size={17} /></>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '4px' }}>Or reach out directly</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px', lineHeight: 1.7 }}>
                Prefer email? Send us a message and we'll get right back to you.
              </p>
              <a href="mailto:mo@upsellsystems.com" className="glass-card"
                style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', gap: '18px', textDecoration: 'none', color: 'white' }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '12px',
                  background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Mail size={20} color="#6366F1" />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</p>
                  <p style={{ fontWeight: 600, fontSize: '0.92rem' }}>mo@upsellsystems.com</p>
                </div>
              </a>
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

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
