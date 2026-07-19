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

function buildHelmetHead(helmet, extraSchemaHtml) {
  return [
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
    extraSchemaHtml,
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
    return html.replace('<!--helmet-head-->', helmetHead)
  }

  return html.replace(/<\/head>/i, `${helmetHead}\n  </head>`)
}

template = stripDefaultSeoTags(template)

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

// ─────────────────────────────────────────────────────────────────────────────
// Route → extra schemas map (site-wide schemas are always included)
// ─────────────────────────────────────────────────────────────────────────────
// NOTE: site-wide schemas (Organization and WebSite) are already
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
    headTags || buildHelmetHead(helmet, ''),
    buildSchemaScripts(url),
  ]
    .filter(Boolean)
    .join('\n    ')

  const html = template
    .replace('<!--app-html-->', bodyHtml)
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
