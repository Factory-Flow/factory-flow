import { Link } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';

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

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
            <p>By creating an account or using Factory Flow, you agree to these Terms of Service. If you are using Factory Flow on behalf of an organization, you represent that you have authority to bind that organization to these terms.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">2. Description of Service</h3>
            <p>Factory Flow is a manufacturing operations platform that enables teams to monitor machines, track production performance, and analyze operational data. The platform is available as a cloud-hosted service and as a self-hosted deployment. Factory Flow Gateway is a companion desktop application that connects to industrial data sources — including OPC UA servers, MQTT brokers, and Modbus devices — and forwards machine data to the Factory Flow platform.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">3. Accounts and Organizations</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Registration</p>
                <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your credentials and for all activity that occurs under your account.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Organizations</p>
                <p>Factory Flow is organized around teams called organizations. All resources — machines, facilities, data, and settings — belong to the organization, not to any individual user.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Roles</p>
                <p className="mb-2">Each member of an organization is assigned one of three roles:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li><span className="text-white font-medium">Admin</span> — Full access, including member management, billing, and organization settings</li>
                  <li><span className="text-white font-medium">Editor</span> — Can create and modify resources such as machines, lines, and alerts</li>
                  <li><span className="text-white font-medium">Viewer</span> — Read-only access to all organization data and analytics</li>
                </ul>
                <p className="mt-2">Admins can invite members, assign roles, and remove members at any time. There is no single designated owner; any admin can perform administrative actions.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email verification</p>
                <p>Cloud accounts must verify their email address before accessing the platform.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">4. Subscriptions and Billing (Cloud)</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Plans</p>
                <p>Factory Flow offers three subscription plans — Basic, Pro, and Enterprise — each with different limits on the number of machines, members, facilities, alert rules, API tokens, and other resources. Current plan details and pricing are available on our website.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Billing</p>
                <p>Subscriptions are billed through Stripe. By subscribing, you authorize us to charge your payment method on a recurring basis. All fees are non-refundable except where required by law.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Downgrades</p>
                <p>If you downgrade to a plan with lower limits and your current usage exceeds those limits, you will have a 3-day grace period to reduce your usage. After the grace period, resources that exceed your plan limits will become inaccessible until usage is brought within the limits. No data is deleted during this process.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Payment failure</p>
                <p>If a payment fails, Stripe will retry the charge. Your access remains active during the retry period. If payment cannot be collected after all retries, access to the platform will be suspended until the outstanding balance is resolved.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Cancellation</p>
                <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period, after which your organization will be scheduled for deletion. You will retain access to the platform until the billing period ends.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">5. Self-Hosted Licensing</h3>
            <p>Self-hosted deployments require a valid license key issued by Factory Flow. License keys are non-transferable and are issued per installation. Your license key specifies the products covered and, where applicable, an expiration date. Using a self-hosted deployment beyond your license expiry date is not permitted. We will send reminders before your license expires.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">6. Factory Flow Gateway</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Installation and environment</p>
                <p>Factory Flow Gateway is installed and run on your own hardware and operating system. You are responsible for the machine it runs on, including its operating system, network configuration, available resources, and security. We do not warrant that Gateway will be compatible with all hardware, operating systems, or network environments.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Industrial network connections</p>
                <p>Gateway connects to industrial servers and devices — such as OPC UA servers, MQTT brokers, and Modbus devices — on your local network. You are responsible for ensuring that these connections are authorized, correctly configured, and appropriately secured. Factory Flow is not liable for any consequence arising from Gateway's connection to, or interaction with, your industrial network or the devices on it.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Data relay</p>
                <p>Gateway forwards data as received from connected sources without modification. We are not responsible for the accuracy, completeness, or integrity of data originating from your industrial servers or devices. If a source reports incorrect, missing, or malformed data, Gateway will forward that data as-is to the platform.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Connectivity and data gaps</p>
                <p>When used with the cloud-hosted platform, Gateway requires an active internet connection to transmit data. When used with a self-hosted deployment, Gateway communicates over your local network and does not require internet access. In either case, interruptions in connectivity — whether on your local network, your internet connection, or the platform — will result in gaps in reported data. We are not liable for data loss or gaps in production records caused by connectivity interruptions.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">No equipment control</p>
                <p>Gateway reads data from industrial servers and devices only. It does not write commands to, configure, or control any connected equipment. Factory Flow and Gateway are monitoring tools — responsibility for equipment operation remains entirely with you.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Licensing</p>
                <p>Use of Factory Flow Gateway may require a valid license key. License keys are non-transferable and are issued per installation. Using Gateway beyond your license terms is not permitted.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">7. Plan Limits and Fair Use</h3>
            <p>Your subscription plan sets limits on resources including machines, members, facilities, API tokens, alert rules, and monthly emails. These limits are enforced within the platform. API requests are subject to rate limits to ensure platform stability for all users.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">8. Your Data</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Ownership</p>
                <p>You own the data you and your organization submit to Factory Flow, including machine configurations and production data.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Export</p>
                <p>You can export your analytics data at any time from within the platform.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Retention</p>
                <p>Time-series production data (part counts, cycle times, downtime records) is automatically deleted after 1 year. Other data is retained for as long as your organization is active. See our Privacy Policy for full retention details.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Deletion</p>
                <p>When an organization is permanently deleted, all associated data is irreversibly removed. This cannot be undone.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">9. Acceptable Use</h3>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Use the platform to store or transmit unlawful, harmful, or abusive content</li>
              <li>Attempt to gain unauthorized access to any part of the platform or another organization's data</li>
              <li>Interfere with or degrade the performance of the platform for other users</li>
              <li>Reverse-engineer, decompile, or attempt to extract the source code of the platform</li>
              <li>Resell or sublicense access to the platform without our written consent</li>
              <li>Use automated tools to scrape or extract data beyond what is permitted by your plan and our API</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">10. Integrations and Third-Party Services</h3>
            <p className="mb-3">Factory Flow integrates with third-party services including Stripe for billing and OAuth providers (Google, GitHub, Microsoft) for authentication. Your use of those services is governed by their respective terms.</p>
            <p>We are not responsible for the availability, reliability, or conduct of third-party services. Outages or failures affecting Stripe, OAuth providers, cloud infrastructure, or other upstream services may impact your ability to access billing functions, sign in, or use the platform. We are not liable for any loss or disruption resulting from the unavailability of third-party services.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">11. Intellectual Property</h3>
            <p>Factory Flow and its underlying software, design, and trademarks are owned by us. These terms do not grant you any right to use our name, logo, or trademarks. You retain all intellectual property rights in the data you submit to the platform.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">12. Termination</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">By you</p>
                <p>
                  You may stop using the platform and request deletion of your account or organization at any time by contacting{' '}
                  <a href="mailto:support@factoryflow.io" className="text-blue-400 hover:text-blue-300">
                    support@factoryflow.io
                  </a>{' '}
                  or using the deletion option in your organization settings.
                </p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">By us — for cause</p>
                <p>We may suspend or terminate your access if you violate these terms, if your subscription lapses, or if your license key expires. For self-hosted deployments, we may revoke a license key if it is being used in breach of these terms.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">At-will suspension</p>
                <p>We reserve the right to suspend or terminate access to the platform at any time, with or without cause, with or without notice, at our sole discretion. Where reasonably practicable, we will provide advance notice and an opportunity to export your data before termination takes effect.</p>
              </div>
              <p>Upon termination, your right to access the platform ceases. Data deletion timelines follow the schedule described in our Privacy Policy.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">13. Disclaimers</h3>
            <div className="space-y-4">
              <p>The platform is provided "as is" and "as available." We do not warrant that the platform will be uninterrupted, error-free, or suitable for any particular purpose.</p>
              <div>
                <p className="text-white font-medium mb-1">Operational decisions</p>
                <p>Factory Flow is a monitoring and analytics tool. It displays data reported by your machines and integrations — it does not control equipment or direct production processes. All operational decisions, including decisions affecting equipment operation, worker safety, production output, and business continuity, remain solely your responsibility. We are not liable for production losses, equipment damage, safety incidents, regulatory consequences, or any other outcome arising from decisions made on the basis of platform data, including data that is delayed, inaccurate, incomplete, or interrupted.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Data accuracy</p>
                <p>We are not responsible for the accuracy, completeness, or timeliness of data submitted by you, your organization, or your connected machines and integrations — including data collected and forwarded by Factory Flow Gateway from OPC UA servers, MQTT brokers, Modbus devices, or any other industrial source. If a sensor, device, server, or integration reports incorrect, missing, or malformed data, Factory Flow will display that data as received. Verification of data accuracy is your responsibility.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Backups</p>
                <p>We provide data export tools so you can retrieve your organization's analytics data at any time. We do not guarantee backup, recovery, or restoration of your data in the event of accidental deletion, corruption, or account termination. You are responsible for exporting and maintaining your own copies of any data that is important to your operations.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Security of your systems</p>
                <p>We are not responsible for unauthorized access to your Factory Flow account or data resulting from compromised credentials, insecure networks or devices on your side, misconfigured self-hosted deployments, or misconfigured Factory Flow Gateway installations. You are responsible for securing access to your account, your industrial network and the servers Gateway connects to, the machine Gateway is installed on, and any self-hosted installation.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Analytics and computed metrics</p>
                <p>Factory Flow computes analytics, aggregations, and performance metrics — including OEE, cycle time averages, downtime summaries, and similar calculations — from data reported by your machines and integrations. These figures are provided for informational purposes only. We do not warrant the accuracy or completeness of any computed metric, and we are not liable for decisions made in reliance on analytics displayed within the platform. You are responsible for independently verifying any metric before acting on it.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">14. Limitation of Liability</h3>
            <p>To the maximum extent permitted by applicable law, Factory Flow's total liability for any claim arising out of or related to these terms or the platform shall not exceed the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">15. Indemnification</h3>
            <p>You agree to defend, indemnify, and hold harmless Factory Flow and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the platform; (b) data you or your organization submit to the platform; (c) your violation of these terms; or (d) your violation of any applicable law or the rights of any third party.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">16. Force Majeure</h3>
            <p>We are not liable for any failure or delay in performing our obligations under these terms where such failure or delay results from circumstances beyond our reasonable control, including but not limited to failures of cloud infrastructure or internet backbone providers, natural disasters, power outages, cyberattacks on upstream services, pandemics, or actions of governmental authorities. We will resume performance as soon as reasonably practicable following the cessation of such circumstances.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">17. Changes to These Terms</h3>
            <p>We may update these terms from time to time. We will notify you of material changes by updating the date at the top of this page or by email. Continued use of the platform after changes take effect constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">18. Governing Law</h3>
            <p>These terms are governed by the laws of the jurisdiction in which Factory Flow operates, without regard to conflict of law principles.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">19. Contact</h3>
            <p>
              For questions about these terms, contact{' '}
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
