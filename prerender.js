import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

let template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

function stripDefaultSeoTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/i, '')
    .replace(/<meta\s+name=["']keywords["'][^>]*>\s*/i, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/i, '')
    .replace(/<meta\s+property=["']og:title["'][^>]*>\s*/i, '')
    .replace(/<meta\s+property=["']og:description["'][^>]*>\s*/i, '')
    .replace(/<meta\s+property=["']og:url["'][^>]*>\s*/i, '')
}

function buildHelmetHead(helmet) {
  return [
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    // NOTE: helmet?.script is intentionally excluded here.
    // Site-wide ld+json schemas are injected by prerender.js directly
    // (see siteWideSchemas below). Including helmet.script would duplicate
    // them because SiteSchemas.jsx also renders them during SSR.
  ]
    .filter(Boolean)
    .join('\n    ')
}

function extractLeadingHeadTags(html) {
  const tags = []
  let bodyHtml = html
  const headTagPattern = /^(<title[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script\b[^>]*>[\s\S]*?<\/script>)/

  while (true) {
    const match = bodyHtml.match(headTagPattern)
    if (!match) break

    tags.push(match[0])
    bodyHtml = bodyHtml.slice(match[0].length)
  }

  return {
    headTags: tags.join('\n    '),
    bodyHtml,
  }
}

function injectHelmetHead(html, helmetHead) {
  if (html.includes('<!--helmet-head-->')) {
    return html.replace('<!--helmet-head-->', () => helmetHead)
  }

  return html.replace(/<\/head>/i, (m) => `${helmetHead}\n  ${m}`)
}

template = stripDefaultSeoTags(template)

// Remove font preload hints — CSS is inlined below so fonts are discovered
// immediately; keeping the preloads caused "resource couldn't be loaded" errors
// in validators when the preload and @font-face fetch didn't match timing.
template = template.replace(/<link\s+rel=["']preload["'][^>]*as=["']font["'][^>]*>\s*/gi, '')

// Inline the built CSS file to eliminate render-blocking external CSS network request
const assetsDir = toAbsolute('dist/assets')
const cssFile = fs.readdirSync(assetsDir).find(file => file.startsWith('index-') && file.endsWith('.css'))
if (cssFile) {
  const cssPath = path.join(assetsDir, cssFile)
  const cssContent = fs.readFileSync(cssPath, 'utf-8')
  const cssLinkRegex = new RegExp(`<link[^>]*href=["']/assets/${cssFile.replace('.', '\\.')}["'][^>]*>`, 'i')
  template = template.replace(cssLinkRegex, () => `<style>${cssContent}</style>`)
}

// ─────────────────────────────────────────────────────────────────────────────
// Schema definitions — the SINGLE SOURCE OF TRUTH for prerendered HTML.
//
// These are baked directly into every static page by prerender.js.
// SiteSchemas.jsx still exists for client-side SPA navigation, but
// its helmet output is intentionally stripped above (buildHelmetHead)
// to prevent duplicate ld+json blocks in the prerendered HTML.
// ─────────────────────────────────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@id': 'https://www.upsellsystems.com/#organization',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'UpsellSystems',
  url: 'https://www.upsellsystems.com',
  logo: 'https://www.upsellsystems.com/logo-512x512.png',
  description:
    'UpsellSystems is a web and software agency based in Cairo, Egypt, serving small businesses, startups, and founders in Cairo. The agency builds high-converting websites in 2\u20135 days and custom software systems \u2014 including AI integrations, SaaS products, and e-commerce stores \u2014 in under two weeks. UpsellSystems is known for fast delivery without sacrificing design quality or technical depth, making it a preferred partner for business owners who need professional digital products built quickly.',
  foundingDate: '2023',
  founder: { '@type': 'Person', name: 'Mustafa Essam' },
  telephone: '+20-128-696-0710',
  email: 'mo@upsellsystems.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  areaServed: [{ '@type': 'City', name: 'Cairo' }],
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
      { '@type': 'Offer', name: 'Website Design Services', description: 'Professional and responsive website design services in Cairo, Egypt. Custom layouts built for business owners, clinic owners, and startups.' },
      { '@type': 'Offer', name: 'Website Development Services', description: 'Fast and secure React website development in Cairo, Egypt, using Vite and Node.js for clean codebase optimization.' },
      { '@type': 'Offer', name: 'Website Redesign Cairo', description: 'Modernize old websites, improve website speed performance, and optimize UI/UX layouts for local conversion in Egypt.' },
      { '@type': 'Offer', name: 'Ecommerce Website Design', description: 'Custom online store development with checkout optimization, inventory admin panels, and Fawry/Paymob payment gateway integration.' },
    ],
  },
  knowsAbout: [
    'Web Design', 'Web Development', 'Website Redesign', 'Ecommerce Website Design',
    'Dental Clinic Website Design', 'Medical Website Design',
    'Local Search Engine Optimization (SEO)', 'React & Vite Development',
    'Responsive User Interface Design (UI/UX)', 'Conversion Rate Optimization (CRO)',
    'Fast Loading Speed Performance Engineering',
  ],
  sameAs: ['https://wa.me/201286960710'],
}

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

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is UpsellSystems?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems is a professional web design company in Cairo, Egypt. We build responsive custom websites, e-commerce stores, and high-converting landing pages for businesses, doctors, private clinics, and retail brands in Cairo. We are known for fast delivery (2–5 days) and direct developer communication.' },
    },
    {
      '@type': 'Question',
      name: 'Where in Cairo is UpsellSystems located?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems is located in Cairo, Egypt. We serve clients across Cairo, including New Cairo, Maadi, and Heliopolis, working remotely via WhatsApp and email to deliver speed and clarity on every project.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to design and develop a website?',
      acceptedAnswer: { '@type': 'Answer', text: 'We design and launch most custom business websites in Cairo within 2–5 business days. Landing pages and simple websites take 2–3 days, while complex multi-page websites or ecommerce stores take 3–7 business days.' },
    },
    {
      '@type': 'Question',
      name: 'Does UpsellSystems work with clients outside Cairo?',
      acceptedAnswer: { '@type': 'Answer', text: 'UpsellSystems primarily serves businesses in Cairo, Egypt. All projects are handled remotely via WhatsApp and email, so communication is seamless.' },
    },
  ],
}

// Site-wide schemas injected on EVERY page
const siteWideSchemas = [organizationSchema, websiteSchema]

// Route-specific schemas (added on top of site-wide schemas)
const extraSchemasByRoute = {
  '/faq': [faqPageSchema],
}

function buildSchemaScripts(url) {
  const schemas = [...siteWideSchemas, ...(extraSchemasByRoute[url] || [])]
  return schemas
    .map(s => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n')
}

// ─────────────────────────────────────────────────────────────────────────────
// Prerender all routes
// ─────────────────────────────────────────────────────────────────────────────
const routes = [
  '/', 
  '/about', 
  '/portfolio', 
  '/contact', 
  '/faq', 
  '/privacy', 
  '/terms', 
  '/website-design-cairo',
  '/website-development-cairo',
  '/website-redesign-cairo',
  '/ecommerce-website-design-cairo',
  '/website-design-for-dentists-cairo',
  '/website-design-for-doctors-cairo',
  '/clinic-website-design-cairo',
  '/website-design-new-cairo',
  '/website-design-maadi',
  '/website-design-heliopolis',
  '/404'
]

for (const url of routes) {
  const { html: appHtml, helmet } = render(url)
  const { headTags, bodyHtml } = extractLeadingHeadTags(appHtml)
  const helmetHead = [
    headTags || buildHelmetHead(helmet),
    buildSchemaScripts(url),
  ]
    .filter(Boolean)
    .join('\n    ')

  const html = template
    .replace('<!--app-html-->', () => bodyHtml)
  const htmlWithHead = injectHelmetHead(html, helmetHead)

  const filePath = `dist${url === '/' ? '/index' : url}.html`
  fs.writeFileSync(toAbsolute(filePath), htmlWithHead)
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
