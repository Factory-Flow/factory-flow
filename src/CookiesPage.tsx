import { Link } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-white/20">
      <AppAppBar />
      <main className="max-w-3xl mx-auto px-6 py-32">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-white mb-6">Factory Flow</h1>

          <h2 className="text-4xl font-semibold text-white mb-6">Cookie Policy</h2>

          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Return to Factory Flow
          </Link>
        </div>

        <div className="space-y-8 leading-relaxed">
          <p>
            Cookies and similar technologies help us understand how the
            platform is used, deliver essential functionality, and improve the
            experience.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">What Are Cookies?</h3>
            <p>
              Cookies are small data files stored on your device when you visit
              a website. They allow the site to remember your preferences and
              track certain behaviors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">How We Use Cookies</h3>
            <p>
              We use essential cookies for authentication and security,
              preference cookies to remember settings, and analytics cookies to
              monitor performance and usage trends.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Managing Cookies</h3>
            <p>
              You can adjust your browser settings to refuse cookies or alert
              you when cookies are being used. Note that disabling cookies may
              impact the functionality of the services.
            </p>
          </div>

          <div>
            <p>
              For questions about this policy, contact{' '}
              <a
                href="mailto:support@factoryflow.io"
                className="text-blue-400 hover:text-blue-300"
              >
                support@factoryflow.io
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-500">
          Last updated January 13, 2026 at 3:16 PM.
        </div>
      </main>
      <Footer />
    </div>
  );
}
