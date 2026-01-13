import { Link } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-white/20">
      <AppAppBar />
      <main className="max-w-3xl mx-auto px-6 py-32">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-white mb-6">Factory Flow</h1>

          <h2 className="text-4xl font-semibold text-white mb-6">Terms of Service</h2>

          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Return to Factory Flow
          </Link>
        </div>

        <div className="space-y-8 leading-relaxed">
          <p>
            Welcome to Factory Flow. By accessing or using our services, you
            agree to be bound by these Terms of Service. If you do not agree,
            please discontinue use of the site and services.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Accounts and Access</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities occurring under your
              account. You must notify us promptly of any unauthorized use or
              security breach.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Acceptable Use</h3>
            <p>
              You agree not to misuse the services, interfere with their normal
              operation, or access them using a method other than the interface
              and instructions provided by Factory Flow.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Service Changes</h3>
            <p>
              We reserve the right to modify or discontinue the services at any
              time, with or without notice. We will provide reasonable notice
              when feasible.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Liability</h3>
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
    </div>
  );
}
