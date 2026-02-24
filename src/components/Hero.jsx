import './Hero.css'
export default function Hero({ heading, body, variant='inner' }) {
  return (
    <section className={`hero hero--${variant}`} aria-labelledby="hero-heading">
      <div className="hero__inner container-narrow fade-up">
        <h1 id="hero-heading" className="hero__heading">{heading}</h1>
        {body && <p className="hero__body" style={{whiteSpace:'pre-line'}}>{body}</p>}
      </div>
    </section>
  )
}