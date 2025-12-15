import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy - Helsa',
  description: 'Privacy policy for the Helsa app with details on data collection, usage, and GDPR rights.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p>
          <strong>Helsa</strong>
          <br />
          <em>Last updated: December 15, 2025 | Version 1.2</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
        <strong>Summary:</strong> Helsa collects your health data to allow you to store and manage it. Data is encrypted, securely synchronized on our servers, and <strong>never sold to third parties</strong>. We use third-party services for authentication, storage, payments, and error monitoring.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Data Controller</h2>
        <p>The Data Controller for personal data processing is:</p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p>
            <strong>Marino Panariello</strong>
            <br />
            Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
            <br />
            Address: Via Alcide De Gasperi 49, Torre del Greco (NA), Italy
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Categories of Data Collected</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.1 Account Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Data</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Legal Basis</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Email address</td>
                  <td className="border border-slate-200 px-4 py-3">Registration, login, service communications</td>
                  <td className="border border-slate-200 px-4 py-3">Contract</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Required</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Password (bcrypt hash)</td>
                  <td className="border border-slate-200 px-4 py-3">Secure authentication</td>
                  <td className="border border-slate-200 px-4 py-3">Contract</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Required</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">First/Last name</td>
                  <td className="border border-slate-200 px-4 py-3">Personalization, document headers</td>
                  <td className="border border-slate-200 px-4 py-3">Contract</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Optional</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Apple ID / Google ID</td>
                  <td className="border border-slate-200 px-4 py-3">Social authentication (if used)</td>
                  <td className="border border-slate-200 px-4 py-3">Contract</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Optional</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.2 Health Data (Special Categories under Art. 9 GDPR)</h3>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
            <strong>Sensitive Data:</strong> The documents you upload may contain information related to your health. This data is processed <strong>exclusively</strong> to provide you with the requested service, based on your <strong>explicit consent</strong> given at the time of registration.
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Category</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Examples</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Medical documents</td>
                  <td className="border border-slate-200 px-4 py-3">Reports, prescriptions, medical records, tests</td>
                  <td className="border border-slate-200 px-4 py-3">Until user deletion</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Attachments</td>
                  <td className="border border-slate-200 px-4 py-3">PDFs, images of medical documents</td>
                  <td className="border border-slate-200 px-4 py-3">Until user deletion</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Medical appointments</td>
                  <td className="border border-slate-200 px-4 py-3">Date, location, doctor, specialty, notes</td>
                  <td className="border border-slate-200 px-4 py-3">Until user deletion</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Medications and therapies</td>
                  <td className="border border-slate-200 px-4 py-3">Drug name, dosage, frequency, reminders</td>
                  <td className="border border-slate-200 px-4 py-3">Until user deletion</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Family profiles</td>
                  <td className="border border-slate-200 px-4 py-3">Name, date of birth, family relationship</td>
                  <td className="border border-slate-200 px-4 py-3">Until user deletion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.3 Technical Data (Automatically Collected)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Data</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Device type, model, OS</td>
                  <td className="border border-slate-200 px-4 py-3">Compatibility, debugging</td>
                  <td className="border border-slate-200 px-4 py-3">90 days</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">App version</td>
                  <td className="border border-slate-200 px-4 py-3">Support, updates</td>
                  <td className="border border-slate-200 px-4 py-3">90 days</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">IP address</td>
                  <td className="border border-slate-200 px-4 py-3">Security, server geolocation</td>
                  <td className="border border-slate-200 px-4 py-3">30 days</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Error logs (crash reports)</td>
                  <td className="border border-slate-200 px-4 py-3">Debugging, stability improvement</td>
                  <td className="border border-slate-200 px-4 py-3">90 days</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Access timestamps</td>
                  <td className="border border-slate-200 px-4 py-3">Security, audit</td>
                  <td className="border border-slate-200 px-4 py-3">1 year</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Anonymous identifiers</td>
                  <td className="border border-slate-200 px-4 py-3">Aggregate analytics</td>
                  <td className="border border-slate-200 px-4 py-3">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.4 Payment Data</h3>
          <p>Helsa <strong>does not store</strong> credit card or payment method data directly. Payments are handled by:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Apple App Store</strong> - for iOS users</li>
            <li><strong>Google Play Store</strong> - for Android users</li>
            <li><strong>RevenueCat</strong> - for cross-platform subscription management</li>
          </ul>
          <p>We only receive confirmation of payment and subscription status (active/expired).</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Purposes and Legal Bases for Processing</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Legal Basis (GDPR)</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Data Involved</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Service delivery (storage, sync, reminders)</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.b - Contract performance</td>
                <td className="border border-slate-200 px-4 py-3">Account, documents, appointments, medications</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Health data processing</td>
                <td className="border border-slate-200 px-4 py-3">Art. 9.2.a - Explicit consent</td>
                <td className="border border-slate-200 px-4 py-3">All health data</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Subscription and billing management</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.b - Contract performance</td>
                <td className="border border-slate-200 px-4 py-3">Email, subscription status</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Service communications (security, critical updates)</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.b - Contract performance</td>
                <td className="border border-slate-200 px-4 py-3">Email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Error monitoring and app stability</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.f - Legitimate interest</td>
                <td className="border border-slate-200 px-4 py-3">Technical data, crash reports</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Analytics and service improvement</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.a - Consent</td>
                <td className="border border-slate-200 px-4 py-3">Anonymized usage data</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Legal and tax compliance</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.c - Legal obligation</td>
                <td className="border border-slate-200 px-4 py-3">Transaction data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Third-Party Services (Sub-processors)</h2>
        <p>To provide the service, we use the following technology providers:</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Supabase Inc.</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Role</th>
                  <td className="border border-slate-200 px-4 py-3">Cloud database, authentication, file storage</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Data processed</th>
                  <td className="border border-slate-200 px-4 py-3">All user data (encrypted)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Location</th>
                  <td className="border border-slate-200 px-4 py-3">USA (with EU server option - Frankfurt)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Safeguards</th>
                  <td className="border border-slate-200 px-4 py-3">SOC 2 Type II, GDPR DPA, Standard Contractual Clauses</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 PostHog Inc.</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Role</th>
                  <td className="border border-slate-200 px-4 py-3">Product analytics and user behavior analysis</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Data processed</th>
                  <td className="border border-slate-200 px-4 py-3">App usage events, anonymized user ID, device info, in-app actions</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Location</th>
                  <td className="border border-slate-200 px-4 py-3">USA with <strong>EU server</strong> (eu.i.posthog.com)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Safeguards</th>
                  <td className="border border-slate-200 px-4 py-3">SOC 2 Type II, GDPR compliant, Data Processing Addendum</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">posthog.com/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3"><strong>Details on PostHog usage:</strong></p>
          <ul className="list-disc space-y-2 pl-6">
            <li>We use EU servers to ensure data remains within the European Union</li>
            <li>We collect app lifecycle events (open, close, background)</li>
            <li>Events are aggregated and anonymized</li>
            <li>We do not collect document contents or health data through analytics</li>
            <li>You can request deletion of your analytics data by contacting us</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Sentry (Functional Software Inc.)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Role</th>
                  <td className="border border-slate-200 px-4 py-3">Error monitoring and crash reporting</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Data processed</th>
                  <td className="border border-slate-200 px-4 py-3">Stack traces, device info, anonymized user ID</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Location</th>
                  <td className="border border-slate-200 px-4 py-3">USA (EU servers available)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Safeguards</th>
                  <td className="border border-slate-200 px-4 py-3">SOC 2 Type II, GDPR DPA, Data Processing Addendum</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">sentry.io/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.4 RevenueCat Inc.</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Role</th>
                  <td className="border border-slate-200 px-4 py-3">In-app subscription management</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Data processed</th>
                  <td className="border border-slate-200 px-4 py-3">User ID, subscription status, purchase receipts</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Location</th>
                  <td className="border border-slate-200 px-4 py-3">USA</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Safeguards</th>
                  <td className="border border-slate-200 px-4 py-3">GDPR compliant, DPA available</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">revenuecat.com/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.5 Apple Inc. / Google LLC</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Role</th>
                  <td className="border border-slate-200 px-4 py-3">App distribution, in-app payments, social authentication</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Data processed</th>
                  <td className="border border-slate-200 px-4 py-3">Apple/Google account (if used for login), transactions</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy</a> | <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.6 Expo / React Native (Meta)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Role</th>
                  <td className="border border-slate-200 px-4 py-3">Development framework, push notifications, OTA updates</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Data processed</th>
                  <td className="border border-slate-200 px-4 py-3">Push token, diagnostic data</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">expo.dev/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Data Transfers Outside the EU</h2>
        <p>Some of our providers are based in the United States. Data transfers comply with GDPR through:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Standard Contractual Clauses (SCC)</strong> - Standard contractual clauses approved by the European Commission</li>
          <li><strong>EU-US Data Privacy Framework</strong> - For certified providers</li>
          <li><strong>Binding Corporate Rules</strong> - Where applicable</li>
        </ul>
        <p>You can request a copy of the appropriate safeguards by contacting us at the email address provided.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Data Retention</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Category</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Retention Period</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">After Account Deletion</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Account data</td>
                <td className="border border-slate-200 px-4 py-3">Duration of contractual relationship</td>
                <td className="border border-slate-200 px-4 py-3">Deleted within 30 days</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Documents and attachments</td>
                <td className="border border-slate-200 px-4 py-3">Until deleted by user</td>
                <td className="border border-slate-200 px-4 py-3">Deleted within 30 days</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Backups</td>
                <td className="border border-slate-200 px-4 py-3">30 days (rolling backup)</td>
                <td className="border border-slate-200 px-4 py-3">Purged within 60 days</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Technical logs</td>
                <td className="border border-slate-200 px-4 py-3">90 days</td>
                <td className="border border-slate-200 px-4 py-3">N/A (anonymized)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Analytics data (PostHog)</td>
                <td className="border border-slate-200 px-4 py-3">2 years</td>
                <td className="border border-slate-200 px-4 py-3">Anonymized/deleted upon request</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Billing data</td>
                <td className="border border-slate-200 px-4 py-3">10 years (tax requirement)</td>
                <td className="border border-slate-200 px-4 py-3">Retained for legal obligation</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Consent and audit trail</td>
                <td className="border border-slate-200 px-4 py-3">5 years from last interaction</td>
                <td className="border border-slate-200 px-4 py-3">Retained for legal protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. Data Security</h2>
        <p>We implement appropriate technical and organizational measures:</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">Encryption</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>TLS 1.3 for all communications in transit</li>
            <li>AES-256 for data at rest in the database</li>
            <li>Bcrypt hashing for passwords</li>
            <li>Expo SecureStore for device tokens</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">Access Control</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Row Level Security (RLS) on database</li>
            <li>JWT authentication with refresh tokens</li>
            <li>Optional biometric authentication (Face ID/Touch ID)</li>
            <li>Automatic session timeout</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">Infrastructure</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Servers in certified data centers (SOC 2, ISO 27001)</li>
            <li>Automatic daily backups</li>
            <li>24/7 monitoring with alerting</li>
            <li>Disaster recovery plan</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">Access to Your Files</h3>
          <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
            <strong>Privacy by Design:</strong> The files you upload (documents, reports, images) are protected. <strong>Our team will not access your data without a legitimate reason</strong>.
          </div>
          <p>We have implemented technical and organizational measures to protect your health files:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Row Level Security (RLS):</strong> Each file is accessible exclusively by the owner through their own JWT authentication</li>
            <li><strong>Access restrictions:</strong> Administrative access to user content is strictly limited and controlled</li>
            <li><strong>Audit trail:</strong> Every data access is tracked and verifiable</li>
          </ul>
          <p className="mt-3"><strong>We may access your data only for:</strong></p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Providing technical support at your request</li>
            <li>Account recovery assistance</li>
            <li>Investigating security incidents or abuse</li>
            <li>Complying with legal obligations (e.g., court orders)</li>
          </ul>
          <p className="mt-3"><strong>For routine technical support, we typically only view:</strong></p>
          <ul className="list-disc space-y-2 pl-6">
            <li>File metadata (name, creation date, size)</li>
            <li>Synchronization status</li>
            <li>Application error logs (without file content)</li>
            <li>Aggregate counts and statistics</li>
          </ul>
          <p className="mt-3">This architecture ensures that your health data remains private during normal operations and technical support requests.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Your Rights (Art. 15-22 GDPR)</h2>
        <p>As a data subject, you have the right to:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Right</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Description</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">How to Exercise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Access</strong> (Art. 15)</td>
                <td className="border border-slate-200 px-4 py-3">Obtain confirmation of processing and a copy of your data</td>
                <td className="border border-slate-200 px-4 py-3">Email or in-app function</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Rectification</strong> (Art. 16)</td>
                <td className="border border-slate-200 px-4 py-3">Correct inaccurate or incomplete data</td>
                <td className="border border-slate-200 px-4 py-3">Directly in-app or email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Erasure</strong> (Art. 17)</td>
                <td className="border border-slate-200 px-4 py-3">Request deletion of your data (&quot;right to be forgotten&quot;)</td>
                <td className="border border-slate-200 px-4 py-3">Settings → Delete account</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Restriction</strong> (Art. 18)</td>
                <td className="border border-slate-200 px-4 py-3">Restrict processing in certain circumstances</td>
                <td className="border border-slate-200 px-4 py-3">Email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Portability</strong> (Art. 20)</td>
                <td className="border border-slate-200 px-4 py-3">Receive your data in a structured format (JSON/CSV)</td>
                <td className="border border-slate-200 px-4 py-3">Settings → Export data</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Objection</strong> (Art. 21)</td>
                <td className="border border-slate-200 px-4 py-3">Object to processing based on legitimate interest</td>
                <td className="border border-slate-200 px-4 py-3">Email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Withdraw consent</strong> (Art. 7)</td>
                <td className="border border-slate-200 px-4 py-3">Withdraw consent at any time</td>
                <td className="border border-slate-200 px-4 py-3">Settings or email</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>We will respond within <strong>30 days</strong> of the request. For complex requests, the deadline may be extended by an additional 60 days with prior notice.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Account and Data Deletion</h2>
        <p>You can request complete deletion in two ways:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>In-app:</strong> Settings → Account → Delete account</li>
          <li><strong>Email:</strong> Write to <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></li>
        </ol>
        <p>Deletion involves:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Irreversible deletion of all documents and attachments</li>
          <li>Removal of data from servers within 30 days</li>
          <li>Purging of backups within 60 days</li>
          <li>Retention only of data required for legal obligations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Minors</h2>
        <p>Helsa is not intended for minors under 16 years of age. We do not knowingly collect data from minors under 16 without verifiable consent from a parent or guardian.</p>
        <p>If you are a parent and believe your child has provided personal data, please contact us immediately for removal.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. Cookies and Tracking Technologies</h2>
        <p>The mobile application <strong>does not use cookies</strong> in the traditional sense. We use:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>SecureStore:</strong> To securely store authentication tokens on the device</li>
          <li><strong>AsyncStorage:</strong> For user preferences and local cache</li>
          <li><strong>SQLite:</strong> For offline document storage</li>
          <li><strong>PostHog SDK:</strong> For product analytics (with EU servers)</li>
        </ul>
        <p>For more details, see our <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/cookie-policy">Cookie Policy</a>.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">12. Changes to the Privacy Policy</h2>
        <p>We reserve the right to update this policy. In case of substantial changes:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>We will send you an in-app notification</li>
          <li>We will send you an email (if you have an account)</li>
          <li>We will update the &quot;Last updated&quot; date</li>
          <li>For changes requiring new consent, we will explicitly request it</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">13. Complaints</h2>
        <p>If you believe the processing of your data violates the GDPR, you have the right to file a complaint with:</p>
        <div className="rounded-xl border border-slate-200 bg-orange-50 px-5 py-4">
          <p>
            <strong>Italian Data Protection Authority (Garante per la Protezione dei Dati Personali)</strong>
            <br />
            Piazza Venezia 11 - 00187 Rome, Italy
            <br />
            Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:protocollo@gpdp.it">protocollo@gpdp.it</a>
            <br />
            PEC: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:protocollo@pec.gpdp.it">protocollo@pec.gpdp.it</a>
            <br />
            Website: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">14. Contact</h2>
        <div className="rounded-xl border border-slate-200 bg-violet-50 px-5 py-4 space-y-4">
          <div>
            <p className="font-semibold">For privacy-related questions:</p>
            <p>Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></p>
          </div>
          <div>
            <p className="font-semibold">Data Controller:</p>
            <p>
              Marino Panariello
              <br />
              Via Alcide De Gasperi 49, Torre del Greco (NA), Italy
              <br />
              Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© 2024 Helsa. All rights reserved.</p>
        <p>This policy has been drafted in compliance with EU Regulation 2016/679 (GDPR).</p>
      </footer>
    </LegalLayout>
  )
}
