import React from 'react';

interface LocalBusinessSchemaProps {
  pageName?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ pageName = "Home" }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KARYA ARCHITEAM",
    "description": `Jasa Pasang Plafon Gypsum & PVC ${pageName} - Tangerang Terpercaya sejak 2019`,
    "url": "https://karya-architeam.my.id",
    "telephone": "+628977230266",
    "email": "awan@karya-architeam.my.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl.raya sukamanah No.12, RT.002/RW.001 desa, Suka Manah, Kec. Jambe, Kabupaten Tangerang, Banten 15720",
      "addressLocality": "Kec. Jambe, Kabupaten Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15720",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.236197,
      "longitude": 106.531520
    },
    "openingHours": "Mo-Sa 08:00-17:00, Su 08:00-12:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "areaServed": [
      "Tangerang", "Tangerang Selatan", "Jakarta", "Depok", 
      "Tigaraksa", "Cikupa", "Balaraja", "Jambe"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
};

export default LocalBusinessSchema;
