import { ArrowUpRight, Check } from 'lucide-react'
import { marketingSkills, marketingTools } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container skills-grid">
        <div className="skills-intro">
          <span className="section-kicker"><span /> The toolkit</span>
          <h2>Local insight. <em>Bilingual reach.</em></h2>
          <p>I bring together Arabic and English content, channel knowledge, creative thinking, and measurement tools to keep each idea connected to a clear purpose.</p>
          <a className="text-link" href="#contact">Let’s find your mix <ArrowUpRight size={15} /></a>
          <div className="skills-decoration" aria-hidden="true"><span /><span /><span /></div>
        </div>
        <div className="skills-content">
          <div className="skill-group">
            <div className="skill-group-heading"><span className="skill-group-icon"><Check size={16} /></span><h3>Marketing skills</h3><span className="skill-group-line" /></div>
            <div className="skill-pills">
              {marketingSkills.map((skill, index) => <span className="skill-pill" key={skill}><span className="pill-index">0{index + 1}</span>{skill}</span>)}
            </div>
          </div>
          <div className="skill-group tools-group">
            <div className="skill-group-heading"><span className="skill-group-icon blue-group-icon"><ArrowUpRight size={16} /></span><h3>Tools I work with</h3><span className="skill-group-line" /></div>
            <div className="tool-grid">
              {marketingTools.map((tool, index) => <span className="tool-chip" key={tool}><span className={`tool-monogram monogram-${index % 4}`}>{tool.slice(0, 1)}</span>{tool}</span>)}
            </div>
          </div>
          <p className="skills-footnote">Tools are examples in this fictional demonstration profile.</p>
        </div>
      </div>
    </section>
  )
}
