import ProductsSection from '@/components/product/productSection'

export const metadata = {
  title: "Our Software Products & Solutions Portfolio",
  description: "Explore innovative software products, SaaS applications, mobile apps, AI tools, and custom software solutions from Amaar App. Browse our portfolio of enterprise software, web applications, business automation tools, and technology products designed for digital transformation and business growth.",
  keywords: ["software products", "SaaS products", "mobile applications", "AI tools", "enterprise software", "web applications", "business automation", "software solutions", "technology products", "custom software", "digital products", "software portfolio"],
  openGraph: {
    title: "Our Products & Solutions | Amaar App",
    description: "Discover innovative software products, SaaS applications, AI tools, and custom solutions from our portfolio.",
    images: [{
      url: '/app.jpg',
      width: 1200,
      height: 630,
      alt: 'Amaar App Software Products'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Products | Amaar App',
    description: 'Innovative software products and solutions for modern businesses.',
    images: ['/app.jpg']
  },
  alternates: {
    canonical: '/product'
  }
};

import React from 'react'

function page() {
  return (
    <div>
      <ProductsSection />
    </div>
  )
}

export default page