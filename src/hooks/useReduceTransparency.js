import { useState, useEffect } from 'react'
export function useReduceTransparency() {
  const [rt, setRt] = useState(() => {
    const s = localStorage.getItem('teb-rt')
    return s !== null ? s === 'true' : window.matchMedia('(prefers-reduced-transparency: reduce)').matches
  })
  useEffect(() => {
    document.body.classList.toggle('reduce-transparency', rt)
    localStorage.setItem('teb-rt', String(rt))
  }, [rt])
  return [rt, setRt]
}