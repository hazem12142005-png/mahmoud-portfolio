import { BarChart3, Compass, MousePointerClick, PenLine, Search, Target } from 'lucide-react'
import { workProcess } from '../data/portfolio'

const processIcons = {
  research: Search,
  planning: Target,
  content: PenLine,
  execution: MousePointerClick,
  monitoring: BarChart3,
  optimization: Compass,
} as const

export default function HowIWork() {
  return (
    <section className="section process-section" id="how-i-work">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker"><span /> How I work</span>
            <h2>A clear process for<br /><em>meaningful growth.</em></h2>
          </div>
          <p>Each project moves from understanding the audience to measuring results, with decisions guided by the business goals.</p>
        </div>
        <div className="process-grid">
          {workProcess.map((step) => {
            const Icon = processIcons[step.icon]
            return (
              <article className={`service-card process-card tone-${step.tone}`} key={step.number}>
                <div className="service-top">
                  <span className="service-icon"><Icon size={21} strokeWidth={1.8} /></span>
                  <span className="service-number">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
