import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Terms of Service - Helsa',
  description: 'Terms and conditions of service for the Helsa app, covering usage rules, subscriptions, data protection, and user rights.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Terms and Conditions of Service</h1>
        <p>
          <strong>Helsa</strong>
          <br />
          <em>Last updated: December 15, 2025 | Version 1.2</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
        <strong>Summary:</strong> Helsa allows you to store and manage your health documents. By using the app, you accept these terms. The app <strong>does not provide medical advice</strong>. You are responsible for the content you upload.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Definitions</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>&quot;Service&quot;</strong>: The Helsa mobile application and all its features</li>
          <li><strong>&quot;User&quot; / &quot;You&quot;</strong>: Any person who uses the Service</li>
          <li><strong>&quot;Data Controller&quot; / &quot;We&quot;</strong>: Marino Panariello, owner and operator of Helsa</li>
          <li><strong>&quot;Content&quot;</strong>: Documents, images, data, and information uploaded by the User</li>
          <li><strong>&quot;Account&quot;</strong>: The set of credentials and data associated with a registered User</li>
          <li><strong>&quot;Pro Subscription&quot;</strong>: Paid plan with additional features</li>
          <li><strong>&quot;Grace Period&quot;</strong>: 90-day period during which cloud data is preserved after downgrade</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Acceptance of Terms</h2>
        <p>By accessing or using Helsa, you declare that you have:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Read, understood, and fully accepted these Terms</li>
          <li>Read and accepted our <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/privacy-policy">Privacy Policy</a></li>
          <li>Are at least 16 years of age</li>
          <li>Have the legal capacity to enter into binding contracts</li>
        </ul>
        <p>If you do not accept these Terms, you may not use the Service.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Description of the Service</h2>
        <p>Helsa is a mobile application that allows you to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Store and organize health documents (reports, prescriptions, tests)</li>
          <li>Manage medical appointments with reminders</li>
          <li>Track medications and therapies with daily reminders</li>
          <li>Create profiles for family members</li>
          <li>Synchronize data between devices (with registered account)</li>
          <li>Work offline with automatic synchronization</li>
        </ul>

        <div className="rounded-xl border-l-4 border-red-500 bg-red-50 px-5 py-4">
          <strong>IMPORTANT MEDICAL DISCLAIMER</strong>
          <p className="mt-2">Helsa is a <strong>personal organization</strong> tool and does <strong>NOT</strong>:</p>
          <ul className="list-disc space-y-2 pl-6 mt-2">
            <li>Provide medical diagnoses</li>
            <li>Offer medical advice or recommendations</li>
            <li>Replace the opinion of doctors or healthcare professionals</li>
            <li>Function as a certified medical device</li>
          </ul>
          <p className="mt-3"><strong>For any health-related decisions, ALWAYS consult a qualified physician.</strong></p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Registration and Account</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Account Creation</h3>
          <p>To use cloud synchronization features, you must create an account by providing:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>A valid and accessible email address</li>
            <li>A secure password (minimum 6 characters)</li>
          </ul>
          <p>You can also register via Apple ID or Google Account.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 User Obligations</h3>
          <p>You agree to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide accurate and truthful information</li>
            <li>Keep your account data up to date</li>
            <li>Keep your login credentials secure</li>
            <li>Not share access to your account with third parties</li>
            <li>Notify us immediately in case of unauthorized access</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Account Security</h3>
          <p>You are solely responsible for all activities performed with your account. We recommend:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Using a unique and complex password</li>
            <li>Enabling biometric authentication (Face ID/Touch ID)</li>
            <li>Not logging in from shared or unsecured devices</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Plans and Subscriptions</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 Free Plan</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Feature</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Storable documents</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">10 documents</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Total attachments</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">20 attachments</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Cloud storage</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">100 MB</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Single file size</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">10 MB</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Family profiles</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">1 profile (&quot;Me&quot; only)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Cloud synchronization</td>
                  <td className="border border-slate-200 px-4 py-3">Included</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Offline functionality</td>
                  <td className="border border-slate-200 px-4 py-3">Full</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Pro Subscription</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Feature</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Storable documents</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">200 documents</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Total attachments</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">400 attachments</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Cloud storage</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">1 GB (1024 MB)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Single file size</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">15 MB</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Family profiles</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">50 profiles</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Cloud synchronization</td>
                  <td className="border border-slate-200 px-4 py-3">Full</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Automatic backups</td>
                  <td className="border border-slate-200 px-4 py-3">Included</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Priority support</td>
                  <td className="border border-slate-200 px-4 py-3">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.3 Pricing and Billing</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Plan</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Pro Monthly</td>
                  <td className="border border-slate-200 px-4 py-3">€2.99/month</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Pro Annual</td>
                  <td className="border border-slate-200 px-4 py-3">€19.99/year (~44% savings)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Prices include VAT and may vary by country. The final price is shown in the store.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.4 Renewal and Cancellation</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>The subscription renews <strong>automatically</strong> at expiration</li>
            <li>You can cancel at any time from the store settings</li>
            <li>Cancellation must occur at least <strong>24 hours before</strong> renewal</li>
            <li>After cancellation, Pro access remains active until the end of the period</li>
            <li>At the end, the account switches to the Free plan (see Grace Period section)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.5 Refunds</h3>
          <p>Refunds are handled according to the policies of:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Apple App Store:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.apple.com/HT204084" target="_blank" rel="noopener noreferrer">Request Apple refund</a></li>
            <li><strong>Google Play Store:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Request Google refund</a></li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Grace Period</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.1 What is the Grace Period</h3>
          <p>When your Pro subscription expires or is cancelled, you are entitled to a <strong>90-day grace period</strong> during which:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>All your cloud data is <strong>fully preserved</strong></li>
            <li>You can continue to access and view all documents</li>
            <li>You can downgrade your data within FREE limits</li>
            <li>You can reactivate Pro subscription to keep everything</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.2 What Happens During the Grace Period</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Action</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Viewing existing documents</td>
                  <td className="border border-slate-200 px-4 py-3">Full</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Creating new documents</td>
                  <td className="border border-slate-200 px-4 py-3">Limited to FREE limits</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Uploading new attachments</td>
                  <td className="border border-slate-200 px-4 py-3">Limited to FREE limits</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Synchronization</td>
                  <td className="border border-slate-200 px-4 py-3">Active</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Editing existing documents</td>
                  <td className="border border-slate-200 px-4 py-3">Full</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Offline access</td>
                  <td className="border border-slate-200 px-4 py-3">Full</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.3 Communications During the Grace Period</h3>
          <p>We will send you reminder emails at the following intervals:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Immediately</strong> - Confirmation of downgrade and start of grace period</li>
            <li><strong>30 days before</strong> expiration - First reminder</li>
            <li><strong>10 days before</strong> expiration - Second reminder (urgent)</li>
            <li><strong>1 day before</strong> expiration - Final notice</li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.4 What Happens at Grace Period Expiration</h3>
          <p>At the end of the 90 days, if you have not reactivated your Pro subscription:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Item</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Excess documents (cloud)</td>
                  <td className="border border-slate-200 px-4 py-3">Deleted (beyond the 10 allowed)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Excess attachments (cloud)</td>
                  <td className="border border-slate-200 px-4 py-3">Deleted (beyond the 20 allowed)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Extra family profiles</td>
                  <td className="border border-slate-200 px-4 py-3">Disabled (only &quot;Me&quot; profile active)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Excess storage</td>
                  <td className="border border-slate-200 px-4 py-3">Freed</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Local data on device</td>
                  <td className="border border-slate-200 px-4 py-3 text-green-700 font-semibold">NEVER deleted</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
            <strong>Important:</strong> Local data stored on your device is <strong>NEVER deleted</strong>. Only cloud-synced data exceeding Free plan limits will be removed.
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.5 Deletion Criteria</h3>
          <p>When cloud data is reduced to comply with FREE limits:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Oldest documents</strong> are deleted first (by creation date)</li>
            <li>Attachments associated with deleted documents are removed</li>
            <li>Most recent documents are preserved up to the allowed limit</li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.6 How to Avoid Data Loss</h3>
          <p>To avoid losing cloud data you can:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Reactivate Pro subscription</strong> before the grace period expires</li>
            <li><strong>Export data</strong> locally to your device before expiration</li>
            <li><strong>Manually delete</strong> excess documents to stay within FREE limits</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. User Content</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.1 Ownership</h3>
          <p>You retain <strong>all rights</strong> to the content you upload to Helsa. We claim no intellectual property rights over your documents.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.2 Limited License</h3>
          <p>By uploading content, you grant us a limited, non-exclusive, revocable license to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Store the content on our servers</li>
            <li>Synchronize it between your devices</li>
            <li>Create backups for data security</li>
            <li>Display it in the app to you only</li>
          </ul>
          <p>This license automatically terminates upon deletion of the content or account.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.3 Content Responsibility</h3>
          <p>You are solely responsible for the content you upload and warrant that:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>You have the right to upload it (it&apos;s yours or you have authorization)</li>
            <li>It does not violate third-party rights (privacy, copyright, etc.)</li>
            <li>It does not contain illegal material</li>
            <li>It does not contain malware or harmful code</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.4 Backup and Data Loss</h3>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
            <strong>Important:</strong> Although we perform regular backups, we recommend maintaining <strong>local copies</strong> of your most important documents. We are not responsible for any data loss due to force majeure, technical errors, or accidental deletion on your part.
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Acceptable Use</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.1 Permitted Uses</h3>
          <p>You may use Helsa to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Store your personal health documents</li>
            <li>Manage family members&apos; documents with their consent</li>
            <li>Organize appointments and medical reminders</li>
            <li>Any personal, non-commercial use</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.2 Prohibited Uses</h3>
          <p>It is strictly prohibited to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Upload illegal, offensive content or content that violates third-party rights</li>
            <li>Attempt to access other users&apos; data</li>
            <li>Use the app for commercial purposes without authorization</li>
            <li>Reverse engineer, decompile, or disassemble the app</li>
            <li>Use bots, scrapers, or automated methods</li>
            <li>Interfere with the service&apos;s operation</li>
            <li>Circumvent security measures or limitations</li>
            <li>Resell or sublicense access to the service</li>
            <li>Impersonate other users or entities</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Intellectual Property</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">9.1 Rights of the Data Controller</h3>
          <p>Helsa, including:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name, logo, and trademarks</li>
            <li>Design, graphical interface, and UX</li>
            <li>Source code and software architecture</li>
            <li>Documentation and editorial content</li>
          </ul>
          <p>Are the exclusive property of the Data Controller and protected by intellectual property laws.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">9.2 License of Use</h3>
          <p>We grant you a license that is:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Limited, non-exclusive, and non-transferable</li>
            <li>For personal, non-commercial use</li>
            <li>Revocable in case of Terms violation</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Privacy and Data Protection</h2>
        <p>The processing of your personal data is governed by our <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/privacy-policy">Privacy Policy</a>, which forms an integral part of these Terms.</p>
        <p>In particular:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Health data is processed with your explicit consent</li>
          <li>We use encryption to protect your data</li>
          <li>You can request deletion, export, and access to your data</li>
          <li>We do not sell your data to third parties</li>
          <li>We use analytics (PostHog) to improve the service</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. Limitation of Liability</h2>

        <div className="rounded-xl border-l-4 border-red-500 bg-red-50 px-5 py-4">
          <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot;</strong>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.1 Disclaimer of Warranties</h3>
          <p>To the extent permitted by law, we exclude all warranties, express or implied, including:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Warranties of merchantability or fitness for a particular purpose</li>
            <li>Warranties that the service will be error-free or uninterrupted</li>
            <li>Warranties of absolute data security</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.2 Limitation of Damages</h3>
          <p>In no event shall we be liable for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Indirect, incidental, special, or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Medical decisions based on information in the app</li>
            <li>Damages arising from unauthorized access to your account</li>
            <li>Third-party service malfunctions</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.3 Maximum Limit</h3>
          <p>Our total liability to you, for any cause, is limited to the <strong>greater of</strong>:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>The amount paid for the subscription in the last 12 months</li>
            <li>€50.00 (fifty euros)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.4 Exceptions</h3>
          <p>The above limitations do not apply in cases of:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Willful misconduct or gross negligence</li>
            <li>Violation of mandatory consumer rights</li>
            <li>What is otherwise provided by mandatory regulations</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">12. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless the Data Controller from any claim, damage, loss, liability, and expense (including legal fees) arising from:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your use of the Service</li>
          <li>Violation of these Terms</li>
          <li>Violation of third-party rights</li>
          <li>Content you upload</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">13. Changes to the Service and Terms</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.1 Changes to the Service</h3>
          <p>We reserve the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Add, modify, or remove features</li>
            <li>Update prices (with 30 days&apos; notice)</li>
            <li>Discontinue the service with reasonable notice</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.2 Changes to the Terms</h3>
          <p>We may update these Terms. In case of material changes:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>We will notify you via email and/or in-app notification</li>
            <li>We will publish the new Terms at least 30 days in advance</li>
            <li>Continued use after the change constitutes acceptance</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">14. Suspension and Termination</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">14.1 Termination by You</h3>
          <p>You can terminate your account at any time from:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Settings → Account → Delete account</li>
            <li>Sending a request to <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">14.2 Termination by Us</h3>
          <p>We may suspend or terminate your account if:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>You violate these Terms</li>
            <li>You use the service fraudulently or illegally</li>
            <li>You fail to pay the subscription due</li>
            <li>Your account is inactive for over 24 months</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">14.3 Effects of Termination</h3>
          <p>Upon termination:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>You will lose access to cloud-synced data</li>
            <li>Local data on the device will remain accessible</li>
            <li>Cloud data will be deleted within 30 days</li>
            <li>Any active subscription will not be refunded</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">15. Governing Law and Jurisdiction</h2>
        <p>These Terms are governed by <strong>Italian law</strong>.</p>
        <p>For any dispute, the <strong>Court of Naples</strong> has exclusive jurisdiction, unless otherwise provided by mandatory law (e.g., consumer forum).</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.1 EU Consumer Rights</h3>
          <p>If you are a consumer residing in the European Union, the rights provided by the legislation of your country of residence remain reserved, including the right to bring action before the court of your place of residence.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">16. Alternative Dispute Resolution</h2>
        <p>In case of dispute, we invite you to contact us before taking legal action. We will do our best to resolve the issue amicably.</p>
        <p><strong>ODR Platform:</strong> If you are an EU consumer, you can use the European Commission&apos;s online dispute resolution platform: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">17. General Provisions</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and us</li>
          <li><strong>Waiver:</strong> Failure to exercise a right does not constitute waiver</li>
          <li><strong>Severability:</strong> If a clause is invalid, the others remain in force</li>
          <li><strong>Assignment:</strong> You may not assign these Terms. We may assign them to a successor</li>
          <li><strong>Force Majeure:</strong> We are not responsible for non-performance due to force majeure</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">18. Contact</h2>
        <div className="rounded-xl border border-slate-200 bg-violet-50 px-5 py-4 space-y-4">
          <div>
            <p className="font-semibold">For questions about the Terms:</p>
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
        <p>© 2025 Helsa. All rights reserved.</p>
        <p>These Terms are drafted in compliance with the Italian Consumer Code (Legislative Decree 206/2005) and the Italian Civil Code.</p>
      </footer>
    </LegalLayout>
  )
}
