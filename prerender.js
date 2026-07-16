import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

let template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Inline the built CSS file to eliminate render-blocking external CSS network request
const assetsDir = toAbsolute('dist/assets')
const cssFile = fs.readdirSync(assetsDir).find(file => file.startsWith('index-') && file.endsWith('.css'))
if (cssFile) {
  const cssPath = path.join(assetsDir, cssFile)
  const cssContent = fs.readFileSync(cssPath, 'utf-8')
  const cssLinkRegex = new RegExp(`<link[^>]*href=["']/assets/${cssFile.replace('.', '\\.')}["'][^>]*>`, 'i')
  template = template.replace(cssLinkRegex, `<style>${cssContent}</style>`)
}

// ─────────────────────────────────────────────────────────────────────────────
// Schema definitions — mirrored from SiteSchemas.jsx and FAQPage.jsx.
// Defined here so prerender.js can bake them into static HTML at build time.
// react-helmet-async handles the same schemas client-side for SPA navigation.
// ─────────────────────────────────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'UpsellSystems',
  url: 'https://www.upsellsystems.com',
  logo: 'https://www.upsellsystems.com/logo-512x512.png',
  description: 'UpsellSystems is a web and software agency based in Cairo, Egypt, serving small businesses, startups, and founders across MENA and the United States. The agency builds high-converting websites in 2\u20135 days and custom software systems \u2014 including AI integrations, SaaS products, and e-commerce stores \u2014 in under two weeks.',
  foundingDate: '2023',
  founder: { '@type': 'Person', name: 'Mustafa Essam' },
  telephone: '+20-128-696-0710',
  email: 'mo@upsellsystems.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  areaServed: [
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place',   name: 'MENA Region' },
    { '@type': 'Country', name: 'United States' },
  ],
  sameAs: ['https://wa.me/201286960710'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UpsellSystems',
  description: 'UpsellSystems is a web and software agency based in Cairo, Egypt, serving small businesses, startups, and founders across MENA and the United States.',
  url: 'https://www.upsellsystems.com',
  telephone: '+20-128-696-0710',
  email: 'mo@upsellsystems.com',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '10', bestRating: '5' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'UpsellSystems Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Website Design & Development', description: 'High-converting websites built and launched in 2\u20135 business days.' },
      { '@type': 'Offer', name: 'Custom Software & Systems',    description: 'Bespoke CRMs, admin dashboards, and management tools built in under 2 weeks using React, Supabase, and Node.js.' },
      { '@type': 'Offer', name: 'AI Integration',              description: 'Embedding AI chatbots, automation, and workflows using OpenAI and Anthropic APIs.' },
      { '@type': 'Offer', name: 'SaaS Development',            description: 'Full-stack subscription software products from concept to launch in under 2 weeks.' },
      { '@type': 'Offer', name: 'E-Commerce Stores',           description: 'Complete online stores with payments, inventory, and analytics in 3\u20137 business days.' },
      { '@type': 'Offer', name: 'Digital Brand Identity',      description: 'Logos, color systems, and typography delivered as a complete visual design system.' },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UpsellSystems',
  url: 'https://www.upsellsystems.com',
  description: 'Cairo-based web and software agency building websites in 2\u20135 days and custom software in under 2 weeks for businesses in MENA and the United States.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://www.upsellsystems.com/?s={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is UpsellSystems?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems is a web and software agency based in Cairo, Egypt. The agency builds websites, custom software, AI integrations, SaaS products, and e-commerce stores for small businesses and startups in MENA and the United States. UpsellSystems is known for delivering websites in 2\u20135 days and custom systems in under two weeks.' },
    },
    {
      '@type': 'Question',
      name: 'Where is UpsellSystems located?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems is based in Cairo, Egypt. The agency works entirely remotely and serves clients across Egypt, the broader MENA region, and the United States. All communication is handled via WhatsApp and email.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take UpsellSystems to build a website?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems builds most websites in 2\u20135 business days. Simple single-page websites can be delivered in as little as 2 days. Custom software and SaaS products are delivered in under two weeks.' },
    },
    {
      '@type': 'Question',
      name: 'Can I work with UpsellSystems if I am based in the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. UpsellSystems works with clients in the United States and handles all international projects fully remotely. The agency accepts international payments and communicates asynchronously to accommodate time zone differences.' },
    },
    {
      '@type': 'Question',
      name: 'What makes UpsellSystems different from other web agencies?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems delivers websites in 2\u20135 days, significantly faster than the industry average of 4\u20138 weeks. The agency is run by a senior developer who works directly on every project, meaning clients never deal with account managers or handoff delays.' },
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Route → extra schemas map (site-wide schemas are always included)
// ─────────────────────────────────────────────────────────────────────────────
// NOTE: site-wide schemas (Organization, LocalBusiness, WebSite) are already
// baked into dist/index.html by Vite's client build via SiteSchemas.jsx.
// prerender.js only needs to inject ROUTE-SPECIFIC extras (e.g. FAQPage).
const extraSchemasByRoute = {
  '/faq': [faqPageSchema],
}

function buildSchemaScripts(url) {
  const extras = extraSchemasByRoute[url] || []
  if (extras.length === 0) return ''
  return extras
    .map(s => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n')
}

// ─────────────────────────────────────────────────────────────────────────────
// Prerender all routes
// ─────────────────────────────────────────────────────────────────────────────
const routes = ['/', '/about', '/portfolio', '/contact', '/faq', '/privacy', '/terms', '/404']

const routeMetadata = {
  '/': {
    title: 'Fast Web Design & Custom Software Agency in Cairo | UpsellSystems',
    description: 'UpsellSystems builds websites in 2–5 days and custom software in under 2 weeks. Cairo-based agency serving businesses in MENA and the US.'
  },
  '/about': {
    title: 'About UpsellSystems | Cairo Web & Software Team',
    description: 'Meet UpsellSystems: a Cairo-based web and software agency led by Mustafa Essam. Direct founder access, 2–5 day delivery, full-stack depth, and transparent pricing.'
  },
  '/portfolio': {
    title: 'Web Design & Software Portfolio | UpsellSystems Case Studies',
    description: "Browse UpsellSystems' portfolio of websites, custom web apps, and software projects built for startups, agencies, and businesses in MENA and the US."
  },
  '/faq': {
    title: 'Website & Software Project FAQs | UpsellSystems',
    description: 'Get answers to frequently asked questions about UpsellSystems: project timelines, pricing, international collaboration, and what makes the agency different.'
  },
  '/contact': {
    title: 'Contact UpsellSystems | Start Your Website or Software Project',
    description: 'Reach out to UpsellSystems for a free project quote. Contact via WhatsApp, email, or the project inquiry form. Cairo-based agency, serving MENA and the US.'
  },
  '/privacy': {
    title: 'Privacy Policy | UpsellSystems',
    description: 'UpsellSystems privacy policy: how we collect, use, and protect your data. Learn about your rights and our data handling practices.'
  },
  '/terms': {
    title: 'Terms of Service | UpsellSystems',
    description: 'UpsellSystems terms of service: the terms governing use of the site and project engagements, payments, and deliverables.'
  },
  '/404': {
    title: '404 — Page Not Found | UpsellSystems',
    description: 'Page not found.'
  }
}

for (const url of routes) {
  const appHtml      = render(url)
  const schemaHtml   = buildSchemaScripts(url)

  // Build per-route canonical URL
  const canonicalUrl = `https://www.upsellsystems.com${url === '/' ? '' : url}`

  // Use regex so it matches '</head>' regardless of leading whitespace in built HTML
  const schemaInject = schemaHtml
    ? (m) => schemaHtml + '\n' + m
    : (m) => m

  const meta = routeMetadata[url] || routeMetadata['/']

  const html = template
    .replace('<!--app-html-->', appHtml)
    // Replace the default title tag in index.html
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${meta.title}</title>`
    )
    // Replace the default og:title in index.html
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${meta.title}" />`
    )
    // Replace the default description in index.html
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${meta.description}" />`
    )
    // Replace the default og:description in index.html
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${meta.description}" />`
    )
    // Replace the hardcoded homepage canonical with the per-route canonical
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    // Replace the hardcoded og:url with the per-route og:url
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(/<\/head>/, schemaInject)

  const filePath = `dist${url === '/' ? '/index' : url}.html`
  fs.writeFileSync(toAbsolute(filePath), html)
  console.log('pre-rendered:', filePath)
}

// ─────────────────────────────────────────────────────────────────────────────
// Generate sitemap.xml
// ─────────────────────────────────────────────────────────────────────────────
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((route) => route !== '/404')
  .map((route) => {
    const url = `https://www.upsellsystems.com${route === '/' ? '' : route}`
    let priority = '0.8'
    let changefreq = 'weekly'
    if (route === '/') {
      priority = '1.0'
      changefreq = 'daily'
    } else if (route === '/contact') {
      priority = '0.5'
      changefreq = 'monthly'
    } else if (route === '/privacy' || route === '/terms') {
      priority = '0.3'
      changefreq = 'monthly'
    }
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>
`

fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap)
fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemap)
console.log('generated: sitemap.xml')

// Clean up server bundle so it's not deployed
fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
