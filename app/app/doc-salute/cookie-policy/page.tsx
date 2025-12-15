import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Cookie Policy - Helsa',
  description: 'Cookie policy for the Helsa app with details on technical cookies, local storage, and third-party services.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Cookie Policy</h1>
        <p>
          <strong>Helsa</strong>
          <br />
          <em>Last updated: December 15, 2025 | Version 1.2</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
        <strong>Summary:</strong> Helsa uses cookies and similar technologies exclusively for essential technical purposes required for the application to function. We do not use cookies for advertising profiling. For service analytics, we use privacy-respecting tools.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit a website or use an application. They store useful information to improve your browsing experience.</p>
        <p>In the context of a mobile application like Helsa, we also use equivalent technologies such as:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Local Storage:</strong> local storage in the browser or app</li>
          <li><strong>SQLite Database:</strong> local database for offline data</li>
          <li><strong>Secure Storage:</strong> secure storage for sensitive data</li>
          <li><strong>SDK Storage:</strong> data stored by integrated third-party services</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Legal Basis</h2>
        <p>Under Art. 122 of the Italian Privacy Code and the Italian Data Protection Authority&apos;s Cookie Guidelines (June 10, 2021), we distinguish between:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Technical cookies:</strong> do not require consent (Art. 122, paragraph 1)</li>
          <li><strong>First-party analytics cookies:</strong> equivalent to technical cookies if anonymized</li>
          <li><strong>Profiling cookies:</strong> require prior consent (not used)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Cookies and Technologies Used</h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Essential Technical Cookies
              <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Required</span>
            </h3>
            <p className="mt-2">These cookies are essential for the application to function and cannot be disabled.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Name</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Provider</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">sb-access-token</td>
                    <td className="border border-slate-200 px-4 py-3">Supabase</td>
                    <td className="border border-slate-200 px-4 py-3">JWT authentication token</td>
                    <td className="border border-slate-200 px-4 py-3">1 hour</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">sb-refresh-token</td>
                    <td className="border border-slate-200 px-4 py-3">Supabase</td>
                    <td className="border border-slate-200 px-4 py-3">Session renewal token</td>
                    <td className="border border-slate-200 px-4 py-3">7 days</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">auth_session</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Local session state</td>
                    <td className="border border-slate-200 px-4 py-3">Session</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">biometric_enabled</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Biometric authentication preference</td>
                    <td className="border border-slate-200 px-4 py-3">Persistent</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">onboarding_completed</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Initial tutorial completion status</td>
                    <td className="border border-slate-200 px-4 py-3">Persistent</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">theme_preference</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Light/dark theme preference</td>
                    <td className="border border-slate-200 px-4 py-3">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Local Database Storage
              <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Required</span>
            </h3>
            <p className="mt-2">Helsa uses a local SQLite database to enable offline use of the application.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Name</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Stored Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">helsa.db</td>
                    <td className="border border-slate-200 px-4 py-3">Main local database</td>
                    <td className="border border-slate-200 px-4 py-3">Documents, appointments, medications, categories, profiles</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">sync_metadata</td>
                    <td className="border border-slate-200 px-4 py-3">Cloud synchronization</td>
                    <td className="border border-slate-200 px-4 py-3">Last sync timestamp, synchronization status</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Social Authentication Cookies
              <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">On Request</span>
            </h3>
            <p className="mt-2">Used only if you choose to sign in with Apple ID or Google. Managed entirely by the respective providers.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Provider</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Apple Sign In</td>
                    <td className="border border-slate-200 px-4 py-3">Authentication with Apple ID</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Google Sign In</td>
                    <td className="border border-slate-200 px-4 py-3">Authentication with Google account</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Analytics and Monitoring Cookies
              <span className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">Analytics</span>
            </h3>
            <p className="mt-2">We use tools to understand how the application is used and to improve service stability.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Service</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Data Collected</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Server</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3 font-semibold">PostHog</td>
                    <td className="border border-slate-200 px-4 py-3">Product analytics</td>
                    <td className="border border-slate-200 px-4 py-3">Usage events, device info, anonymous ID</td>
                    <td className="border border-slate-200 px-4 py-3 font-semibold">EU (eu.i.posthog.com)</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">PostHog Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Sentry</td>
                    <td className="border border-slate-200 px-4 py-3">Crash reporting and error tracking</td>
                    <td className="border border-slate-200 px-4 py-3">Error stack traces, device info, breadcrumbs</td>
                    <td className="border border-slate-200 px-4 py-3">EU</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Sentry Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Expo Analytics</td>
                    <td className="border border-slate-200 px-4 py-3">App usage metrics</td>
                    <td className="border border-slate-200 px-4 py-3">App opens, version, platform</td>
                    <td className="border border-slate-200 px-4 py-3">USA</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">Expo Privacy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-3">
              <h4 className="text-lg font-semibold text-slate-700">PostHog Details</h4>
              <p>PostHog is our main product analytics tool. Here&apos;s how we use it:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-700">What we collect:</p>
                  <ul className="list-disc space-y-1 pl-6 text-sm">
                    <li>App lifecycle events (open, close, background)</li>
                    <li>In-app actions (screen navigation, feature usage)</li>
                    <li>Device information (type, OS, app version)</li>
                    <li>Anonymized user identifier</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">What we do NOT collect:</p>
                  <ul className="list-disc space-y-1 pl-6 text-sm">
                    <li>Health document content</li>
                    <li>Personally identifiable information</li>
                    <li>Information about medications or appointments</li>
                    <li>Any sensitive data</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border-l-4 border-green-500 bg-green-50 px-5 py-4 mt-3">
                <p className="font-semibold">GDPR Guarantees:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm mt-2">
                  <li><strong>EU Servers:</strong> all data is processed and stored in the European Union (eu.i.posthog.com)</li>
                  <li><strong>Anonymization:</strong> user identifiers are pseudonymized</li>
                  <li><strong>No advertising profiling</strong></li>
                  <li><strong>Limited retention:</strong> 2 years</li>
                  <li>You can request deletion of your analytics data by contacting us</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Payment Services Cookies
              <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">On Purchase</span>
            </h3>
            <p className="mt-2">Activated only if you decide to subscribe to a Pro plan.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Service</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">RevenueCat</td>
                    <td className="border border-slate-200 px-4 py-3">Subscription and in-app purchase management</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Apple App Store</td>
                    <td className="border border-slate-200 px-4 py-3">iOS payment processing</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Google Play Store</td>
                    <td className="border border-slate-200 px-4 py-3">Android payment processing</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Third-Party Cookies</h2>
        <p>Third-party services integrated into the application may set their own cookies. Helsa has no direct control over these cookies. Below is the list of services used:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Service</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Category</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Server Country</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Extra-EU Transfer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Supabase</td>
                <td className="border border-slate-200 px-4 py-3">Backend & Database</td>
                <td className="border border-slate-200 px-4 py-3">EU (Frankfurt)</td>
                <td className="border border-slate-200 px-4 py-3">No</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3 font-semibold">PostHog</td>
                <td className="border border-slate-200 px-4 py-3 font-semibold">Product Analytics</td>
                <td className="border border-slate-200 px-4 py-3 font-semibold">EU</td>
                <td className="border border-slate-200 px-4 py-3 font-semibold">No</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Sentry</td>
                <td className="border border-slate-200 px-4 py-3">Error Tracking</td>
                <td className="border border-slate-200 px-4 py-3">EU</td>
                <td className="border border-slate-200 px-4 py-3">Possible (SCC)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">RevenueCat</td>
                <td className="border border-slate-200 px-4 py-3">Payments</td>
                <td className="border border-slate-200 px-4 py-3">USA</td>
                <td className="border border-slate-200 px-4 py-3">Yes (DPF)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Expo</td>
                <td className="border border-slate-200 px-4 py-3">App Distribution</td>
                <td className="border border-slate-200 px-4 py-3">USA</td>
                <td className="border border-slate-200 px-4 py-3">Yes (DPF)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Apple</td>
                <td className="border border-slate-200 px-4 py-3">Auth & Payments</td>
                <td className="border border-slate-200 px-4 py-3">USA/Ireland</td>
                <td className="border border-slate-200 px-4 py-3">Yes (SCC)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Google</td>
                <td className="border border-slate-200 px-4 py-3">Auth & Payments</td>
                <td className="border border-slate-200 px-4 py-3">USA/Ireland</td>
                <td className="border border-slate-200 px-4 py-3">Yes (SCC)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Legend:</strong></p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>DPF:</strong> EU-US Data Privacy Framework</li>
          <li><strong>SCC:</strong> Standard Contractual Clauses</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. How We Manage Cookies in the Mobile App</h2>
        <p>Since Helsa is a native mobile application, cookie and local storage management works differently than traditional websites:</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 Local Storage</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Local data is stored in the application&apos;s sandbox</li>
            <li>It is not accessible by other applications</li>
            <li>It is deleted when the app is uninstalled</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Secure Storage</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Authentication tokens and sensitive data are stored securely</li>
            <li>On iOS: Keychain</li>
            <li>On Android: Encrypted Shared Preferences</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.3 Data Deletion</h3>
          <p>To delete all local data you can:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Use the &quot;Delete account&quot; feature in the app settings</li>
            <li>Uninstall the application from your device</li>
            <li>Clear the app data from your operating system settings</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. How to Manage Cookies on the Web</h2>
        <p>If you access Helsa through a web browser, you can manage cookies through your browser settings:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
          <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
        </ul>
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          <strong>Warning:</strong> Disabling technical cookies may compromise the application&apos;s functionality.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. Your Rights</h2>
        <p>Regarding cookies and tracking technologies, you have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Be informed</strong> about which cookies we use (this policy)</li>
          <li><strong>Refuse</strong> non-essential cookies (we don&apos;t use any)</li>
          <li><strong>Withdraw</strong> consent at any time (for optional cookies)</li>
          <li><strong>Request deletion</strong> of data collected through cookies</li>
          <li><strong>Object</strong> to processing for marketing purposes (not applicable)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Minors</h2>
        <p>Helsa does not use cookies for profiling and does not collect data for marketing purposes. The technical cookies necessary for the service to function are the same for all users, regardless of age.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Policy Updates</h2>
        <p>This Cookie Policy may be updated periodically. We will inform you of any significant changes through:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>In-app notification</li>
          <li>Updating the &quot;Last updated&quot; date at the top of this document</li>
          <li>Email (if you have provided your email address)</li>
        </ul>
        <p>We encourage you to periodically review this page to stay informed.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Contact</h2>
        <p>For any questions regarding this Cookie Policy or the processing of your data:</p>
        <div className="rounded-xl border border-slate-200 bg-violet-50 px-5 py-4">
          <p>
            <strong>Email:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
            <br />
            <strong>Data Controller:</strong> Marino Panariello
            <br />
            <strong>Address:</strong> Via Alcide De Gasperi 49, Torre del Greco (NA), Italy
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. Useful Links</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/privacy-policy">Full Privacy Policy</a></li>
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/terms-of-service">Terms of Service</a></li>
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.garanteprivacy.it/cookie" target="_blank" rel="noopener noreferrer">Italian Data Protection Authority - Cookies</a></li>
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">Your Online Choices (advertising opt-out)</a></li>
        </ul>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© 2025 Helsa. All rights reserved.</p>
        <p>
          <a className="hover:underline" href="/app/doc-salute/privacy-policy">Privacy Policy</a> | <a className="hover:underline" href="/app/doc-salute/terms-of-service">Terms of Service</a> | <a className="hover:underline" href="/app/doc-salute/cookie-policy">Cookie Policy</a>
        </p>
      </footer>
    </LegalLayout>
  )
}
