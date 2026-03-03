import { Routes, Route } from 'react-router-dom'
import { useReduceTransparency } from './hooks/useReduceTransparency'
import AppShell from './components/AppShell'
import Home from './pages/Home'
import OmniePage from './pages/OmniePage'
import StudioPage from './pages/StudioPage'
import { useEffect, useState } from 'react'

const CMS_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:1337'

async function fetchPage(slug) {
  const url = new URL('/api/pages', CMS_URL)
  url.searchParams.set('filters[slug][$eq]', slug)
  url.searchParams.set('populate', 'deep')
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`CMS error ${res.status}`)
  const json = await res.json()
  return json.data?.[0] || null
}

function usePage(slug) {
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetchPage(slug)
      .then(p => {
        if (!cancelled) setPage(p)
      })
      .catch(err => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [slug])

  return { page, loading, error }
}

function PageRenderer({ slug, Fallback }) {
  const { page, loading, error } = usePage(slug)

  if (loading) return <div className="page-loading">Ładowanie strony…</div>
  if (error) return <div className="page-error">Błąd ładowania strony z CMS.</div>
  if (!page) return Fallback ? <Fallback /> : <div>Strona nie istnieje.</div>

  const attrs = page.attributes || {}
  const sections = attrs.sections || []

  // Na razie tylko przekazujemy dane dalej – istniejące strony
  // można stopniowo przerabiać tak, by czytały dane z `sections`.
  return <Fallback dataFromCms={{ seo: { title: attrs.seoTitle, description: attrs.seoDescription }, sections }} />
}

export default function App() {
  const [rt, setRt] = useReduceTransparency()
  return (
    <>
      <div className="scene-bg" aria-hidden="true"><span className="blob-c" /></div>
      <AppShell site={{ name: 'WWW Starter', logo: { src: '', alt: '' }, nav: [], footer: '' }} reduceTransparency={rt} onToggleReduce={() => setRt(v => !v)}>
        <Routes>
          <Route
            path="/"
            element={<PageRenderer slug="home" Fallback={Home} />}
          />
          <Route
            path="/o-mnie-2"
            element={<PageRenderer slug="o-mnie-2" Fallback={OmniePage} />}
          />
          <Route
            path="/o-mnie-2/"
            element={<PageRenderer slug="o-mnie-2" Fallback={OmniePage} />}
          />
          <Route
            path="/studio-fotograficzne"
            element={<PageRenderer slug="studio-fotograficzne" Fallback={StudioPage} />}
          />
          <Route
            path="/studio-fotograficzne/"
            element={<PageRenderer slug="studio-fotograficzne" Fallback={StudioPage} />}
          />
        </Routes>
      </AppShell>
    </>
  )
}