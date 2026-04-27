import { useEffect, useState } from 'react'

const codeLines = [
  { indent: 0, tokens: [{ text: 'const', color: '#C792EA' }, { text: ' website', color: '#82AAFF' }, { text: ' = ', color: '#89DDFF' }, { text: 'await', color: '#C792EA' }, { text: ' build', color: '#82AAFF' }, { text: '({', color: '#89DDFF' }] },
  { indent: 1, tokens: [{ text: 'client', color: '#F07178' }, { text: ': ', color: '#89DDFF' }, { text: '"you"', color: '#C3E88D' }, { text: ',', color: '#89DDFF' }] },
  { indent: 1, tokens: [{ text: 'speed', color: '#F07178' }, { text: ': ', color: '#89DDFF' }, { text: '"2-5 days"', color: '#C3E88D' }, { text: ',', color: '#89DDFF' }] },
  { indent: 1, tokens: [{ text: 'quality', color: '#F07178' }, { text: ': ', color: '#89DDFF' }, { text: '"world-class"', color: '#C3E88D' }, { text: ',', color: '#89DDFF' }] },
  { indent: 1, tokens: [{ text: 'price', color: '#F07178' }, { text: ': ', color: '#89DDFF' }, { text: '"unmatched"', color: '#C3E88D' }] },
  { indent: 0, tokens: [{ text: '});', color: '#89DDFF' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: 'await', color: '#C792EA' }, { text: ' deploy', color: '#82AAFF' }, { text: '(', color: '#89DDFF' }, { text: 'website', color: '#82AAFF' }, { text: ');', color: '#89DDFF' }] },
  { indent: 0, tokens: [{ text: '// ', color: '#546E7A' }, { text: '✓ Live in production', color: '#546E7A' }] },
]

function TypewriterLine({ line, delay, onDone }) {
  const [visibleChars, setVisibleChars] = useState(0)
  const fullText = line.tokens.map(t => t.text).join('')

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars(prev => {
          if (prev >= fullText.length) { clearInterval(interval); onDone && onDone(); return prev }
          return prev + 1
        })
      }, 30 + Math.random() * 20)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [])

  let charCount = 0
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', lineHeight: '2', paddingLeft: `${line.indent * 20}px`, minHeight: '1.6em', whiteSpace: 'pre' }}>
      {line.tokens.map((token, ti) => {
        const tokenStart = charCount
        charCount += token.text.length
        const visiblePart = token.text.slice(0, Math.max(0, visibleChars - tokenStart))
        return <span key={ti} style={{ color: token.color }}>{visiblePart}</span>
      })}
      {visibleChars < fullText.length && visibleChars > 0 && (
        <span style={{ display: 'inline-block', width: '8px', height: '15px', background: '#6366F1', marginLeft: '1px', animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }} />
      )}
    </div>
  )
}

export default function HeroVisual() {
  const [startedLines, setStartedLines] = useState(1)

  const handleLineDone = (lineIdx) => {
    if (lineIdx + 1 < codeLines.length) {
      setTimeout(() => setStartedLines(prev => Math.max(prev, lineIdx + 2)), 100)
    }
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '460px' }}>
      {/* Orbital rings */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '420px', height: '420px', borderRadius: '50%',
        border: '1px solid rgba(99,102,241,0.08)',
        animation: 'spin-slow 30s linear infinite',
      }}>
        <div style={{
          position: 'absolute', top: '-5px', left: '50%',
          width: '10px', height: '10px', borderRadius: '50%',
          background: '#6366F1', boxShadow: '0 0 15px rgba(99,102,241,0.6)',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '-5px',
          width: '7px', height: '7px', borderRadius: '50%',
          background: '#22D3EE', boxShadow: '0 0 12px rgba(34,211,238,0.6)',
        }} />
      </div>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '340px', height: '340px', borderRadius: '50%',
        border: '1px solid rgba(139,92,246,0.06)',
        animation: 'spin-slow 22s linear infinite reverse',
      }}>
        <div style={{
          position: 'absolute', top: '10%', right: '-4px',
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#8B5CF6', boxShadow: '0 0 12px rgba(139,92,246,0.5)',
        }} />
      </div>

      {/* Floating badge — top right */}
      <div style={{
        position: 'absolute', top: '-10px', right: '-10px', zIndex: 5,
        background: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.05))',
        border: '1px solid rgba(52,211,153,0.2)', borderRadius: '12px',
        padding: '10px 16px', backdropFilter: 'blur(12px)',
        animation: 'float-badge 4s ease-in-out infinite',
      }}>
        <p style={{ fontSize: '0.7rem', color: '#34D399', fontWeight: 600, fontFamily: "'Space Grotesk'" }}>● Deployed</p>
        <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '2px' }}>upsellsystems.com</p>
      </div>

      {/* Floating badge — bottom left */}
      <div style={{
        position: 'absolute', bottom: '20px', left: '-20px', zIndex: 5,
        background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.05))',
        border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px',
        padding: '10px 16px', backdropFilter: 'blur(12px)',
        animation: 'float-badge 5s ease-in-out infinite 1s',
      }}>
        <p style={{ fontSize: '0.7rem', color: '#A78BFA', fontWeight: 600, fontFamily: "'Space Grotesk'" }}>⚡ 2.4 days avg</p>
        <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '2px' }}>delivery time</p>
      </div>

      {/* Performance badge — bottom right */}
      <div style={{
        position: 'absolute', bottom: '-5px', right: '20px', zIndex: 5,
        background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))',
        border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px',
        padding: '10px 16px', backdropFilter: 'blur(12px)',
        animation: 'float-badge 4.5s ease-in-out infinite 2s',
      }}>
        <p style={{ fontSize: '0.7rem', color: '#F59E0B', fontWeight: 600, fontFamily: "'Space Grotesk'" }}>100/100</p>
        <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '2px' }}>Lighthouse score</p>
      </div>

      {/* Code Editor */}
      <div style={{
        position: 'relative', zIndex: 3,
        background: 'linear-gradient(135deg, rgba(12,17,32,0.95), rgba(8,11,22,0.9))',
        border: '1px solid rgba(99,102,241,0.15)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 0 60px rgba(99,102,241,0.08), 0 30px 80px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)',
        animation: 'float-editor 6s ease-in-out infinite',
      }}>
        {/* Title bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '14px 18px',
          borderBottom: '1px solid rgba(99,102,241,0.08)',
          background: 'rgba(5,7,14,0.6)',
        }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
          </div>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '12px', fontFamily: "'JetBrains Mono'" }}>build.js</span>
          <div style={{ marginLeft: 'auto', fontSize: '0.6rem', color: 'var(--text-muted)', display: 'flex', gap: '12px' }}>
            <span>UTF-8</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Code content */}
        <div style={{ padding: '20px 22px', minHeight: '220px' }}>
          {codeLines.map((line, i) => (
            i < startedLines ? (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <span style={{ color: 'rgba(100,116,139,0.4)', fontSize: '0.7rem', fontFamily: "'JetBrains Mono'", minWidth: '18px', textAlign: 'right', lineHeight: '2', userSelect: 'none' }}>{i + 1}</span>
                <TypewriterLine line={line} delay={0} onDone={() => handleLineDone(i)} />
              </div>
            ) : (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <span style={{ color: 'rgba(100,116,139,0.4)', fontSize: '0.7rem', fontFamily: "'JetBrains Mono'", minWidth: '18px', textAlign: 'right', lineHeight: '2', userSelect: 'none' }}>{i + 1}</span>
                <div style={{ minHeight: '1.6em', lineHeight: '2' }} />
              </div>
            )
          ))}
        </div>

        {/* Status bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 18px',
          borderTop: '1px solid rgba(99,102,241,0.08)',
          background: 'rgba(99,102,241,0.06)',
          fontSize: '0.6rem', color: 'var(--text-muted)',
          fontFamily: "'JetBrains Mono'",
        }}>
          <span>✓ Build successful</span>
          <span>Ln 9, Col 28</span>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float-editor {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
