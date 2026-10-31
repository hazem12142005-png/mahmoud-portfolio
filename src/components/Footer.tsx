import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { contactEmail, navigation, socialLinks } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">M<span>.</span></span><span className="brand-name">Mahmoud<span>Hassan</span></span></a>
          <p>Digital marketing strategy for Egyptian brands ready to grow with intention.</p>
        </div>
        <div className="footer-links"><h3>Explore</h3>{navigation.slice(0, 6).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
        <div className="footer-links"><h3>Say hello</h3><a href={`mailto:${contactEmail}`}>{contactEmail} <ArrowUpRight size={13} /></a><span className="footer-contact-note">+20 10 XXXX XXXX</span>{socialLinks.map((social) => <span className="social-placeholder footer-social-placeholder" key={social.label}>{social.label} <small>placeholder</small></span>)}</div>
        <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Mahmoud Hassan. Demo portfolio.</span><span>Designed with purpose <i>✳</i></span></div>
    </footer>
  )
}
