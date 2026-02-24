import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
export default function AppShell({ children, site, reduceTransparency, onToggleReduce }) {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'100dvh', position:'relative', zIndex:1 }}>
      <NavBar logo={site.logo} links={site.nav} reduceTransparency={reduceTransparency} onToggleReduce={onToggleReduce} />
      <main style={{ flex:1 }}>{children}</main>
      <Footer copyright={site.footer} links={site.nav} />
    </div>
  )
}