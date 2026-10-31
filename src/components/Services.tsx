import { ArrowUpRight, Compass, MousePointerClick, PenLine, Search, Share2, Target } from 'lucide-react'
import { services } from '../data/portfolio'

const serviceIcons = {
  social: Share2,
  meta: Target,
  google: MousePointerClick,
  seo: Search,
  content: PenLine,
  strategy: Compass,
} as const

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><span className="section-kicker"><span /> What I do</span><h2>Digital marketing for<br /><em>Egyptian growth.</em></h2></div>
          <p>From social media and paid ads to SEO, I shape practical strategies for Egyptian brands and the audiences they want to reach.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <article className={`service-card tone-${service.tone}`} key={service.title}>
                <div className="service-top"><span className="service-icon"><Icon size={21} strokeWidth={1.8} /></span><span className="service-number">{service.number}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link" aria-label={`Discuss ${service.title}`}><ArrowUpRight size={18} /></a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
