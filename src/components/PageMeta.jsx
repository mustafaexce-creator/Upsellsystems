import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.upsellsystems.com'

/**
 * Per-page <head> meta: canonical, og:url, title, and description.
 * Uses the current route from React Router to build self-referencing canonical URLs.
 *
 * Usage:
 *   <PageMeta
 *     title="About | UpsellSystems"
 *     description="Learn about UpsellSystems…"
 *   />
 */
export default function PageMeta({ title, description }) {
  const { pathname } = useLocation()
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}
