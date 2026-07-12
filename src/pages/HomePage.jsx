import { lazy, Suspense } from 'react'
import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import Services from '../components/home/Services'

const WhyUs = import.meta.env.SSR ? (await import('../components/home/WhyUs')).default : lazy(() => import('../components/home/WhyUs'))
const PortfolioPreview = import.meta.env.SSR ? (await import('../components/home/PortfolioPreview')).default : lazy(() => import('../components/home/PortfolioPreview'))
const Testimonials = import.meta.env.SSR ? (await import('../components/home/Testimonials')).default : lazy(() => import('../components/home/Testimonials'))
const CTABanner = import.meta.env.SSR ? (await import('../components/home/CTABanner')).default : lazy(() => import('../components/home/CTABanner'))

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <Suspense fallback={null}>
        <WhyUs />
        <PortfolioPreview />
        <Testimonials />
        <CTABanner />
      </Suspense>
    </>
  )
}

