import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, X } from 'lucide-react'
import { projects, type PortfolioProject } from '../data/portfolio'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeProject && !dialog.open) dialog.showModal()
    if (!activeProject && dialog.open) dialog.close()
  }, [activeProject])

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading section-heading-split projects-heading">
          <div><span className="section-kicker"><span /> Selected demo work</span><h2>Ideas in motion.<br /><em>Work with intention.</em></h2></div>
          <p>Fictional Egyptian brand case studies showing how a clear point of view can shape a campaign from the ground up.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <span className="project-image-number">{project.number}</span>
                <span className="project-demo-tag">Demo concept</span>
              </div>
              <div className="project-card-content">
                <div className="project-category"><span />{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-view" type="button" onClick={() => setActiveProject(project)}>View details <ArrowDownRight size={17} /></button>
              </div>
            </article>
          ))}
        </div>
        <p className="project-disclaimer"><span>For clarity</span> — every project shown here is a fictional portfolio demonstration, not verified client work or a claim of real results.</p>
      </div>

      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onCancel={(event) => { event.preventDefault(); setActiveProject(null) }}
        onClick={(event) => { if (event.target === dialogRef.current) setActiveProject(null) }}
      >
        {activeProject && (
          <div className="dialog-inner">
            <button className="dialog-close" type="button" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button>
            <img src={activeProject.image} alt={activeProject.imageAlt} />
            <div className="dialog-copy"><span className="project-category"><span />{activeProject.category} · Fictional demo</span><h2 id="project-dialog-title">{activeProject.title}</h2><p>{activeProject.detail}</p><a className="text-link" href="#contact" onClick={() => setActiveProject(null)}>Discuss a similar project <ArrowUpRight size={15} /></a></div>
          </div>
        )}
      </dialog>
    </section>
  )
}
