import { useRef, useState } from 'react'
import './Gallery.css'
export default function Gallery({ heading, images }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  function go(idx) {
    const c = Math.max(0, Math.min(idx, images.length-1)); setActive(c)
    trackRef.current?.children[c]?.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' })
  }
  return (
    <section className="gallery" aria-labelledby="gallery-heading">
      <div className="container"><h2 id="gallery-heading" className="gallery__heading">{heading}</h2></div>
      <div className="gallery__track-wrap">
        <div className="gallery__track" ref={trackRef} role="list">
          {images.map((src,i) => (
            <div key={i} role="listitem" onClick={()=>go(i)}
              className={`gallery__item glass-card${i===active?' gallery__item--active':''}`}>
              <img src={src} alt={`Galeria zdjęcie ${i+1}`} loading={i===0?'eager':'lazy'} />
            </div>
          ))}
        </div>
      </div>
      <div className="gallery__controls" role="group" aria-label="Nawigacja galerii">
        <button className="gallery__btn btn btn-ghost" onClick={()=>go(active-1)} disabled={active===0} aria-label="Poprzednie">‹</button>
        <div className="gallery__dots">
          {images.map((_,i) => (
            <button key={i} onClick={()=>go(i)} aria-label={`Zdjęcie ${i+1}`} aria-pressed={i===active}
              className={`gallery__dot${i===active?' gallery__dot--active':''}`} />
          ))}
        </div>
        <button className="gallery__btn btn btn-ghost" onClick={()=>go(active+1)} disabled={active===images.length-1} aria-label="Następne">›</button>
      </div>
    </section>
  )
}