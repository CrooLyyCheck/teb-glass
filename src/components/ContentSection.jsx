import { useFadeIn } from '../hooks/useFadeIn'
import './ContentSection.css'
export default function ContentSection({ heading, paragraphs }) {
  const ref = useFadeIn()
  const id = `cs-${heading.replace(/\s+/g,'-').toLowerCase().slice(0,20)}`
  return (
    <section className="content-section" aria-labelledby={id} ref={ref}>
      <div className="container-narrow">
        <div className="content-section__card glass-card">
          <h2 id={id}>{heading}</h2>
          {paragraphs.map((p,i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}