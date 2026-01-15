import * as React from 'react';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const togglePanel = (panel: string) => {
    setExpanded(prev =>
      prev.includes(panel) ? prev.filter(p => p !== panel) : [...prev, panel]
    );
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'How do I contact customer support if I have a question or issue?',
      answer: 'You can reach our customer support team by emailing support@factoryflow.io.'
    },
    {
      id: 'panel2',
      question: 'Is there a free trial?',
      answer: 'Yes. We offer a 30 day free trial for all of our plans so your team can try Factory Flow risk free!'
    },
    {
      id: 'panel3',
      question: 'Can I cancel anytime?',
      answer: 'Yes. You can cancel your Factory Flow subscription at any time with no penalty.'
    },
    {
      id: 'panel4',
      question: 'Where is my data stored?',
      answer: 'Our data center is in the USA and is operated by Laravel Cloud.'
    }
  ];

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-20 tracking-[-0.02em]">
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border card-border rounded-xl bg-white/[0.02] overflow-hidden transition-all duration-200 hover:card-border-hover"
            >
              <button
                onClick={() => togglePanel(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left group cursor-pointer"
              >
                <span className="font-medium text-white text-[15px] group-hover:text-opacity-90 transition-opacity">{faq.question}</span>
                <span className={`transform transition-transform duration-200 flex-shrink-0 ml-4 ${expanded.includes(faq.id) ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${expanded.includes(faq.id) ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-5 pb-5 text-secondary text-[15px] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
