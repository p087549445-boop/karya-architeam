import React from 'react';

interface LocalBusinessSchemaProps {
  pageName?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ pageName = "Home" }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KARYA ARCHITEAM",
    "description": `Jasa Pasang Plafon Gypsum & PVC ${pageName} - Kabupaten Tangerang Terpercaya sejak 1 Januari 2019`,
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "areaServed": [
      "Pinang",
      "Jambe", 
      "Tenjo",
      "Cikupa",
      "Balaraja",
      "Pasar Kemis",
      "Sukamulya",
      "Tigaraksa",
      "Cimone",
      "Karawaci",
      "Kutruk",
      "Margasari",
      "Cibadak",
      "Sodong",
      "Jatake",
      "Kadu Agung",
      "Bitung"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan KARYA ARCHITEAM",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Jasa Pasang Plafon Gypsum"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Jasa Pasang Plafon PVC"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Jasa Pemasangan Molding Dinding"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
};

export default LocalBusinessSchema;
