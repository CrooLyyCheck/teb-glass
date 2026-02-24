import { useFadeIn } from '../hooks/useFadeIn'
import './TipsList.css'
export default function TipsList({ heading, intro, items, outro }) {
  const ref = useFadeIn()
  return (
    <section className="tips" aria-labelledby="tips-heading" ref={ref}>
      <div className="container-narrow">
        <h2 id="tips-heading">{heading}</h2>
        {intro && <p className="tips__intro">{intro}</p>}
        <ul className="tips__list glass-card">
          {items.map((item,i) => (
            <li key={i} className="tips__item">
              <span className="tips__bullet" aria-hidden="true">✦</span><span>{item}</span>
            </li>
          ))}
        </ul>
        {outro && <p className="tips__outro">{outro}</p>}
      </div>
    </section>
  )
}