import useInView from '../../hooks/useInView'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  { text: 'Working with Mustafa was an incredible experience. He took the time to understand my vision and turned it into something that exceeded every expectation. The site is beautiful, easy to use, and perfectly represents my agency. What stood out most was his responsiveness — he made the entire process smooth and stress-free.', name: 'Mamoon', role: 'AI Agency · USA 🇺🇸', stars: 5 },
  { text: 'It was a pleasure working with Mustafa Essam to build Prismark\'s website. He was professional, creative, and dedicated to our vision from start to finish. The process was collaborative and seamless, and the final result represented our brand beautifully.', name: 'Prismark Agency', role: 'Creative Agency', stars: 5 },
  { text: 'Your expertise and dedication were exceptional. You provided valuable insights, were completely reliable, and delivered high-quality work right on schedule.', name: 'Website Client', role: 'Business Owner', stars: 5 },
  { text: 'As a startup, website work was overwhelming for me. But Mustafa reached out and spent his own hours to deliver a specialized site — I can\'t be grateful enough.', name: 'Startup Founder', role: 'Early-Stage Startup', stars: 4 },
  { text: 'Always available, incredibly fast to respond, and finished my site in just a few days. Every question and revision request was handled quickly and smoothly. I loved his creative touch and willingness to listen — the result exceeded all my expectations. Highly recommend!', name: 'Website Client', role: 'Business Owner', stars: 5 },
]

export default function Testimonials() {
  const [ref, visible] = useInView()
  return (
    <section style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div ref={ref} className="section-container">
        <div style={{ textAlign: 'center' }} className={`fade-in-up ${visible ? 'visible' : ''}`}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Testimonials</div>
          <h2 className="section-title">Don't take our word for it. <span className="gradient-text">Take theirs.</span></h2>
          <p className="section-subtitle" style={{ margin: '16px auto 60px', textAlign: 'center' }}>Real words from real clients — unedited and unfiltered.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card fade-in-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <Quote size={24} color="var(--accent-1)" style={{ opacity: 0.3, marginBottom: '16px' }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.95, marginBottom: '22px' }}>"{t.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', marginBottom: '2px' }}>{t.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
