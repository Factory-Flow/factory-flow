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

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Who We Are</h3>
            <p>
              Factory Flow is a manufacturing operations platform. For privacy inquiries, contact{' '}
              <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">
                support@factoryflow.io
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Information We Collect</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Account information</p>
                <p>When you register, we collect your name, email address, and password. Passwords are stored using one-way hashing and are never readable by us.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Single sign-on</p>
                <p>If you authenticate via Google, GitHub, or Microsoft, we receive your name, email address, and a unique identifier from that provider to create and link your account.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Organization and team data</p>
                <p>We store your organization name, your role within it, and the date you joined.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Machine and production data</p>
                <p>Factory Flow stores the machine configurations, alert settings, and operational data your connected equipment reports — including part counts, cycle times, downtime records, and performance metrics.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Activity logs</p>
                <p>We maintain an audit trail of significant actions taken within your organization (such as creating or modifying machines, users, and settings). Each record captures who performed the action, what changed, when, and from which IP address and device.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Session and device information</p>
                <p>When you are signed in, we store your IP address and browser information alongside your session state. Sessions expire after a period of inactivity.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Billing information</p>
                <p>Billing is handled by Stripe. We store only a summary of your payment method (card type and last four digits) and your Stripe customer identifier. Full card details are processed and held exclusively by Stripe.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Usage data</p>
                <p>With your consent, we collect anonymized usage data via Google Analytics to understand how the platform is used in aggregate. See our Cookie Policy for details.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h3>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Authenticate you and maintain your session</li>
              <li>Deliver and improve the platform's features</li>
              <li>Send transactional emails such as verification codes, invitations, machine alerts, and billing notices</li>
              <li>Process subscription payments</li>
              <li>Maintain an audit trail for security and accountability within your organization</li>
              <li>Provide customer support</li>
              <li>Understand aggregate usage patterns (with your consent)</li>
            </ul>
            <p className="mt-3">We do not sell your personal information, use it for advertising, or make automated decisions that produce legal or similarly significant effects on you.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Information We Share</h3>
            <p className="mb-3">We share data only in the following circumstances:</p>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Service providers</p>
                <p>We use trusted third parties to operate Factory Flow, including Stripe for payment processing, an email delivery provider for transactional emails, and Google Analytics for aggregate usage reporting. These providers process data strictly on our behalf and are not permitted to use it for their own purposes.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">OAuth providers</p>
                <p>If you use single sign-on, the relevant provider (Google, GitHub, or Microsoft) is involved in the authentication exchange. We do not share your Factory Flow data back to them.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Legal requirements</p>
                <p>We may disclose information when required by law or to protect the rights, property, or safety of Factory Flow, our users, or the public.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Business transfers</p>
                <p>In the event of a merger, acquisition, or sale of assets, your data may transfer as part of that transaction. We will notify you before your data becomes subject to a materially different privacy policy.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Data Retention</h3>
            <p className="mb-3">We retain your data for as long as your account or organization is active. Specific retention periods:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Production time-series data (part counts, cycle times, downtime) is automatically deleted after 1 year</li>
              <li>Audit logs are retained up to your plan's storage limit; oldest records are removed first when that limit is reached</li>
              <li>Sessions expire after a period of inactivity or when you sign out</li>
              <li>Password reset tokens expire shortly after they are issued</li>
            </ul>
            <p className="mt-3">When an organization is permanently deleted, all associated data — machines, production records, audit logs, and team memberships — is irreversibly removed after a short grace period.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Your Rights and Choices</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Access and correction</p>
                <p>You can view and update your name and email address from your profile at any time.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Connected accounts</p>
                <p>You can link or unlink your Google, GitHub, and Microsoft accounts from your profile settings.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">API tokens</p>
                <p>You can revoke any API token from your organization's settings.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Delete your account</p>
                <p>
                  Contact{' '}
                  <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">
                    support@factoryflow.io
                  </a>{' '}
                  to request permanent deletion of your account and personal data.
                </p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Organization deletion</p>
                <p>Organization administrators can schedule their organization for deletion. All associated data is permanently removed after the grace period.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Analytics opt-out</p>
                <p>Decline the cookie banner to prevent analytics tracking. You can also install the Google Analytics Opt-out Add-on.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email preferences</p>
                <p>You can adjust notification preferences within the platform. Transactional emails required for the service (verification, password resets, billing) cannot be disabled while your account is active.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Data export</p>
                <p>You can export your organization's production analytics data directly from the platform.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
            <p>
              We protect your data using encrypted connections, secure session management, one-way password hashing, and access controls scoped to your organization. No system is completely secure — if you believe your account has been compromised, contact{' '}
              <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">
                support@factoryflow.io
              </a>{' '}
              immediately.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Children</h3>
            <p>Factory Flow is a business operations platform and is not directed at children. We do not knowingly collect personal information from individuals under 16.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h3>
            <p>When we make material changes, we will update the date at the top of this page. Continued use of the platform after changes are posted constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
            <p>
              <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">
                support@factoryflow.io
              </a>
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-500">
          Last updated May 13, 2026.
        </div>
      </main>
      <Footer />
    </div>
  );
}
