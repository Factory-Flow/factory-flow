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
          <Link to="/" className="text-blue-400 hover:text-blue-300 text-sm">
            Return to Factory Flow
          </Link>
        </div>

        <div className="space-y-10 leading-relaxed">

          {/* What Are Cookies */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">What Are Cookies?</h3>
            <p>
              Cookies are small text files stored on your device when you visit Factory Flow. They
              are used to maintain your session, remember your preferences, and understand how the
              platform is used. In addition to cookies, Factory Flow uses browser{' '}
              <span className="text-white font-medium">localStorage</span> and{' '}
              <span className="text-white font-medium">sessionStorage</span> to persist certain
              interface settings locally on your device.
            </p>
          </div>

          {/* Cookies We Use */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Cookies We Use</h3>

            {/* Essential */}
            <div className="mb-8">
              <h4 className="text-base font-semibold text-white mb-1">Essential Cookies</h4>
              <p className="text-sm text-gray-400 mb-4">
                These cookies are required for the platform to function. They cannot be disabled.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium w-1/3">Cookie Name</th>
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium w-1/4">Duration</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 pr-4 text-white font-mono text-xs align-top">factory_flow_session</td>
                      <td className="py-3 pr-4 text-gray-300 align-top">120 minutes (or until browser close if not using "Remember me")</td>
                      <td className="py-3 text-gray-300 align-top">Maintains your authenticated session. Stored as an encrypted, HTTP-only cookie — not accessible by JavaScript.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white font-mono text-xs align-top">CSRF token<br /><span className="text-gray-500 font-sans">(inline, not a standalone cookie)</span></td>
                      <td className="py-3 pr-4 text-gray-300 align-top">Per session</td>
                      <td className="py-3 text-gray-300 align-top">Protects against cross-site request forgery on all state-changing requests. Regenerated on login and logout.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white font-mono text-xs align-top">Remember me token</td>
                      <td className="py-3 pr-4 text-gray-300 align-top">Up to 1 year</td>
                      <td className="py-3 text-gray-300 align-top">Set only if you check "Remember me" at login. Allows you to stay signed in across browser sessions without re-authenticating.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Preference */}
            <div className="mb-8">
              <h4 className="text-base font-semibold text-white mb-1">Preference Cookies</h4>
              <p className="text-sm text-gray-400 mb-4">
                These cookies remember your interface settings and are exempt from encryption so they
                can be read before the page fully loads (e.g. to avoid a theme flash).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium w-1/3">Cookie Name</th>
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium w-1/4">Duration</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 pr-4 text-white font-mono text-xs align-top">appearance</td>
                      <td className="py-3 pr-4 text-gray-300 align-top">365 days</td>
                      <td className="py-3 text-gray-300 align-top">Stores your selected theme (light, dark, or system). Also mirrored in localStorage.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white font-mono text-xs align-top">sidebar_state</td>
                      <td className="py-3 pr-4 text-gray-300 align-top">7 days</td>
                      <td className="py-3 text-gray-300 align-top">Remembers whether the navigation sidebar is expanded or collapsed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics */}
            <div>
              <h4 className="text-base font-semibold text-white mb-1">Analytics Cookies</h4>
              <p className="text-sm text-gray-400 mb-4">
                These cookies are only set after you accept our cookie banner. If you decline, no
                analytics cookies are placed.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Service</th>
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Cookie(s)</th>
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Duration</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 pr-4 text-gray-300 align-top">Google Analytics 4 (via Google Tag Manager)</td>
                      <td className="py-3 pr-4 text-white font-mono text-xs align-top">_ga, _ga_*, and related GA4 cookies</td>
                      <td className="py-3 pr-4 text-gray-300 align-top">2 years / 1 minute</td>
                      <td className="py-3 text-gray-300 align-top">Measures aggregate usage: page views, session counts, navigation paths, and general traffic trends. No advertising or remarketing use.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Factory Flow does not currently use any advertising, affiliate, or marketing tracking cookies.
              </p>
            </div>
          </div>

          {/* Local Storage & Session Storage */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Local Storage &amp; Session Storage</h3>
            <p className="mb-4">
              In addition to cookies, Factory Flow stores some data directly in your browser's local
              or session storage. This data never leaves your device and is not transmitted to our
              servers.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium w-1/3">Key</th>
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium w-1/5">Storage Type</th>
                    <th className="text-left py-2 text-gray-400 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pr-4 text-white font-mono text-xs align-top">ff_cookie_consent</td>
                    <td className="py-3 pr-4 text-gray-300 align-top">localStorage</td>
                    <td className="py-3 text-gray-300 align-top">Records whether you have accepted the cookie banner.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white font-mono text-xs align-top">appearance</td>
                    <td className="py-3 pr-4 text-gray-300 align-top">localStorage</td>
                    <td className="py-3 text-gray-300 align-top">Synced copy of your theme preference (alongside the appearance cookie).</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white font-mono text-xs align-top">analytics:compactView</td>
                    <td className="py-3 pr-4 text-gray-300 align-top">localStorage</td>
                    <td className="py-3 text-gray-300 align-top">Whether you prefer the compact view on the Analytics page.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white font-mono text-xs align-top">analytics:windowSelection</td>
                    <td className="py-3 pr-4 text-gray-300 align-top">localStorage / sessionStorage</td>
                    <td className="py-3 text-gray-300 align-top">Your selected time window on the Analytics page.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white font-mono text-xs align-top">viewSettings:*</td>
                    <td className="py-3 pr-4 text-gray-300 align-top">localStorage</td>
                    <td className="py-3 text-gray-300 align-top">Saved column and view layout preferences on data pages.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-300 align-top">Beta / update banner dismissal keys</td>
                    <td className="py-3 pr-4 text-gray-300 align-top">localStorage</td>
                    <td className="py-3 text-gray-300 align-top">Tracks which informational banners you have dismissed.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-300 align-top">Licence expiry warning</td>
                    <td className="py-3 pr-4 text-gray-300 align-top">sessionStorage</td>
                    <td className="py-3 text-gray-300 align-top">One-time dismissal of the licence expiry notice per browser session.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Third-Party Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Third-Party Services</h3>

            <div className="mb-6">
              <h4 className="text-base font-semibold text-white mb-2">Google Analytics 4</h4>
              <p>
                We use Google Analytics to understand how the platform is used in aggregate. It is
                loaded via Google Tag Manager only after you consent. Google may process this data
                in accordance with{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Google's Privacy Policy
                </a>
                . Page view tracking is configured to
                fire on Inertia navigation events rather than on page load. We do not use Google
                Analytics for advertising or cross-site tracking purposes.
              </p>
            </div>

            <p className="mb-6">
              We do not currently integrate with any other third-party analytics, customer support,
              error monitoring, or marketing platforms.
            </p>

            <div>
              <h4 className="text-base font-semibold text-white mb-2">Authentication via OAuth</h4>
              <p>
                If you sign in using Google, Microsoft (Azure), or GitHub, those providers set
                their own cookies during the OAuth flow. Factory Flow does not control those
                cookies. Please refer to each provider's privacy policy for details.
              </p>
            </div>
          </div>

          {/* Managing Cookies */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Managing Cookies</h3>
            <ul className="space-y-3 list-none pl-0">
              <li>
                <span className="text-white font-medium">Browser settings</span> — Most browsers
                allow you to block or delete cookies via their privacy or security settings. Note
                that disabling essential cookies will prevent you from signing in.
              </li>
              <li>
                <span className="text-white font-medium">Cookie banner</span> — On your first
                visit you will see a cookie consent banner. Declining it prevents Google Analytics
                from loading. You can revisit this choice by clearing your browser's site data for
                factoryflow.io, which will reset the{' '}
                <span className="text-white font-mono text-xs">ff_cookie_consent</span>{' '}
                localStorage key.
              </li>
              <li>
                <span className="text-white font-medium">Opt-out of Google Analytics</span> — You
                can also install the Google Analytics Opt-out Browser Add-on to block GA4 tracking
                across all sites.
              </li>
            </ul>
          </div>

          {/* Updates */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Updates to This Policy</h3>
            <p>
              We may update this policy when we add or remove services that use cookies. The "Last
              updated" date at the top of this page reflects the most recent revision.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
            <p>
              Questions about this policy? Email{' '}
              <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">
                support@factoryflow.io
              </a>
              .
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
