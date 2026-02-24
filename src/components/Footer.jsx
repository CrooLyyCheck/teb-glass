import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer({ copyright, links }) {
  return (
    <footer className="footer glass-surface" role="contentinfo">
      <div className="footer__inner container">
        <nav className="footer__nav" aria-label="Nawigacja stopki">
          {links.map(l => <Link key={l.to} to={l.to} className="footer__link">{l.label}</Link>)}
        </nav>
        <p className="footer__copy">{copyright}</p>
      </div>
    </footer>
  )
}