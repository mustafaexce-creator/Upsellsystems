import useInView from '../../hooks/useInView'
import useCountUp from '../../hooks/useCountUp'
import { Rocket, Clock, Smile, Zap } from 'lucide-react'

function StatItem({ icon: Icon, value, suffix, prefix, label, color }) {
  const [ref, visible] = useInView()
  const count = useCountUp(value, 2200, visible)
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '28px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px',
          background: `${color}15`, border: `1px solid ${color}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={20} color={color} />
        </div>
      </div>
      <div className="stat-number" style={{ color }}>{prefix}{visible ? count : 0}{suffix}</div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '6px', fontWeight: 500 }}>{label}</p>
    </div>
  )
}

export default function StatsBar() {
  const [ref, visible] = useInView()
  return (
    <section style={{ background: 'var(--bg-secondary)', position: 'relative', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div ref={ref} className={`fade-in-up ${visible ? 'visible' : ''}`} style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 24px' }}>
        <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', padding: '12px 0' }}>
          <StatItem icon={Rocket} value={10} prefix="" suffix="+" label="Projects Delivered" color="#6366F1" />
          <StatItem icon={Clock} value={5} prefix="" suffix=" Days" label="Average Delivery" color="#8B5CF6" />
          <StatItem icon={Smile} value={100} prefix="" suffix="%" label="Client Satisfaction" color="#22D3EE" />
          <StatItem icon={Zap} value={2} prefix="<" suffix=" Weeks" label="For Custom Software" color="#34D399" />
        </div>
      </div>
    </section>
  )
}
