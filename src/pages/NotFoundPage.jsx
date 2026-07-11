import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Compass } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function NotFoundPage() {
  const [cardRef, cardVisible] = useInView()

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | UpsellSystems</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109,40,217,0.06), transparent), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        padding: '160px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="bg-grid" />
        <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(109,40,217,0.06), transparent)', top: '10%', left: '10%' }} />
        <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent)', bottom: '10%', right: '10%' }} />

        <div 
          ref={cardRef} 
          className={`glass-card fade-in-up ${cardVisible ? 'visible' : ''}`} 
          style={{
            maxWidth: '560px',
            width: '100%',
            padding: '50px 40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.8))',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '64px', 
            height: '64px', 
            borderRadius: '20px', 
            background: 'rgba(109,40,217,0.08)', 
            border: '1px solid rgba(109,40,217,0.15)', 
            marginBottom: '28px' 
          }}>
            <Compass size={32} color="#6d28d9" className="animate-spin-slow" />
          </div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 5rem)', 
            fontWeight: 900, 
            lineHeight: 1, 
            marginBottom: '16px', 
            letterSpacing: '-0.05em' 
          }} className="gradient-text">
            404
          </h1>

          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            color: '#0F172A', 
            marginBottom: '16px', 
            letterSpacing: '-0.02em' 
          }}>
            Lost in Space?
          </h2>

          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.05rem', 
            lineHeight: 1.7, 
            marginBottom: '36px' 
          }}>
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/" className="cta-button">
              <span>Back to Homepage <ArrowRight size={17} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
