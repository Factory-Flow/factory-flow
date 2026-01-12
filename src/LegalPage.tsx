import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';

type LegalSectionId = 'terms' | 'privacy' | 'cookies';

type LegalSection = {
  id: LegalSectionId;
  label: string;
  title: string;
  body: ReactNode;
};

const sectionRoutes: Record<LegalSectionId, string> = {
  terms: '/terms',
  privacy: '/privacy',
  cookies: '/cookies',
};

function useLegalSections(): LegalSection[] {
  return useMemo(
    () => [
      {
        id: 'terms',
        label: 'Terms of Service',
        title: 'Terms of Service',
        body: (
          <div className="space-y-6 text-gray-400">
            <p>
              Welcome to Factory Flow. By accessing or using our services, you
              agree to be bound by these Terms of Service. If you do not agree,
              please discontinue use of the site and services.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Accounts and Access</h3>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities occurring under your
                account. You must notify us promptly of any unauthorized use or
                security breach.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Acceptable Use</h3>
              <p>
                You agree not to misuse the services, interfere with their normal
                operation, or access them using a method other than the interface
                and instructions provided by Factory Flow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Service Changes</h3>
              <p>
                We reserve the right to modify or discontinue the services at any
                time, with or without notice. We will provide reasonable notice
                when feasible.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Liability</h3>
              <p>
                To the maximum extent permitted by law, Factory Flow is not
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues arising from
                your use of the services.
              </p>
            </div>
            <div>
              <p>
                Questions about these terms can be directed to{' '}
                <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">support@factoryflow.io</a>.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: 'privacy',
        label: 'Privacy Policy',
        title: 'Privacy Policy',
        body: (
          <div className="space-y-6 text-gray-400">
            <p>
              We are committed to protecting your personal information and being
              transparent about how we collect and process data.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Information We Collect</h3>
              <p>
                We collect information you provide directly, such as account
                registration details and support requests, as well as usage data
                like device information and interaction logs when you use the
                platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How We Use Information</h3>
              <p>
                The data we collect helps us operate, maintain, and improve the
                services, personalize user experiences, and communicate important
                updates. We never sell your personal information.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Sharing and Disclosure</h3>
              <p>
                We may share information with trusted service providers who assist
                us in operating the platform, provided they comply with safeguards
                that align with this policy. We may also disclose information when
                required by law or to protect the rights and safety of our users.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Your Choices</h3>
              <p>
                You can access, correct, or delete your personal information by
                contacting us. You may also opt out of certain communications by
                following the instructions in those messages.
              </p>
            </div>
            <div>
              <p>
                For privacy inquiries, email us at{' '}
                <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">support@factoryflow.io</a>.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: 'cookies',
        label: 'Cookie Policy',
        title: 'Cookie Policy',
        body: (
          <div className="space-y-6 text-gray-400">
            <p>
              Cookies and similar technologies help us understand how the
              platform is used, deliver essential functionality, and improve the
              experience.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">What Are Cookies?</h3>
              <p>
                Cookies are small data files stored on your device when you visit
                a website. They allow the site to remember your preferences and
                track certain behaviors.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How We Use Cookies</h3>
              <p>
                We use essential cookies for authentication and security,
                preference cookies to remember settings, and analytics cookies to
                monitor performance and usage trends.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Managing Cookies</h3>
              <p>
                You can adjust your browser settings to refuse cookies or alert
                you when cookies are being used. Note that disabling cookies may
                impact the functionality of the services.
              </p>
            </div>
            <div>
              <p>
                For questions about this policy, contact{' '}
                <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">support@factoryflow.io</a>.
              </p>
            </div>
          </div>
        ),
      },
    ],
    []
  );
}

export default function LegalPage(props: {
  activeSectionId?: LegalSectionId;
}) {
  const { activeSectionId } = props;
  const sections = useLegalSections();
  const defaultSectionId = sections[0]?.id;
  const [tabIndex, setTabIndex] = useState(() => {
    if (!defaultSectionId) return 0;
    const targetId = activeSectionId ?? defaultSectionId;
    const initialIndex = sections.findIndex((section) => section.id === targetId);
    return initialIndex === -1 ? 0 : initialIndex;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = activeSectionId ?? defaultSectionId;
    if (!targetId) return;
    const index = sections.findIndex((section) => section.id === targetId);
    if (index !== -1 && index !== tabIndex) {
      setTabIndex(index);
    }
  }, [activeSectionId, defaultSectionId, sections, tabIndex]);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
    const nextSectionId = sections[index]?.id;
    if (nextSectionId) {
      navigate(sectionRoutes[nextSectionId]);
    }
  };

  const activeSection = sections[tabIndex];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <AppAppBar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
            <div className="sticky top-32">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">Legal</h2>
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => handleTabChange(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${tabIndex === index
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 min-h-[600px]">
              <h1 className="text-3xl font-bold text-white mb-8 pb-8 border-b border-white/10">
                {activeSection.title}
              </h1>
              {activeSection.body}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
