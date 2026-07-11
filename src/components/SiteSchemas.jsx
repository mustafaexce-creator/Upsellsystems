import { Helmet } from 'react-helmet-async'

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 1 — Organization + ProfessionalService (site-wide)
// ─────────────────────────────────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'UpsellSystems',
  url: 'https://upsellsystems.com',
  // TODO: Replace logo URL with your actual hosted logo image
  // (PNG or SVG, minimum 112×112 px recommended by Google)
  logo: 'https://upsellsystems.com/favicon.svg',
  description:
    'UpsellSystems is a web and software agency based in Cairo, Egypt, serving small businesses, startups, and founders across MENA and the United States. The agency builds high-converting websites in 2\u20135 days and custom software systems \u2014 including AI integrations, SaaS products, and e-commerce stores \u2014 in under two weeks. UpsellSystems is known for fast delivery without sacrificing design quality or technical depth, making it a preferred partner for business owners who need professional digital products built quickly.',
  foundingDate: '2023',
  founder: {
    '@type': 'Person',
    name: 'Mustafa Essam',
  },
  telephone: '+20-128-696-0710',
  email: 'mo@upsellsystems.com',
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
  sameAs: [
    'https://wa.me/201286960710',
    // TODO: Add your LinkedIn company page URL here, e.g.:
    // 'https://www.linkedin.com/company/upsellsystems'
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 — LocalBusiness (site-wide)
// ─────────────────────────────────────────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UpsellSystems',
  description:
    'UpsellSystems is a web and software agency based in Cairo, Egypt, serving small businesses, startups, and founders across MENA and the United States. The agency builds high-converting websites in 2\u20135 days and custom software systems \u2014 including AI integrations, SaaS products, and e-commerce stores \u2014 in under two weeks.',
  url: 'https://upsellsystems.com',
  telephone: '+20-128-696-0710',
  email: 'mo@upsellsystems.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
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
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 4 — WebSite (site-wide)
// ─────────────────────────────────────────────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UpsellSystems',
  url: 'https://upsellsystems.com',
  description:
    'UpsellSystems is a Cairo-based web and software agency that builds high-converting websites in 2\u20135 days and custom software in under two weeks for businesses in MENA and the United States.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://upsellsystems.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Component — rendered once inside App.jsx, injects all three site-wide blocks
// ─────────────────────────────────────────────────────────────────────────────
export default function SiteSchemas() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  )
}
