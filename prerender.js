import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// All static routes — /about and /faq added so their schemas are baked in
const routes = ['/', '/about', '/portfolio', '/contact', '/faq', '/privacy', '/terms']

for (const url of routes) {
  const { appHtml, helmet } = render(url)

  // Collect all Helmet head output for this route (title, meta, script/JSON-LD, etc.)
  const helmetTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].filter(Boolean).join('\n    ')

  const html = template
    .replace('<!--app-html-->', appHtml)
    .replace('<!--helmet-head-->', helmetTags)

  const filePath = `dist${url === '/' ? '/index' : url}.html`
  fs.writeFileSync(toAbsolute(filePath), html)
  console.log('pre-rendered:', filePath)
}

// Clean up server bundle so it's not deployed
fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
