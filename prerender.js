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
    helmet?.script?.toString(),
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
