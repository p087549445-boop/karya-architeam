import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbSEOProps {
  items: BreadcrumbItem[];
}

const BreadcrumbSEO: React.FC<BreadcrumbSEOProps> = ({ items }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://karya-architeam.my.id${item.href}` : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.href && !item.active ? (
                <a 
                  href={item.href} 
                  className="hover:text-primary transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href || '');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span className={item.active ? 'text-primary font-medium' : ''}>
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-2" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbSEO;