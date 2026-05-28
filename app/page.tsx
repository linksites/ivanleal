import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Gallery } from '@/components/Gallery'
import { Videos } from '@/components/Videos'
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
      <Gallery />
      <Videos />
      <Achievements />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
