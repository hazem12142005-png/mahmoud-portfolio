import { stats } from '../data/portfolio'

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Fictional demonstration profile statistics">
      <div className="container stats-wrap">
        <div className="stats-intro"><span className="mini-label">Local perspective</span><p>Strategy shaped for Egyptian brands and the audiences they want to reach.</p></div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong><span>{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="demo-note">Fictional demo profile · all figures are illustrative, not verified results</p>
      </div>
    </section>
  )
}
