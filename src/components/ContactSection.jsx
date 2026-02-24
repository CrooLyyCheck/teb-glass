import { useFadeIn } from '../hooks/useFadeIn'
import './ContactSection.css'
export default function ContactSection({ heading, body, cta }) {
  const ref = useFadeIn()
  return (
    <section className="contact" aria-labelledby="contact-heading" ref={ref}>
      <div className="container-narrow">
        <div className="contact__card glass-card">
          <h2 id="contact-heading">{heading}</h2>
          <p>{body}</p>
          <a href={cta.href} className="btn contact__cta">{cta.label}</a>
        </div>
      </div>
    </section>
  )
}