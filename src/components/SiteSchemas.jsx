import { Helmet } from 'react-helmet-async'

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 1 — Organization + ProfessionalService (site-wide)
//
// Single authoritative entity for UpsellSystems. ProfessionalService is the
// correct type for a remote/WhatsApp-based agency with no walk-in location.
// LocalBusiness was removed — it implied a physical storefront and created a
// duplicate, unlinked entity that confused AI parsers.
//
// Valuable data from the old LocalBusiness block (priceRange, aggregateRating,
// hasOfferCatalog) has been merged here so nothing is lost.
// ─────────────────────────────────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@id': 'https://www.upsellsystems.com/#organization',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'UpsellSystems',
  url: 'https://www.upsellsystems.com',
  // TODO: Replace logo URL with your actual hosted logo image
  // (PNG or SVG, minimum 112×112 px recommended by Google)
  logo: 'https://www.upsellsystems.com/logo-512x512.png',
  description:
    'UpsellSystems is a web and software agency based in Cairo, Egypt, serving small businesses, startups, and founders in Cairo. The agency builds high-converting websites in 2\u20135 days and custom software systems \u2014 including AI integrations, SaaS products, and e-commerce stores \u2014 in under two weeks. UpsellSystems is known for fast delivery without sacrificing design quality or technical depth, making it a preferred partner for business owners who need professional digital products built quickly.',
  foundingDate: '2023',
  founder: {
    '@type': 'Person',
    name: 'Mustafa Essam',
  },
  telephone: '+20-128-696-0710',
  email: 'mo@upsellsystems.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  areaServed: [
    { '@type': 'City', name: 'Cairo' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '10',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'UpsellSystems Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Website Design Services',
        description:
          'Professional and responsive website design services in Cairo, Egypt. Custom layouts built for business owners, clinic owners, and startups.',
      },
      {
        '@type': 'Offer',
        name: 'Website Development Services',
        description:
          'Fast and secure React website development in Cairo, Egypt, using Vite and Node.js for clean codebase optimization.',
      },
      {
        '@type': 'Offer',
        name: 'Website Redesign Cairo',
        description:
          'Modernize old websites, improve website speed performance, and optimize UI/UX layouts for local conversion in Egypt.',
      },
      {
        '@type': 'Offer',
        name: 'Ecommerce Website Design',
        description:
          'Custom online store development with checkout optimization, inventory admin panels, and Fawry/Paymob payment gateway integration.',
      },
    ],
  },
  knowsAbout: [
    'Web Design',
    'Web Development',
    'Website Redesign',
    'Ecommerce Website Design',
    'Dental Clinic Website Design',
    'Medical Website Design',
    'Local Search Engine Optimization (SEO)',
    'React & Vite Development',
    'Responsive User Interface Design (UI/UX)',
    'Conversion Rate Optimization (CRO)',
    'Fast Loading Speed Performance Engineering'
  ],
  sameAs: [
    'https://wa.me/201286960710',
    // TODO: Add your LinkedIn company page URL here, e.g.:
    // 'https://www.linkedin.com/company/upsellsystems'
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 — WebSite (site-wide)
//
// Links back to the organization entity via publisher @id so parsers see one
// connected graph instead of isolated blocks.
// ─────────────────────────────────────────────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@id': 'https://www.upsellsystems.com/#website',
  '@type': 'WebSite',
  name: 'UpsellSystems',
  url: 'https://www.upsellsystems.com',
  description:
    'UpsellSystems is a Cairo-based web and software agency that builds high-converting websites in 2\u20135 days and custom software in under two weeks for businesses in Cairo, Egypt.',
  publisher: { '@id': 'https://www.upsellsystems.com/#organization' },
}

// ─────────────────────────────────────────────────────────────────────────────
// Component — rendered once inside App.jsx, injects both site-wide blocks.
//
// During SSR / prerender this returns null because prerender.js already bakes
// the schemas into every static page (and is the single source of truth).
// On the client this renders normally so schemas stay present during SPA
// navigation without a full page reload.
// ─────────────────────────────────────────────────────────────────────────────
export default function SiteSchemas() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  )
}
