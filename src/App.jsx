import { Routes, Route } from 'react-router-dom'
import { useReduceTransparency } from './hooks/useReduceTransparency'
import AppShell from './components/AppShell'
import Home from './pages/Home'
import OmniePage from './pages/OmniePage'
import StudioPage from './pages/StudioPage'
import content from '../spec/content-model.json'
export default function App() {
  const [rt, setRt] = useReduceTransparency()
  return (
    <>
      <div className="scene-bg" aria-hidden="true"><span className="blob-c" /></div>
      <AppShell site={content.site} reduceTransparency={rt} onToggleReduce={() => setRt(v => !v)}>
        <Routes>
          <Route path="/"                       element={<Home      data={content.pages['home']} />} />
          <Route path="/o-mnie-2"               element={<OmniePage data={content.pages['o-mnie-2']} />} />
          <Route path="/o-mnie-2/"              element={<OmniePage data={content.pages['o-mnie-2']} />} />
          <Route path="/studio-fotograficzne"   element={<StudioPage data={content.pages['studio-fotograficzne']} />} />
          <Route path="/studio-fotograficzne/"  element={<StudioPage data={content.pages['studio-fotograficzne']} />} />
        </Routes>
      </AppShell>
    </>
  )
}