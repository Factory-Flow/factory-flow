
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Highlights from './components/Highlights';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieConsentToast from './components/CookieConsentToast';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Factory Flow',
    url: 'https://factoryflow.io/',
    description:
      'Factory Flow gives manufacturers real-time visibility into the performance of their machines with live machine data.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    image: 'https://factoryflow.io/social/og-image.png',
    creator: {
      '@type': 'Organization',
      name: 'Factory Flow',
    },
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Visualize every machine and workstation in an interactive 3D factory layout.',
      'Monitor live production metrics with configurable dashboards and alerts.',
      'Coordinate teams with shared context to eliminate bottlenecks faster.',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Manufacturing teams and operations leaders',
    },
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <AppAppBar />
      <Hero />
      <div>
        {/*<LogoCollection />*/}
        <Features />
        {/*<Divider />*/}
        {/*<Highlights />*/}
        <FAQ />
        <Divider />
        <Footer />
      </div>
      <CookieConsentToast />
    </AppTheme>
  );
}
