import { useEffect, useState } from 'react'
import { ArrowUpRight, ShieldCheck, Zap, Users, TrendingUp } from 'lucide-react'

// A mock stream of real-time leads to simulate customer acquisition
const mockLeads = [
  { name: 'Sarah K.', project: 'E-Commerce Store', budget: '$4,500', time: 'Just now' },
  { name: 'Alex M.', project: 'Custom CRM System', budget: '$8,200', time: '2 min ago' },
  { name: 'David L.', project: 'Real Estate Landing', budget: '$3,500', time: '5 min ago' },
  { name: 'Sophia R.', project: 'SaaS Platform', budget: '$12,000', time: '12 min ago' }
]

export default function HeroVisual() {
  const [activeLeadIdx, setActiveLeadIdx] = useState(0)
  const [pulse, setPulse] = useState(false)

  // Rotate leads automatically to simulate a live active funnel
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 800)
      setActiveLeadIdx(prev => (prev + 1) % mockLeads.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const currentLead = mockLeads[activeLeadIdx]

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '440px', height: '440px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Dynamic Background Glows */}
      <div style={{
        position: 'absolute', width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
        filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none', top: '10%', left: '10%'
      }} />

      {/* Orbiting Tech Rings */}
      <svg style={{ position: 'absolute', width: '450px', height: '450px', zIndex: 1, pointerEvents: 'none' }} viewBox="0 0 440 440">
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(109,40,217,0.5)" />
            <stop offset="50%" stopColor="rgba(8,145,178,0.1)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.5)" />
          </linearGradient>
        </defs>
        <circle cx="220" cy="220" r="200" fill="none" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="5 15" style={{ animation: 'spin-slow 50s linear infinite' }} />
        <circle cx="220" cy="220" r="160" fill="none" stroke="rgba(109,40,217,0.1)" strokeWidth="1" strokeDasharray="40 180" style={{ animation: 'spin-slow 30s linear infinite reverse' }} />
      </svg>

      {/* High-Contrast Marketing Badges */}
      
      {/* Badge 1: Production Speed */}
      <div style={{
        position: 'absolute', top: '10px', right: '-20px', zIndex: 5,
        background: 'rgba(255, 255, 255, 0.95)',
        border: '2px solid #2563eb', borderRadius: '12px',
        padding: '10px 14px', backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 24px rgba(37,99,235,0.2), inset 0 0 10px rgba(37,99,235,0.05)',
        animation: 'float-badge 4s ease-in-out infinite',
      }}>
        <p style={{ fontSize: '0.7rem', color: '#2563eb', fontWeight: 800, fontFamily: "'Space Grotesk Variable', sans-serif", letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Zap size={12} fill="#2563eb" /> 2-5 DAYS LAUNCH
        </p>
        <p style={{ fontSize: '0.6rem', color: '#94A3B8', marginTop: '2px', fontWeight: 600 }}>Unmatched agency speed</p>
      </div>

      {/* Badge 2: Conversion Boost */}
      <div style={{
        position: 'absolute', bottom: '70px', left: '-25px', zIndex: 5,
        background: 'rgba(255, 255, 255, 0.95)',
        border: '2px solid #059669', borderRadius: '12px',
        padding: '10px 14px', backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 24px rgba(5,150,105,0.2), inset 0 0 10px rgba(5,150,105,0.05)',
        animation: 'float-badge 4.5s ease-in-out infinite 1s',
      }}>
        <p style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 800, fontFamily: "'Space Grotesk Variable', sans-serif", display: 'flex', alignItems: 'center', gap: '4px' }}>
          <TrendingUp size={12} /> +42% CONVERSION
        </p>
        <p style={{ fontSize: '0.6rem', color: '#94A3B8', marginTop: '2px', fontWeight: 600 }}>Engineered to drive sales</p>
      </div>

      {/* Badge 3: Ultra Fast Loading */}
      <div style={{
        position: 'absolute', bottom: '15px', right: '10px', zIndex: 5,
        background: 'rgba(255, 255, 255, 0.95)',
        border: '2px solid #0891b2', borderRadius: '12px',
        padding: '10px 14px', backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 24px rgba(8,145,178,0.2), inset 0 0 10px rgba(8,145,178,0.05)',
        animation: 'float-badge 5s ease-in-out infinite 2s',
      }}>
        <p style={{ fontSize: '0.7rem', color: '#0891b2', fontWeight: 800, fontFamily: "'Space Grotesk Variable', sans-serif", display: 'flex', alignItems: 'center', gap: '4px' }}>
          🚀 0.4s PAGE LOAD
        </p>
        <p style={{ fontSize: '0.6rem', color: '#94A3B8', marginTop: '2px', fontWeight: 600 }}>Lighthouse score 100/100</p>
      </div>

      {/* The Conversion Engine Dashboard Window */}
      <div style={{
        position: 'relative', zIndex: 3, width: '100%', maxWidth: '370px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.94))',
        border: '1.5px solid rgba(109,40,217,0.2)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 0 50px rgba(109,40,217,0.08), 0 30px 80px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(30px)',
        animation: 'float-editor 6s ease-in-out infinite',
      }}>
        
        {/* Header Bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '14px 18px',
          borderBottom: '1px solid rgba(109,40,217,0.1)',
          background: 'rgba(248, 250, 252, 0.8)',
        }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
          </div>
          <span style={{ fontSize: '0.7rem', color: '#94A3B8', marginLeft: '12px', fontFamily: "'Space Grotesk Variable', sans-serif", fontWeight: 700, letterSpacing: '0.02em' }}>
            yourbusiness.com/analytics
          </span>
          <div style={{ marginLeft: 'auto', background: 'rgba(5,150,105,0.1)', color: '#059669', padding: '2px 8px', borderRadius: '100px', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.05em' }}>
            SECURE Funnel
          </div>
        </div>

        {/* Live funnel metrics panel */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Top funnel metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            
            {/* Left box: active traffic */}
            <div style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.1)', borderRadius: '14px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontWeight: 600 }}>Active Funnel Traffic</span>
                <Users size={12} color="#6d28d9" />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', fontFamily: "'Space Grotesk Variable'" }}>2,482</span>
                <span style={{ fontSize: '0.62rem', color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                  <ArrowUpRight size={10} /> +18%
                </span>
              </div>
            </div>

            {/* Right box: conversion machine */}
            <div style={{ background: 'rgba(8,145,178,0.04)', border: '1px solid rgba(8,145,178,0.1)', borderRadius: '14px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontWeight: 600 }}>Conversion Rate</span>
                <ShieldCheck size={12} color="#0891b2" />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', fontFamily: "'Space Grotesk Variable'" }}>4.82%</span>
                <span style={{ fontSize: '0.62rem', color: '#0891b2', fontWeight: 700 }}>Excellent</span>
              </div>
            </div>
          </div>

          {/* Animated Funnel Conversion Flow Graph */}
          <div style={{ position: 'relative', height: '64px', background: 'rgba(248, 250, 252, 0.6)', border: '1px solid rgba(109,40,217,0.06)', borderRadius: '14px', overflow: 'hidden', padding: '10px 14px' }}>
            <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Customer Growth Curve</span>
            <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40px', overflow: 'visible' }} viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 0,38 Q 15,35 30,28 T 60,18 T 90,4 T 100,2 L 100,40 L 0,40 Z" fill="url(#chartGlow)" />
              <path d="M 0,38 Q 15,35 30,28 T 60,18 T 90,4 T 100,2" fill="none" stroke="#0891b2" strokeWidth="2" style={{ strokeDasharray: '200', strokeDashoffset: '200', animation: 'drawChart 3s forwards' }} />
              <circle cx="100" cy="2" r="3" fill="#0891b2" style={{ animation: 'blink 1s infinite' }} />
            </svg>
          </div>

          {/* Dynamic funnel lead capture card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', justify: 'space-between' }}>
              <span>Live Inbound Leads Funnel</span>
              <span style={{ color: '#059669', animation: 'blink 1.5s infinite' }}>● ACTIVE</span>
            </span>

            <div style={{
              background: 'linear-gradient(135deg, rgba(109,40,217,0.04), rgba(255,255,255,0.95))',
              border: pulse ? '1.5px solid #0891b2' : '1.5px solid rgba(109,40,217,0.15)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.5s ease',
              boxShadow: pulse ? '0 0 15px rgba(8,145,178,0.15)' : 'none',
              transform: pulse ? 'scale(1.02)' : 'scale(1)'
            }}>
              <div>
                <p style={{ fontSize: '0.62rem', color: '#6d28d9', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                  🎉 Lead Captured
                </p>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  {currentLead.name} <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-secondary)' }}>interested in {currentLead.project}</span>
                </h5>
                <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>Funnel source: Organic Google Search (SEO)</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  background: 'rgba(5,150,105,0.08)', color: '#059669', border: '1px solid rgba(5,150,105,0.15)',
                  padding: '4px 10px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: 800
                }}>
                  {currentLead.budget}
                </span>
                <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)', marginTop: '6px' }}>{currentLead.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 18px',
          borderTop: '1px solid rgba(109,40,217,0.1)',
          background: 'rgba(5,150,105,0.04)',
          fontSize: '0.62rem', color: '#059669',
          fontFamily: "'Space Grotesk Variable', sans-serif",
          fontWeight: 700
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} />
            System fully optimized
          </span>
          <span style={{ color: 'var(--text-muted)' }}>Launch Speed: 10x</span>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes drawChart {
          to { strokeDashoffset: 0; }
        }
        @keyframes float-editor {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
