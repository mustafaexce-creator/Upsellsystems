import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// List all the static routes of the application
const routes = ['/', '/portfolio', '/contact', '/privacy', '/terms']

for (const url of routes) {
  const appHtml = render(url)
  const html = template.replace(`<!--app-html-->`, appHtml)

  const filePath = `dist${url === '/' ? '/index' : url}.html`
  fs.writeFileSync(toAbsolute(filePath), html)
  console.log('pre-rendered:', filePath)
}

// Clean up server bundle so it's not deployed
fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
