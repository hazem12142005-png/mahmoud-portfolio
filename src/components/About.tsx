import { ArrowDownToLine, ArrowUpRight, MapPin, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-photo-frame">
            <img
              src="/images/mahmoud-hassan.png"
              alt="Mahmoud Hassan smiling in a black blazer"
              loading="lazy"
            />
          </div>
          <div className="about-badge"><span className="badge-spark"><Sparkles size={17} /></span><span><strong>Curiosity first</strong><small>Good work starts with a good question.</small></span></div>
          <div className="about-photo-label"><MapPin size={14} /> Cairo, Egypt</div>
          <span className="about-number">01</span>
        </div>

        <div className="about-copy">
          <span className="section-kicker"><span /> About me</span>
          <h2>Growing Egyptian brands through <em>digital strategy.</em></h2>
          <p className="about-lead">I'm Mahmoud Hassan, a creative and results-driven Digital Marketing Specialist &amp; Social Media Strategist based in Cairo, Egypt.</p>
          <p>I help local businesses, startups, and growing brands improve their digital presence through social media marketing, paid advertising, SEO, and content strategy.</p>
          <p>I believe every successful brand needs a clear strategy, strong communication, and a deep understanding of its audience. My goal is to help Egyptian and Arab businesses turn their digital presence into meaningful business growth.</p>
          <div className="about-facts">
            <div><strong>4+ years</strong><span>Fictional demo profile</span></div>
            <div><strong>Arabic &amp; English</strong><span>Bilingual content and communication</span></div>
          </div>
          <div className="about-actions">
            <a className="button button-primary" href="/CVMahmoud/Mahmoud_Hassan_CV.pdf" download>Download CV <ArrowDownToLine size={16} /></a>
            <a className="text-link" href="#services">What I can help with <ArrowUpRight size={15} /></a>
          </div>
          <p className="cv-note">Download Mahmoud's CV as a PDF.</p>
        </div>
      </div>
    </section>
  )
}
