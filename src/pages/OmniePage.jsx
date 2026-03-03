import { useEffect } from 'react'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Timeline from '../components/Timeline'
import ContactSection from '../components/ContactSection'
export default function OmniePage({ data }) {
  const noFormReason = data?.contact?.noFormReason || 'Strona nie zawiera formularza internetowego (głownie Spam i Boty: Masowe wysyłanie formularzy kontaktowych, przeciążające serwer i zaśmiecające skrzynki mailowe).'

  useEffect(() => { document.title = 'O mnie – 🐇' }, [])
  return (
    <>
      <Hero heading="O mnie" variant="inner" />
      <Bio heading={data.bio.heading} subheading={data.bio.subheading} body={data.bio.body}
        photo={data.bio.photo} sectionLabel={data.timeline.sectionLabel} />
      <Timeline heading={data.timeline.heading} intro={data.timeline.intro} items={data.timeline.items} />
      <ContactSection
        heading={data.contact.heading}
        body={data.contact.body}
        cta={data.contact.cta}
        note={noFormReason}
      />
    </>
  )
}