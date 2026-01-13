import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
//import Highlights from './components/Highlights';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieConsentToast from './components/CookieConsentToast';

export default function MarketingPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Factory Flow',
      url: 'https://factoryflow.io/',
      logo: 'https://factoryflow.io/factoryflow_logo.svg',
      description: 'Factory Flow provides real-time production monitoring and analytics for manufacturers.',
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@factoryflow.io',
        contactType: 'Customer Support',
        availableLanguage: 'English',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Factory Flow',
      url: 'https://factoryflow.io/',
      description:
        'Factory Flow gives manufacturers real-time visibility into the performance of their machines with live machine data. Monitor production metrics, track OEE, and optimize performance.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      image: 'https://factoryflow.io/social/og-image.png',
      screenshot: 'https://factoryflow.io/social/og-image.png',
      creator: {
        '@type': 'Organization',
        name: 'Factory Flow',
        url: 'https://factoryflow.io/',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'CAD',
        lowPrice: '0',
        highPrice: '999',
        offerCount: '3',
      },
      featureList: [
        'Real-time production monitoring',
        'OEE tracking and analytics',
        'Instant alerts and notifications',
        'Universal machine integration',
        'Performance analytics and insights',
        'Enterprise security',
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Manufacturing teams and operations leaders',
      },
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Factory Flow',
      url: 'https://factoryflow.io/',
      description: 'Production monitoring for any machine in minutes',
      publisher: {
        '@type': 'Organization',
        name: 'Factory Flow',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <AppAppBar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <CookieConsentToast />
    </div>
  );
}
