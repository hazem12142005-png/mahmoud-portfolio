import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/portfolio'

export default function Testimonials() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials-heading">
          <div><span className="section-kicker"><span /> Fictional sample testimonials</span><h2 id="testimonials-title">What founders <em>might say.</em></h2></div>
          <p>Demo testimonials for a fictional profile.<br />These are not real customer reviews.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-top"><span className="quote-icon"><Quote size={18} fill="currentColor" /></span><span className="sample-rating" aria-label="Decorative sample rating"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></span></div>
              <p>“{testimonial.quote}”</p>
              <div className="testimonial-person"><span className="testimonial-avatar" aria-hidden="true">{testimonial.initials}</span><span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span><span className="sample-label">Sample</span></div>
            </article>
          ))}
        </div>
        <p className="testimonial-disclaimer">Names, roles, and quotations above are fictional sample content created for this demonstration.</p>
      </div>
    </section>
  )
}
