import { useFadeIn } from '../hooks/useFadeIn'
import './Bio.css'
export default function Bio({ heading, subheading, body, photo, sectionLabel }) {
  const ref = useFadeIn()
  return (
    <section className="bio" aria-labelledby="bio-heading" ref={ref}>
      <div className="container">
        <div className="bio__card glass-card">
          <div className="bio__img-wrap"><img src={photo} alt={heading} loading="lazy" /></div>
          <div className="bio__content">
            {sectionLabel && <h5>{sectionLabel}</h5>}
            <h2 id="bio-heading">{heading}</h2>
            <h3 className="bio__subheading">{subheading}</h3>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}