import { Helmet } from 'react-helmet-async'

/**
 * ServiceSchema component injects Service & BreadcrumbList JSON-LD schemas into landing pages.
 * 
 * Props:
 *  - serviceName: Name of the service (e.g., "Website Design Cairo")
 *  - description: Short description of the service
 *  - urlPath: Relative path (e.g., "/website-design-cairo")
 */
export default function ServiceSchema({ serviceName, description, urlPath }) {
  const fullUrl = `https://www.upsellsystems.com${urlPath}`

  const serviceSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@id': 'https://www.upsellsystems.com/#organization'
    },
    areaServed: {
      '@type': 'City',
      name: 'Cairo'
    },
    url: fullUrl
  }

  const breadcrumbSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.upsellsystems.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: serviceName,
        item: fullUrl
      }
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchemaData)}
      </script>
    </Helmet>
  )
}
