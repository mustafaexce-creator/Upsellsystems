import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SiteSchemas from './components/SiteSchemas'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloat from './components/WhatsAppFloat'

const AboutPage = import.meta.env.SSR ? (await import('./pages/AboutPage')).default : lazy(() => import('./pages/AboutPage'))
const PortfolioPage = import.meta.env.SSR ? (await import('./pages/PortfolioPage')).default : lazy(() => import('./pages/PortfolioPage'))
const ContactPage = import.meta.env.SSR ? (await import('./pages/ContactPage')).default : lazy(() => import('./pages/ContactPage'))
const FAQPage = import.meta.env.SSR ? (await import('./pages/FAQPage')).default : lazy(() => import('./pages/FAQPage'))
const PrivacyPage = import.meta.env.SSR ? (await import('./pages/PrivacyPage')).default : lazy(() => import('./pages/PrivacyPage'))
const TermsPage = import.meta.env.SSR ? (await import('./pages/TermsPage')).default : lazy(() => import('./pages/TermsPage'))
const NotFoundPage = import.meta.env.SSR ? (await import('./pages/NotFoundPage')).default : lazy(() => import('./pages/NotFoundPage'))

// SEO Service pages
const WebDesignPage = import.meta.env.SSR ? (await import('./pages/WebDesignPage')).default : lazy(() => import('./pages/WebDesignPage'))
const WebDevPage = import.meta.env.SSR ? (await import('./pages/WebDevPage')).default : lazy(() => import('./pages/WebDevPage'))
const WebRedesignPage = import.meta.env.SSR ? (await import('./pages/WebRedesignPage')).default : lazy(() => import('./pages/WebRedesignPage'))
const EcommercePage = import.meta.env.SSR ? (await import('./pages/EcommercePage')).default : lazy(() => import('./pages/EcommercePage'))

// SEO Industry pages
const DentistsPage = import.meta.env.SSR ? (await import('./pages/DentistsPage')).default : lazy(() => import('./pages/DentistsPage'))
const DoctorsPage = import.meta.env.SSR ? (await import('./pages/DoctorsPage')).default : lazy(() => import('./pages/DoctorsPage'))
const ClinicsPage = import.meta.env.SSR ? (await import('./pages/ClinicsPage')).default : lazy(() => import('./pages/ClinicsPage'))

// SEO Local landing pages
const NewCairoPage = import.meta.env.SSR ? (await import('./pages/NewCairoPage')).default : lazy(() => import('./pages/NewCairoPage'))
const MaadiPage = import.meta.env.SSR ? (await import('./pages/MaadiPage')).default : lazy(() => import('./pages/MaadiPage'))
const HeliopolisPage = import.meta.env.SSR ? (await import('./pages/HeliopolisPage')).default : lazy(() => import('./pages/HeliopolisPage'))

function App() {
  return (
    <>
      <SiteSchemas />
      <div className="noise-overlay" />
      <ScrollToTop />
      <WhatsAppFloat />
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* SEO Service pages */}
            <Route path="/website-design-cairo" element={<WebDesignPage />} />
            <Route path="/website-development-cairo" element={<WebDevPage />} />
            <Route path="/website-redesign-cairo" element={<WebRedesignPage />} />
            <Route path="/ecommerce-website-design-cairo" element={<EcommercePage />} />

            {/* SEO Industry pages */}
            <Route path="/website-design-for-dentists-cairo" element={<DentistsPage />} />
            <Route path="/website-design-for-doctors-cairo" element={<DoctorsPage />} />
            <Route path="/clinic-website-design-cairo" element={<ClinicsPage />} />

            {/* SEO Local pages */}
            <Route path="/website-design-new-cairo" element={<NewCairoPage />} />
            <Route path="/website-design-maadi" element={<MaadiPage />} />
            <Route path="/website-design-heliopolis" element={<HeliopolisPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
