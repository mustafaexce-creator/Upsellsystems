import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import Services from '../components/home/Services'
import WhyUs from '../components/home/WhyUs'
import PortfolioPreview from '../components/home/PortfolioPreview'
import Testimonials from '../components/home/Testimonials'
import CTABanner from '../components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <WhyUs />
      <PortfolioPreview />
      <Testimonials />
      <CTABanner />
    </>
  )
}
