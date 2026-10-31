import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react'
import { contactEmail } from '../data/portfolio'

type FormStatus = { kind: 'idle' | 'loading' | 'success' | 'error' | 'demo'; message: string }
type ContactFields = { name: string; email: string; subject: string; message: string }

const initialFields: ContactFields = { name: '', email: '', subject: '', message: '' }
const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

export default function Contact() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<FormStatus>({ kind: 'idle', message: '' })

  const updateField = (field: keyof ContactFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }))
    if (status.kind !== 'idle') setStatus({ kind: 'idle', message: '' })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return

    if (!endpoint) {
      setStatus({ kind: 'demo', message: `Message delivery is unavailable because a Formspree endpoint is not configured. Please email ${contactEmail} directly.` })
      return
    }

    setStatus({ kind: 'loading', message: 'Sending your message…' })
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!response.ok) {
        setStatus({ kind: 'error', message: `The email service could not accept your message. Please try again later or email ${contactEmail} directly.` })
        return
      }
      setStatus({ kind: 'success', message: 'Thanks — your message has been sent. I’ll be in touch soon.' })
      setFields(initialFields)
    } catch {
      setStatus({ kind: 'error', message: `We could not send your message. Check your connection and Formspree endpoint, then try again or email ${contactEmail} directly.` })
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="section-kicker section-kicker-light"><span /> Your next chapter</span>
          <h2>Let's Grow Your Brand <em>Together.</em></h2>
          <p>Are you running a business or starting a new project in Egypt? Let's discuss how we can improve your digital presence and reach your target audience.</p>
          <div className="contact-details">
            <a href={`mailto:${contactEmail}`}><span className="contact-detail-icon"><Mail size={17} /></span><span><small>Drop me a line</small><strong>{contactEmail}</strong></span><ArrowUpRight size={16} /></a>
            <div><span className="contact-detail-icon"><MapPin size={17} /></span><span><small>Based in</small><strong>Cairo, Egypt</strong></span></div>
            <div><span className="contact-detail-icon"><Phone size={17} /></span><span><small>Phone · demo placeholder</small><strong>+20 10 XXXX XXXX</strong></span></div>
            <div className="contact-social-placeholder"><span className="contact-detail-icon linkedin-text">in</span><span><small>Social profile placeholder</small><strong>LinkedIn — not connected</strong></span></div>
          </div>
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
        </div>

        <div className="contact-form-card">
          <div className="form-heading"><span className="form-heading-icon"><Check size={17} /></span><div><h3>Tell me about your project</h3><p>I’ll get back to you as soon as I can.</p></div></div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>Full name<input name="name" autoComplete="name" placeholder="Your name" value={fields.name} onChange={(event) => updateField('name', event.target.value)} required /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" placeholder="Your email address" value={fields.email} onChange={(event) => updateField('email', event.target.value)} required /></label>
            </div>
            <label>Subject<input name="subject" placeholder="What can I help with?" value={fields.subject} onChange={(event) => updateField('subject', event.target.value)} required /></label>
            <label>Message<textarea name="message" rows={4} placeholder="A little about your project, goals, or timeline…" value={fields.message} onChange={(event) => updateField('message', event.target.value)} required /></label>
            <button className="button button-primary form-submit" type="submit" disabled={status.kind === 'loading'}>
              {status.kind === 'loading' ? <>Sending <LoaderCircle className="spin" size={16} /></> : <>Send message <ArrowUpRight size={17} /> </>}
            </button>
            {status.message && <p className={`form-status status-${status.kind}`} role={status.kind === 'error' ? 'alert' : 'status'}>{status.kind === 'success' && <Check size={16} />}{status.message}</p>}
            <p className="form-privacy">Your details are only used to respond to this enquiry.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
