import { useFadeIn } from '../hooks/useFadeIn'
import './ContactSection.css'
export default function ContactSection({ heading, body, cta, note }) {
  const ref = useFadeIn()
  return (
    <section className="contact" aria-labelledby="contact-heading" ref={ref}>
      <div className="container-narrow">
        <div className="contact__card glass-card">
          <h2 id="contact-heading">{heading}</h2>
          <p>{body}</p>
          <div className="contact__actions">
            <a href={cta.href} className="btn contact__cta">{cta.label}</a>
            <a href="tel:112" className="btn contact__cta">Zadzwoń do mnie</a>
          </div>
          {note && (
            <p className="contact__note">
              <strong>Dlaczego bez formularza?</strong> {note}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}