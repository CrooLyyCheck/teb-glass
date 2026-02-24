import { useEffect } from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
export default function Home({ data }) {
  useEffect(() => { document.title = '🐇' }, [])
  return (<><Hero heading={data.hero.heading} body={data.hero.body} variant="home" /><Gallery heading={data.gallery.heading} images={data.gallery.images} /></>)
}