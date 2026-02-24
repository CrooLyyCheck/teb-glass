import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import './Accordion.css'
export default function Accordion({ heading, items }) {
  const [open, setOpen] = useState(null)
  const ref = useFadeIn()
  return (
    <section className="accordion-section" aria-labelledby="faq-heading" ref={ref}>
      <div className="container-narrow">
        <h2 id="faq-heading" style={{textAlign:'center',marginBottom:'var(--space-8)'}}>{heading}</h2>
        <ul className="accordion__list">
          {items.map((item,i) => {
            const isOpen=open===i, pid=`fp-${i}`, bid=`fb-${i}`
            return (
              <li key={i} className="accordion__item glass-card">
                <h3><button id={bid} className="accordion__trigger" aria-expanded={isOpen} aria-controls={pid}
                  onClick={()=>setOpen(isOpen?null:i)}>
                  <span>{item.q}</span>
                  <span className={`accordion__icon${isOpen?' accordion__icon--open':''}`} aria-hidden="true">▾</span>
                </button></h3>
                <div id={pid} role="region" aria-labelledby={bid}
                  className={`accordion__panel${isOpen?' accordion__panel--open':''}`}>
                  <p>{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}