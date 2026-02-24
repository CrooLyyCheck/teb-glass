import { useEffect } from 'react'
import Hero from '../components/Hero'
import ContentSection from '../components/ContentSection'
import TipsList from '../components/TipsList'
import Accordion from '../components/Accordion'
export default function StudioPage({ data }) {
  useEffect(() => { document.title = 'Studio fotograficzne – 🐇' }, [])
  return (
    <>
      <Hero heading={data.hero.heading} variant="inner" />
      <ContentSection heading={data.equipment.heading} paragraphs={data.equipment.paragraphs} />
      <TipsList heading={data.theory.heading} intro={data.theory.intro} items={data.theory.items} outro={data.theory.outro} />
      <ContentSection heading={data.lighting.heading} paragraphs={data.lighting.paragraphs} />
      <Accordion heading={data.faq.heading} items={data.faq.items} />
    </>
  )
}