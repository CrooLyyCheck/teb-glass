import { useFadeIn } from '../hooks/useFadeIn'
import './Timeline.css'
export default function Timeline({ heading, intro, items }) {
  const ref = useFadeIn()
  return (
    <section className="timeline" aria-labelledby="timeline-heading" ref={ref}>
      <div className="container-narrow">
        <h2 id="timeline-heading" style={{textAlign:'center',marginBottom:'var(--space-4)'}}>{heading}</h2>
        {intro && <p style={{textAlign:'center',marginBottom:'var(--space-10)'}}>{intro}</p>}
        <ol className="timeline__list">
          {items.map((item,i) => (
            <li key={i} className="timeline__item">
              <div className="timeline__node" aria-hidden="true" />
              <div className="timeline__card glass-card">
                <time className="timeline__date">{item.date}</time>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}