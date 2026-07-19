import { lazy, Suspense } from 'react'
import PageMeta from '../components/PageMeta'
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
      <PageMeta
        title="Fast Web Design & Custom Software Agency in Cairo | UpsellSystems"
        description="UpsellSystems builds websites in 2–5 days and custom software in under 2 weeks. Cairo-based agency serving businesses in Cairo, Egypt."
      />
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

