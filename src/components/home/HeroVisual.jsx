import { ArrowRight, CheckCircle2, Clock3, LayoutTemplate, SearchCheck, Smartphone } from 'lucide-react'

const offerPoints = [
  { icon: LayoutTemplate, label: 'Custom website design' },
  { icon: SearchCheck, label: 'SEO-ready page structure' },
  { icon: Smartphone, label: 'Mobile-first experience' },
  { icon: Clock3, label: 'Launch-ready in 2-5 days' },
]

export default function HeroVisual() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '430px',
      border: '1px solid rgba(109,40,217,0.14)',
      borderRadius: '22px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.92))',
      boxShadow: '0 24px 70px rgba(15,23,42,0.08)',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '18px 20px',
        borderBottom: '1px solid rgba(109,40,217,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        background: 'rgba(248,250,252,0.72)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} />
          <span style={{
            fontSize: '0.76rem',
            color: '#475569',
            fontWeight: 700,
            fontFamily: "'Space Grotesk Variable', sans-serif",
          }}>
            Cairo Website Launch Plan
          </span>
        </div>
        <span style={{
          fontSize: '0.66rem',
          color: '#6d28d9',
          fontWeight: 800,
          padding: '4px 9px',
          borderRadius: '999px',
          background: 'rgba(109,40,217,0.08)',
          whiteSpace: 'nowrap',
        }}>
          SEO FIRST
        </span>
      </div>

      <div style={{ padding: '28px' }}>
        <div style={{ marginBottom: '26px' }}>
          <p style={{
            fontSize: '0.72rem',
            color: '#6d28d9',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '10px',
          }}>
            Built for serious local businesses
          </p>
          <h2 style={{
            fontSize: 'clamp(1.55rem, 2.5vw, 2rem)',
            color: '#0F172A',
            fontWeight: 850,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            A fast website that explains your offer clearly.
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.75 }}>
            Strategy, design, code, and launch support handled by one senior-led team.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '10px', marginBottom: '26px' }}>
          {offerPoints.map(({ icon: Icon, label }) => (
            <div key={label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '11px',
              padding: '12px 14px',
              borderRadius: '14px',
              background: 'rgba(109,40,217,0.035)',
              border: '1px solid rgba(109,40,217,0.08)',
            }}>
              <Icon size={17} color="#6d28d9" strokeWidth={2.2} />
              <span style={{ color: '#334155', fontSize: '0.9rem', fontWeight: 650 }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginBottom: '24px',
        }}>
          <div style={{
            padding: '16px',
            borderRadius: '16px',
            background: '#0F172A',
            color: 'white',
          }}>
            <p style={{ fontSize: '1.55rem', fontWeight: 850, lineHeight: 1 }}>2-5</p>
            <p style={{ fontSize: '0.72rem', color: '#CBD5E1', marginTop: '6px', fontWeight: 650 }}>days to launch</p>
          </div>
          <div style={{
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(5,150,105,0.08)',
            border: '1px solid rgba(5,150,105,0.16)',
          }}>
            <p style={{ fontSize: '1.55rem', fontWeight: 850, lineHeight: 1, color: '#047857' }}>5.0</p>
            <p style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px', fontWeight: 650 }}>early client rating</p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          paddingTop: '18px',
          borderTop: '1px solid rgba(109,40,217,0.1)',
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#475569',
            fontSize: '0.82rem',
            fontWeight: 650,
          }}>
            <CheckCircle2 size={16} color="#059669" />
            Clear scope before we start
          </span>
          <ArrowRight size={18} color="#6d28d9" />
        </div>
      </div>
    </div>
  )
}
