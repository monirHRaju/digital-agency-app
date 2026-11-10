import BlogPage from '@/components/home/HomeBlog/BlogPage'
import { StructuredData, generateBreadcrumbSchema } from "@/components/SEO/StructuredData";

export const metadata = {
  title: "Tech Blog - Software Development Insights & Tutorials",
  description: "Stay updated with latest trends, best practices, and expert insights in software development, artificial intelligence, web development, mobile apps, and technology. Read tutorials, guides, case studies, and industry news from Amaar App developers and tech experts.",
  keywords: ["software development blog", "tech blog", "programming tutorials", "AI insights", "web development tips", "mobile app development", "technology trends", "coding tutorials", "developer blog", "software engineering", "tech articles", "industry insights"],
  openGraph: {
    title: "Tech Blog & Insights | Amaar App",
    description: "Expert insights, tutorials, and trends in software development, AI, web development, and technology.",
    images: [{
      url: '/banner1.jpg',
      width: 1200,
      height: 630,
      alt: 'Amaar App Tech Blog'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Blog | Amaar App',
    description: 'Latest insights and tutorials in software development and technology.',
    images: ['/banner1.jpg']
  },
  alternates: {
    canonical: '/blog'
  }
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Amaar App Tech Blog",
  "description": "Expert insights, tutorials, and trends in software development and technology.",
  "publisher": {
    "@type": "Organization",
    "name": "Amaar App",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amaarapp.online/logo.png"
    }
  }
};

export default function page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://amaarapp.online';
  const breadcrumbs = [
    { name: 'Home', url: baseUrl },
    { name: 'Blog', url: `${baseUrl}/blog` }
  ];

  return (
    <div>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={blogSchema} />
      <BlogPage />
    </div>
  )
}