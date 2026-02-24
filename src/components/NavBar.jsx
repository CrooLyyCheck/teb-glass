import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
export default function NavBar({ logo, links, reduceTransparency, onToggleReduce }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const h = e => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', h); return () => mq.removeEventListener('change', h)
  }, [])
  return (
    <>
      <header className={`navbar glass-surface${scrolled?' navbar--scrolled':''}`} role="banner">
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo" aria-label="Strona główna">
            <img src={logo.src} alt={logo.alt} width={40} height={40} />
          </Link>
          <nav className="navbar__links" role="navigation" aria-label="Nawigacja główna">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive})=>`navbar__link${isActive?' navbar__link--active':''}`}>{l.label}</NavLink>
            ))}
          </nav>
          <div className="navbar__actions">
            <button className="navbar__reduce-btn" onClick={onToggleReduce} aria-pressed={reduceTransparency}
              title={reduceTransparency?'Wyłącz tryb bez przezroczystości':'Włącz tryb bez przezroczystości'}>
              {reduceTransparency?'◻':'◼'}
            </button>
            <button className="navbar__hamburger" onClick={()=>setOpen(v=>!v)}
              aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Zamknij':'Otwórz menu'}>
              <span className={`hamburger-icon${open?' hamburger-icon--open':''}`} />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div id="mobile-menu" className="navbar__mobile glass-overlay" role="dialog" aria-modal="true" aria-label="Menu">
          <nav aria-label="Nawigacja mobilna">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to==='/'} onClick={()=>setOpen(false)}
                className={({isActive})=>`navbar__mobile-link${isActive?' navbar__mobile-link--active':''}`}>{l.label}</NavLink>
            ))}
          </nav>
          <button className="navbar__mobile-close btn btn-ghost" onClick={()=>setOpen(false)}>Zamknij</button>
        </div>
      )}
    </>
  )
}