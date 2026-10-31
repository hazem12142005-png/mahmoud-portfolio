import { ArrowDown, ArrowUpRight, BarChart3, Check, Radio, Sparkles } from 'lucide-react'
import { socialLinks } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Digital marketing specialist from Egypt</div>
          <h1>Helping Egyptian Brands <span>Grow Digitally.</span></h1>
          <p className="hero-description">
            I'm Mahmoud Hassan, a Digital Marketing Specialist passionate about helping Egyptian businesses build a strong online presence, reach the right customers, and grow through creative and data-driven marketing strategies.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore My Work <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a className="button button-quiet" href="#contact">Let's Talk <span className="button-arrow"><ArrowUpRight size={15} aria-hidden="true" /></span></a>
          </div>
          <div className="hero-foot">
            <div className="social-row" aria-label="Social media profile placeholders">
              <span>Find me on</span>
              {socialLinks.map((social) => (
                <span className="social-placeholder" key={social.label} title={social.status}>{social.label} <small>placeholder</small></span>
              ))}
            </div>
            <a className="scroll-cue" href="#about"><span><ArrowDown size={14} /></span> Scroll to explore</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile visual and marketing strategy dashboard">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="/images/mahmoud-hassan.png"
              alt="Mahmoud Hassan, Digital Marketing Specialist"
              fetchPriority="high"
            />
            <div className="image-caption"><span className="caption-dot" /> Based in Cairo, Egypt 🇪🇬</div>
          </div>
          <div className="float-card growth-card">
            <span className="float-icon purple-icon"><Sparkles size={16} /></span>
            <span><strong>Egyptian brand growth</strong><small>Built around your audience</small></span>
            <Check className="float-check" size={17} />
          </div>
          <div className="float-card digital-card">
            <span className="float-icon mint-icon"><Radio size={16} /></span>
            <span><strong>Arabic + English</strong><small>Content for every audience</small></span>
            <span className="digital-pulse" aria-hidden="true" />
          </div>
          <div className="float-card analytics-card">
            <span className="float-icon blue-icon"><BarChart3 size={17} /></span>
            <span><strong>Campaign analytics</strong><small>Clarity in every click</small></span>
            <span className="analytics-spark" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>
          </div>
          <div className="visual-stamp"><span>Strategy</span><span>×</span><span>Creativity</span></div>
        </div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  )
}
