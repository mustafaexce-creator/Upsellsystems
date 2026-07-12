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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
