import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Terms of Service - Fiabe Magiche',
  description: 'Terms of service for the Fiabe Magiche app, covering usage rules, subscriptions, data protection, and user rights.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">TERMS OF SERVICE</h1>
        <p>
          <strong>Fiabe Magiche</strong>
          <br />
          <em>Last updated: 14 August 2025</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
        <strong>IMPORTANT:</strong> By reading and using this application you fully accept these Terms of Service. If you do not agree, please refrain from using the app.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. GENERAL INFORMATION</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">1.1 About us</h3>
          <p>
            <strong>Fiabe Magiche</strong> is a mobile application developed by:
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p>
              <strong>Developer:</strong> Marino Panariello
              <br />
              <strong>Email:</strong>{' '}
              <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">
                marinopanariello@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">1.2 What we provide</h3>
          <p>The app allows families to create personalised stories for children aged 0–12 using artificial intelligence, generating:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Custom narrative text</li>
            <li>Illustrations produced by AI</li>
            <li>Audio narration for every story</li>
            <li>Tools to save and organise content</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. ACCEPTANCE OF THE TERMS</h2>
        <p>By using the application you confirm that you:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Have read and fully understood these Terms</li>
          <li>Agree to all conditions listed here</li>
          <li>Have the legal authority to accept these Terms</li>
          <li>Are of legal age or have parental/guardian consent</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. USING THE APPLICATION</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.1 Licence</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable licence to use the app for personal, non-commercial purposes only.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.2 Permitted use</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Create stories for personal and family use</li>
            <li>Save and organise generated stories</li>
            <li>Share stories with family members and friends</li>
            <li>Use the narration features to read stories aloud</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.3 Prohibited use</h3>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
            <strong>STRICTLY FORBIDDEN:</strong>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Commercial use of the stories without written permission</li>
              <li>Selling, reselling, or monetising generated stories</li>
              <li>Copying, modifying, or distributing the app software</li>
              <li>Reverse engineering or attempting to access source code</li>
              <li>Using bots or automated systems</li>
              <li>Creating inappropriate, offensive, or illegal content</li>
              <li>Violating intellectual property rights</li>
              <li>Circumventing technical or usage limits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. SUBSCRIPTIONS AND PAYMENTS</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Freemium model</h3>
          <p>The app offers:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Free tier</strong>: 3 stories with essential features
            </li>
            <li>
              <strong>Premium subscription</strong>: 20 stories per month plus advanced options
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 Pricing plans</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Plan</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Price</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Duration</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Free</td>
                  <td className="border border-slate-200 px-4 py-3">€0</td>
                  <td className="border border-slate-200 px-4 py-3">Lifetime</td>
                  <td className="border border-slate-200 px-4 py-3">3 stories + basic functions</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Monthly Premium</td>
                  <td className="border border-slate-200 px-4 py-3">€2.99/month</td>
                  <td className="border border-slate-200 px-4 py-3">30 days</td>
                  <td className="border border-slate-200 px-4 py-3">20 stories per month</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Annual Premium</td>
                  <td className="border border-slate-200 px-4 py-3">€19.99/year</td>
                  <td className="border border-slate-200 px-4 py-3">365 days</td>
                  <td className="border border-slate-200 px-4 py-3">240 stories per year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Subscription management</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Auto-renewal</strong>: subscriptions renew automatically unless cancelled
            </li>
            <li>
              <strong>Cancellation</strong>: manage through Apple App Store / Google Play
            </li>
            <li>
              <strong>Downgrade</strong>: premium features end when the plan expires
            </li>
            <li>
              <strong>Refunds</strong>: handled under Apple/Google policies
            </li>
          </ul>
        </div>

        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          We reserve the right to adjust prices with 30 days&apos; notice. Changes will not affect active subscriptions until the next renewal.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. CONTENT AND INTELLECTUAL PROPERTY</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 AI-generated content</h3>
          <p>Stories are generated based on your prompts. You acknowledge that:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Content is created algorithmically</li>
            <li>We cannot guarantee absolute uniqueness</li>
            <li>Similar inputs may produce similar outputs</li>
            <li>All content is filtered to remain appropriate for children</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Ownership of your stories</h3>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
            <strong>YOUR STORIES:</strong> You retain ownership of the stories you create, including text, images, and audio generated for you. You may use them freely for personal purposes.
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.3 Ownership of the app</h3>
          <p>The application, its code, design, interface, and technology remain our exclusive property.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.4 Commercial use</h3>
          <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
            <strong>COMMERCIAL USE:</strong> Any commercial exploitation of generated stories requires a separate licence. Contact us to arrange a commercial agreement.
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. PRIVACY AND DATA PROTECTION</h2>
        <p>
          Data collection and use are governed by our{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/storie-narrative/privacy-policy.html">
            Privacy Policy
          </a>, which is an integral part of these Terms.
        </p>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-700">6.1 Privacy highlights</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>All data is stored locally on your device</li>
            <li>No personal data is shared with third parties for marketing</li>
            <li>External AI services are used solely to generate content</li>
            <li>Full GDPR compliance with safeguards for minors</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. THIRD-PARTY SERVICES</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.1 Integrated services</h3>
          <p>The app relies on external services to deliver functionality:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Google Gemini</strong> – text generation
            </li>
            <li>
              <strong>Runware API</strong> – image generation
            </li>
            <li>
              <strong>Amazon Polly</strong> – voice synthesis
            </li>
            <li>
              <strong>RevenueCat</strong> – subscription management
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.2 Service limitations</h3>
          <p>We are not responsible for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Interruptions in third-party services</li>
            <li>Changes to external APIs</li>
            <li>Quality of content produced by third parties</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. AVAILABILITY AND SUPPORT</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.1 Service availability</h3>
          <p>We strive to keep the app available 24/7, but the following may occur:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Scheduled maintenance (with prior notice)</li>
            <li>Unexpected technical interruptions</li>
            <li>Limitations caused by external services</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.2 Support channels</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Email</strong>: marinopanariello@gmail.com
            </li>
            <li>
              <strong>Response time</strong>: within two business days
            </li>
            <li>
              <strong>Supported languages</strong>: Italian, English
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. LIABILITY LIMITS</h2>

        <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4 space-y-2">
          <h3 className="text-xl font-semibold text-slate-700">9.1 Warranty disclaimer</h3>
          <p>The app is provided “as is” without any warranties. We do not guarantee:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Uninterrupted or error-free operation</li>
            <li>Complete accuracy of AI-generated content</li>
            <li>Compatibility with every device</li>
            <li>Continuous availability of the service</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">9.2 Liability cap</h3>
          <p>Our liability is limited to the subscription fees paid in the last 12 months. We are not liable for indirect, consequential, or punitive damages.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. GOVERNING LAW AND DISPUTES</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.1 Applicable law</h3>
          <p>These Terms are governed by Italian law.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.2 Jurisdiction</h3>
          <p>
            For consumer disputes, the competent court is the user&apos;s place of residence. For commercial disputes, jurisdiction lies with the Court of Torre Annunziata.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. CHANGES TO THE TERMS</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.1 Updates</h3>
          <p>We may update these Terms to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Comply with new legislation</li>
            <li>Improve or expand the service</li>
            <li>Clarify existing provisions</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.2 Notifications</h3>
          <p>We will notify you of significant changes via:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>In-app notice (30 days in advance)</li>
            <li>Email (if provided)</li>
            <li>Update on this page</li>
          </ul>
        </div>
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          Continued use after changes means you accept the revised Terms. If you do not agree, stop using the app and cancel your subscription.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">12. TERMINATION</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.1 Termination by you</h3>
          <p>You may stop using the app at any time by:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Uninstalling the application</li>
            <li>Cancelling your subscription via the store</li>
            <li>Requesting data deletion</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.2 Termination by us</h3>
          <p>We may suspend or terminate access if:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>You breach these Terms</li>
            <li>You misuse the application</li>
            <li>Fraudulent or illegal activity occurs</li>
            <li>Authorities issue a lawful request</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.3 Effects of termination</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Immediate loss of access to premium features</li>
            <li>Local data remains on the device unless removed</li>
            <li>No refunds for unused periods (except statutory withdrawal rights)</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">13. EU RIGHT OF WITHDRAWAL</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.1 Cooling-off period</h3>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
            EU consumers may withdraw from the subscription within 14 days of purchase without providing a reason.
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.2 Exercising the right</h3>
          <p>To exercise the right of withdrawal:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Email <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></li>
            <li>Clearly state your intention to withdraw</li>
            <li>Provide subscription details (plan, purchase date)</li>
          </ol>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.3 Refund</h3>
          <p>If the withdrawal is valid, we will refund the full amount within 14 days using the original payment method.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">14. CONTACTS</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 space-y-2">
          <p className="font-semibold">Questions about these Terms?</p>
          <p>
            Email:{' '}
            <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">
              marinopanariello@gmail.com
            </a>
          </p>
          <p>Subject: “Terms of Service – Fiabe Magiche”</p>
          <p className="font-semibold">Postal address:</p>
          <p>Via Alcide De Gasperi 49, Torre del Greco (NA), Italy</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">15. FINAL PROVISIONS</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.1 Severability</h3>
          <p>If any clause is deemed invalid, the remaining provisions remain in full force.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.2 No waiver</h3>
          <p>Failure to enforce any clause does not constitute a waiver of our rights.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.3 Entire agreement</h3>
          <p>These Terms, together with the Privacy Policy, constitute the entire agreement between the parties.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.4 Language</h3>
          <p>In case of conflict between language versions, the English version prevails.</p>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500 space-y-2">
        <p>© 2025 Fiabe Magiche. All rights reserved.</p>
        <p>
          <strong>Legally binding document</strong> – Version 1.0
        </p>
        <p>Compliance: GDPR, Italian Consumer Code, EU eCommerce Directives</p>
      </footer>
    </LegalLayout>
  )
}
