import { useEffect } from 'react';

// Declare Stripe pricing table as a custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'pricing-table-id': string;
        'publishable-key': string;
      };
    }
  }
}

export default function Pricing() {
  useEffect(() => {
    // Load Stripe pricing table script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="pricing" className="pt-12 pb-24 md:pt-16 md:pb-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Pricing
          </h2>
          <p className="text-lg md:text-xl text-secondary">
            Choose the plan that fits your operation
          </p>
        </div>

        {/* Stripe Pricing Table */}
        <div className="max-w-[1200px] mx-auto">
          <stripe-pricing-table
            pricing-table-id="prctbl_1SX3HRIV19rxTAcODRUyTokV"
            publishable-key="pk_test_51INgdvIV19rxTAcOuPSS8nBEEirmGhITwvATaDGew6HmiDlyiNChJBEBc3igtFc5fZqCxZp3plqsRvKk58vefkA000PpgNIsfG"
          />
        </div>
      </div>
    </section>
  );
}
