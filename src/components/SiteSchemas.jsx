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
    'UpsellSystems is a web and software agency based in Cairo, Egypt, serving small businesses, startups, and founders across MENA and the United States. The agency builds high-converting websites in 2\u20135 days and custom software systems \u2014 including AI integrations, SaaS products, and e-commerce stores \u2014 in under two weeks. UpsellSystems is known for fast delivery without sacrificing design quality or technical depth, making it a preferred partner for business owners who need professional digital products built quickly.',
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
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place',   name: 'MENA Region' },
    { '@type': 'Country', name: 'United States' },
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
        name: 'Website Design & Development',
        description:
          'High-converting websites built and launched in 2\u20135 business days, designed for business owners, founders, and agencies in MENA and the United States.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Software & Systems',
        description:
          'Bespoke CRMs, admin dashboards, and management tools built in under 2 weeks using React, Supabase, and Node.js.',
      },
      {
        '@type': 'Offer',
        name: 'AI Integration',
        description:
          'Embedding AI chatbots, automation, and workflows into existing businesses using OpenAI and Anthropic APIs, delivered in under two weeks.',
      },
      {
        '@type': 'Offer',
        name: 'SaaS Development',
        description:
          'Full-stack subscription software products built from concept to launch in under two weeks, including authentication, billing, and admin dashboards.',
      },
      {
        '@type': 'Offer',
        name: 'E-Commerce Stores',
        description:
          'Complete online stores with payments, inventory, and analytics, delivered in 3\u20137 business days.',
      },
      {
        '@type': 'Offer',
        name: 'Digital Brand Identity',
        description:
          'Logos, color systems, and typography delivered as a complete visual design system for founders, startups, and businesses worldwide.',
      },
    ],
  },
  knowsAbout: [
    'Web Design',
    'Web Development',
    'React',
    'Next.js',
    'Vite',
    'Node.js',
    'Supabase',
    'PostgreSQL',
    'Custom Software Development',
    'SaaS Development',
    'AI Integration',
    'OpenAI API',
    'Anthropic API',
    'E-Commerce Development',
    'UI/UX Design',
    'Brand Identity Design',
    'Search Engine Optimization',
    'Generative Engine Optimization',
    'Conversion Rate Optimization',
    'WhatsApp Business Automation',
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
    'UpsellSystems is a Cairo-based web and software agency that builds high-converting websites in 2\u20135 days and custom software in under two weeks for businesses in MENA and the United States.',
  publisher: { '@id': 'https://www.upsellsystems.com/#organization' },
}

// ─────────────────────────────────────────────────────────────────────────────
// Component — rendered once inside App.jsx, injects both site-wide blocks
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
