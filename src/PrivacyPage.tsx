import { Link } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-white/20">
      <AppAppBar />
      <main className="max-w-3xl mx-auto px-6 py-32">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-white mb-6">Factory Flow</h1>

          <h2 className="text-4xl font-semibold text-white mb-6">Privacy Policy</h2>

          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Return to Factory Flow
          </Link>
        </div>

        <div className="space-y-8 leading-relaxed">
          <p>
            We are committed to protecting your personal information and being
            transparent about how we collect and process data.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Information We Collect</h3>
            <p>
              We collect information you provide directly, such as account
              registration details and support requests, as well as usage data
              like device information and interaction logs when you use the
              platform.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">How We Use Information</h3>
            <p>
              The data we collect helps us operate, maintain, and improve the
              services, personalize user experiences, and communicate important
              updates. We never sell your personal information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Sharing and Disclosure</h3>
            <p>
              We may share information with trusted service providers who assist
              us in operating the platform, provided they comply with safeguards
              that align with this policy. We may also disclose information when
              required by law or to protect the rights and safety of our users.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Your Choices</h3>
            <p>
              You can access, correct, or delete your personal information by
              contacting us. You may also opt out of certain communications by
              following the instructions in those messages.
            </p>
          </div>

          <div>
            <p>
              For privacy inquiries, email us at{' '}
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
