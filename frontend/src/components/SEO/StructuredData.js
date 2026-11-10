export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://amaarapp.online';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Amaar App',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: '512',
      height: '512'
    },
    image: `${baseUrl}/banner1.jpg`,
    description: 'Leading software development agency specializing in AI agents, web development, mobile apps, and e-commerce solutions.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+8801712378140', // Placeholder, but better structure
      contactType: 'customer service',
      email: 'monirhraju@gmail.com',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://www.linkedin.com/company/amaarapp',
      'https://twitter.com/amaarapp',
      'https://github.com/amaarapp',
      'https://www.facebook.com/amaarapp',
      'https://www.instagram.com/amaarapp'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dattapara, Tongi',
      addressLocality: 'Gazipur',
      addressRegion: 'Gazipur',
      postalCode: '1712',
      addressCountry: 'BD'
    }
  };
}

export function generateWebsiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://amaarapp.online';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Amaar App',
    url: baseUrl,
    description: 'Premier software development company specializing in AI agents, machine learning, mobile app development, web development, and e-commerce solutions.',
    publisher: { '@id': `${baseUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateServiceSchema(service) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://amaarapp.online';
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service-${service.type.toLowerCase().replace(/\s+/g, '-')}`,
    serviceType: service.type,
    provider: { '@id': `${baseUrl}/#organization` },
    description: service.description,
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.type,
      itemListElement: service.offerings?.map((offering, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offering.name || offering
        },
        position: index + 1
      }))
    }
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: 'Amaar App'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Amaar App',
      logo: {
        '@type': 'ImageObject',
        url: 'https://amaarapp.online/logo.png'
      }
    }
  };
}

export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
