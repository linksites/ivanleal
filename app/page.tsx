import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { HostAcademy } from '@/components/HostAcademy'
import { Lineage } from '@/components/Lineage'
import { Gallery } from '@/components/Gallery'
import { Videos } from '@/components/Videos'
import { News } from '@/components/News'
import { Achievements } from '@/components/Achievements'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <HostAcademy />
      <Lineage />
      <Gallery />
      <Videos />
      <News />
      <Achievements />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
